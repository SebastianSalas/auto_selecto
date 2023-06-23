from django.db import models
from django.utils import timezone

from users.models import *

class Office(models.Model):
  name = models.CharField(max_length=60)
  address = models.CharField(max_length=60)
  telephone = models.CharField(max_length=10)
  nit = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"id: {self.id}, name: {self.name}, address: {self.address}, telephone: {self.telephone}, nit: {self.nit}, created_at: {self.created_at}"


class sparePart(models.Model):
  name = models.CharField(max_length=60)
  description = models.CharField(max_length=500, blank= True)
  officeID = models.ForeignKey(Office, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"id: {self.id}, name: {self.name}, office: {self.officeID}, description: {self.description}, created_at: {self.created_at}"


class officeAddress(models.Model):
  street = models.CharField(max_length=100)
  city = models.CharField(max_length=60)
  country = models.CharField(max_length=10)
  officeID = models.OneToOneField(Office, on_delete=models.CASCADE, default=None)

  def __str__(self):
    return f"id: {self.id}, street: {self.street}, city: {self.city}, country: {self.country}, officeID: {self.officeID}"

class vehicle(models.Model):
  model = models.CharField(max_length=60)
  brand = models.CharField(max_length=60)
  reference = models.CharField(max_length=10)
  officeID = models.OneToOneField(Office, on_delete=models.CASCADE, default=None)
  
  def __str__(self):
    return f"id: {self.id}, model: {self.model}, brand: {self.brand}, reference: {self.reference}, officeID: {self.officeID}"


class sale(models.Model):
  date = models.DateField()
  seller_id = models.OneToOneField(seller, on_delete=models.CASCADE, default=None)
  vehicle_id = models.OneToOneField(vehicle, on_delete=models.CASCADE, default=None)
  client_id = models.OneToOneField(Client, on_delete=models.CASCADE, default=None)
  officeID = models.OneToOneField(Office, on_delete=models.CASCADE, default=None)

  def __str__(self):
    return f"id: {self.id}, date: {self.date}, seller_id: {self.seller_id}, vehicle_id: {self.vehicle_id}, client_id: {self.client_id}"