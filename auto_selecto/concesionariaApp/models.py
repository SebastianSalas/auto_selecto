from django.db import models
from django.utils import timezone
from django.db import transaction

class Office(models.Model):
  name = models.CharField(max_length=60)
  address = models.CharField(max_length=60)
  telephone = models.CharField(max_length=10)
  nit = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"id: {self.id}, name: {self.name}, address: {self.address}, telephone: {self.telephone}, nit: {self.nit}, created_at: {self.created_at}"
  
  @classmethod
  @transaction.atomic
  def create_office(cls, name, address, telephone, nit):
    office = cls(name=name, address=address, telephone=telephone, nit=nit)
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
