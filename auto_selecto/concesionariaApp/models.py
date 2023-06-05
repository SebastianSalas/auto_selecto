from django.db import models
from django.utils import timezone

class User(models.Model):
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60)
  email = models.CharField(max_length=100)
  cedula = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, name: {self.name}, last_name: {self.last_name}, email: {self.email}, cedula: {self.cedula}, created_at: {self.created_at}"

class Client(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, default=None)
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60)
  email = models.CharField(max_length=100)
  telephone = models.CharField(max_length=10)
  cedula = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, user_id: {self.user_id}, name: {self.name}, last_name: {self.last_name}, email: {self.email}, telephone: {self.telephone}, cedula: {self.cedula}, created_at: {self.created_at}"
  
class Office(models.Model):
  name = models.CharField(max_length=60)
  address = models.CharField(max_length=60)
  telephone = models.CharField(max_length=10)
  nit = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, name: {self.name}, address: {self.address}, telephone: {self.telephone}, nit: {self.nit}, created_at: {self.created_at}"

class OfficeManager(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  office = models.OneToOneField(Office, on_delete=models.CASCADE)
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60)
  email = models.CharField(max_length=100)
  telephone = models.CharField(max_length=10)
  cedula = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, user_id: {self.user_id}, office_id: {self.office_id}, name: {self.name}, last_name: {self.last_name}, email: {self.email}, telephone: {self.telephone}, cedula: {self.cedula}, created_at: {self.created_at}"

