from tastypie.resources import ModelResource
from .models import Video


class VideoResource(ModelResource):
    class Meta:
        queryset = Video.objects.all()
