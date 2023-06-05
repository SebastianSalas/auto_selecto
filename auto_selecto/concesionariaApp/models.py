from django.db import models

class User(models.Model):
    name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email = models.CharField(max_length=100)
    cedula = models.CharField(max_length=100)

class Client(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email = models.CharField(max_length=100)
    telephone = models.CharField(max_length=10)
    cedula = models.CharField(max_length=100)
