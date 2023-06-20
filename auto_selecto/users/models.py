from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

from concesionariaApp.models import Office

class UserAccountManager(BaseUserManager):
    def create_user(self, email,name,last_name, cedula,password=None):
      if not email:
        raise ValueError('Debe tener un email')
      
      email = self.normalize_email(email)
      user = self.model(email=email, name=name, last_name=last_name, cedula=cedula)

      user.set_password(password)
      user.save()

      return user
    


class User(AbstractBaseUser,PermissionsMixin):
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60)
  email = models.EmailField(unique=True, blank=False)
  cedula = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)

  objects = UserAccountManager()

  USERNAME_FIELD = "email"
  REQUIRED_FIELDS = ['cedula', 'name', 'last_name']


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