# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-12 12:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='url',
            field=models.URLField(unique=True),
        ),
    ]
