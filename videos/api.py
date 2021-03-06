from tastypie.resources import ModelResource
from .models import Video
from tastypie.authorization import Authorization


class VideoResource(ModelResource):
    class Meta:
        queryset = Video.objects.all()
        list_allowed_methods = ['get', 'post', 'delete']
        authorization = Authorization()
