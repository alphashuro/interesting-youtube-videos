from django.test import TestCase, Client
from json import JSONEncoder
from .models import Video


class VideoTests(TestCase):

    def test_str_returns_title_if_it_is_not_blank(self):
        """
        __str__ should return the title of the video, if it is not blank
        """
        video = Video(url='A url', title='A title')
        self.assertEqual(str(video), 'A title')

    def test_str_returns_url_if_title_is_blank(self):
        """
        __str__ should return the url of the video, if the title is blank
        """
        video = Video(url='A url')
        self.assertEqual(str(video), 'A url')


class VideoRESTTests(TestCase):
    fixtures = ['videos']

    def test_video_route_returns_all_videos_in_db(self):
        """
        GET /video/ should return 3 videos
        since there are 3 videos in the fixtures
        """
        c = Client()
        response = c.get('/video/')
        result = response.json()
        self.assertEqual(result['meta']['total_count'], 3)

    def test_video_id_route_returns_a_single_video(self):
        """
        GET /video/id should return a single video
        that matches with id provided
        """
        c = Client()
        response = c.get('/video/1/')
        result = response.json()

        fixture1 = {}
        fixture1[u'id'] = 1
        fixture1[u'url'] = u"https://www.youtube.com/watch?v=Blm0EeLqiVc"
        fixture1[u'description'] = u"Dota 2's fails of the week"
        fixture1[u'title'] = u'Dota 2 Fails of the Week - Ep. 149'

        self.assertEqual(result['id'], fixture1['id'])
        self.assertEqual(result['url'], fixture1['url'])
        self.assertEqual(result['description'], fixture1['description'])
        self.assertEqual(result['title'], fixture1['title'])

    def test_POST_video_adds_a_video_to_the_database(self):
        """
        POST /video/ adds a json encoded video to the database
        """
        c = Client()
        new_video = {'url': 'a new url'}
        data = JSONEncoder().encode(new_video)
        response = c.post('/video/', data, content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_DELETE_video_removes_the_specified_video(self):
        """
        DELETE /video/id/ removes the specified video from the database
        """
        c = Client()
        response = c.delete('/video/3/')
        self.assertEqual(response.status_code, 204)
