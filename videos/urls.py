from django.conf.urls import url, include
from .api import VideoResource
from . import views

video_resource = VideoResource()


urlpatterns = [
    # /
    url(r'^$', views.index, name='index'),
    url(r'^', include(video_resource.urls)),
]
