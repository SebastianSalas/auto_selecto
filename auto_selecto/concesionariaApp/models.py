from django.db import models
from django.utils import timezone

class workshopBoos(models.Model):
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60, blank= True)
  telephone = models.CharField(max_length=10, blank= True)
  email = models.EmailField(max_length=100, blank= True)
  doc_identifition = models.CharField(max_length=10)
  officeID = models.ForeignKey() #Confirmar relación con llave principal de Oficina


class officeManager(models.Model):
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60, blank= True)
  telephone = models.CharField(max_length=10, blank= True)
  email = models.EmailField(max_length=100, blank= True)
  doc_identifition = models.CharField(max_length=10)
  officeID = models.ForeignKey() #Confirmar relación con llave principal de Oficina


class sparePart(models.Model):
  name = models.CharField(max_length=60)
  description = models.CharField(max_length=500, blank= True)
  officeID = models.ForeignKey() #Confirmar relación con llave principal de Oficina


class seller(models.Model):
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60, blank= True)
  telephone = models.CharField(max_length=10, blank= True)
  email = models.EmailField(max_length=100, blank= True)
  doc_identifition = models.CharField(max_length=10)
  officeID = models.ForeignKey() #Confirmar relación con llave principal de Oficina


class Office(models.Model):
  name = models.CharField(max_length=60)
  address = models.CharField(max_length=60)
  telephone = models.CharField(max_length=10)
  nit = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"id: {self.id}, name: {self.name}, address: {self.address}, telephone: {self.telephone}, nit: {self.nit}, created_at: {self.created_at}"

class officeAddress(models.Model):
  street = models.CharField(max_length=100)
  city = models.CharField(max_length=60)
  country = models.CharField(max_length=10)
  officeID = models.ForeignKey() #Confirmar relación con llave principal de Oficina


class sale(models.Model):
  date = models.DateField()
  seller_id = models.ForeignKey()
  vehicle_id = models.ForeignKey()
  client_id = models.ForeignKey()
  

class vehicle(models.Model):
  model = models.CharField(max_length=60)
  brand = models.CharField(max_length=60)
  reference = models.CharField(max_length=10)
  officeID = models.ForeignKey() #Confirmar relación con llave principal de Oficina
  

class client(models.Model):
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60, blank= True)
  telephone = models.CharField(max_length=10, blank= True)
  email = models.EmailField(max_length=100, blank= True)
  doc_identifition = models.CharField(max_length=10)
  