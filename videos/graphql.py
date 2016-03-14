import sys
import models

import graphene

from graphene import relay
from graphene.contrib.django import DjangoNode
from graphene.contrib.django.filter import DjangoFilterConnectionField
from graphene.contrib.django.debug import DjangoDebugPlugin
reload(sys)
sys.setdefaultencoding('utf-8')

schema = graphene.Schema(
    name='Youtube Videos Schema',
    plugins=[DjangoDebugPlugin()]
)


class Video(DjangoNode):
    """
    An interesting youtube video
    """
    class Meta:
        model = models.Video
        filter_fields = ('title', 'description', 'url')


class Query(graphene.ObjectType):
    all_videos = DjangoFilterConnectionField(Video)


class CreateVideo(relay.ClientIDMutation):
    class Input:
        url = graphene.String(required=True)
        title = graphene.String()
        description = graphene.String()

    ok = graphene.Boolean()
    video = graphene.Field(Video)

    @classmethod
    def mutate_and_get_payload(cls, input, info):
        url = input.get('url')
        title = input.get('title')
        description = input.get('description')
        assert url, 'url must be not null'

        video = Video._meta.model(
            url=url, title=title, description=description
            )
        video.save()

        return CreateVideo(video=video, ok=bool(video.id))


class Mutation(graphene.ObjectType):
    create_video = graphene.Field(CreateVideo)

schema.query=Query
schema.mutation=Mutation
