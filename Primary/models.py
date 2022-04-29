from django.db import models


class HeaderContent(models.Model):
    text = models.CharField(max_length=255)


class Message(models.Model):
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    message = models.CharField(max_length=255)

