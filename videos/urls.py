from django.conf.urls import url, include
from .api import VideoResource
from . import views
from django.views.decorators.csrf import csrf_exempt

from graphene.contrib.django.views import GraphQLView
from videos.graphql import schema

video_resource = VideoResource()


urlpatterns = [
    # /
    url(r'^$', views.index, name='index'),
    url(r'^', include(video_resource.urls)),
    url(r'^graphql', csrf_exempt(GraphQLView.as_view(schema=schema))),
    url(r'^graphiql', include('django_graphiql.urls')),
]
