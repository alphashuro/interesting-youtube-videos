from django.db import models


class Video(models.Model):
    title = models.CharField(max_length=50, blank=True)
    description = models.TextField(blank=True)
    url = models.URLField(unique=True)

    def __str__(self):
        if self.title:
            return self.title
        else:
            return self.url
