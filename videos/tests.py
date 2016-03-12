from django.test import TestCase

from .models import Video


# Create your tests here.
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
