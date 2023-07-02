from django.db import models
from django.utils import timezone
from django.db import transaction
from users.models import Client, StaffMember



class City(models.Model):
  name = models.CharField(max_length=60)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, name: {self.name}, created_at: {self.created_at}"
  
  @classmethod
  @transaction.atomic
  def create_city(cls, name):
    city = cls(name=name)
    city.save()
    return city

class Office(models.Model):
  name = models.CharField(max_length=60)
  address = models.CharField(max_length=60)
  telephone = models.CharField(max_length=10)
  nit = models.CharField(max_length=100)
  city = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, name: {self.name}, address: {self.address}, telephone: {self.telephone}, nit: {self.nit}, created_at: {self.created_at}"
  
  @classmethod
  @transaction.atomic
  def create_office(cls, name, address, telephone, nit, city):
    office = cls(name=name, address=address, telephone=telephone, nit=nit, city=city)
    office.save()
    return office
  
class CompanyPosition(models.Model):
  name = models.CharField(max_length=60)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, name: {self.name}, created_at: {self.created_at}"
  
  @classmethod
  @transaction.atomic
  def create_company_position(cls, name):
    company_position = cls(name=name)
    company_position.save()
    return company_position
  
class Vehicle(models.Model):
    name = models.CharField(max_length=60)
    brand = models.CharField(max_length=60)
    type = models.CharField(max_length=40)
    year = models.IntegerField()
    value = models.DecimalField(max_digits=11)
    hp = models.FloatField()
    torque = models.FloatField()
    description = models.CharField(max_length=300)
    image = models.ImageField()


class VehicleQuotation(models.Model):
  client = models.ForeignKey(Client, on_delete=models.CASCADE)
  vendor = models.ForeignKey(StaffMember, on_delete=models.CASCADE)
  city = models.ForeignKey(City, on_delete=models.CASCADE)
  office = models.ForeignKey(Office, on_delete=models.CASCADE)
  vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  closed_at = models.DateTimeField(blank=True, null=True)
  