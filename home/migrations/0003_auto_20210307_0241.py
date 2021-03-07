# Generated by Django 3.1.2 on 2021-03-06 21:11

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0002_auto_20210307_0014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='blog_post', to=settings.AUTH_USER_MODEL),
        ),
    ]
