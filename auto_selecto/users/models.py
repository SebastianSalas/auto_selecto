from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

from concesionariaApp.models import Office, CompanyPosition, City

class UserManager(BaseUserManager):
    def create_user(self, email, name, last_name, cedula, password, city=None):
        if not email:
            raise ValueError('Debe tener un email')
        if not password:
            raise ValueError('Debe tener una contraseña')
        email = self.normalize_email(email)
        
        user = self.model(email=email, name=name, last_name=last_name, cedula=cedula)
        user.set_password(password)
        
        if city:
            try:
                city = City.objects.get(id=city)
                user.city = city
            except City.DoesNotExist:
                raise ValueError('La ciudad especificada no existe')
        
        user.save()
        return user

    def create_superuser(self, email, name, last_name, cedula, password):
        user = self.create_user(email, name, last_name, cedula, password)
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email = models.EmailField(unique=True, blank=False)
    cedula = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['name', 'last_name', 'cedula']

    def __str__(self):
        return f"id: {self.id}, name: {self.name}, last_name: {self.last_name}, email: {self.email}, cedula: {self.cedula}, created_at: {self.created_at}"
    
    def find(id):
        try:
            user = User.objects.get(id=id)
            return user
        except User.DoesNotExist:
            return None
    
    def get_staff_member_id(self):
       return self.staffmember.id
    
    def has_related_object(self):
        has_staff_member = False
        try:
            has_staff_member = (self.staffmember is not None)
        except StaffMember.DoesNotExist:
            pass
        return has_staff_member

class Client(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60)
  email = models.CharField(max_length=100)
  telephone = models.CharField(max_length=10)
  cedula = models.CharField(max_length=100)
  city = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True) #campo innecesario
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"id: {self.id}, user_id: {self.user_id}, name: {self.name}, last_name: {self.last_name}, email: {self.email}, telephone: {self.telephone}, cedula: {self.cedula}, created_at: {self.created_at}"
  
class StaffMember(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  office = models.ForeignKey(Office, on_delete=models.CASCADE)
  name = models.CharField(max_length=60)
  last_name = models.CharField(max_length=60)
  email = models.CharField(max_length=100)
  telephone = models.CharField(max_length=10)
  cedula = models.CharField(max_length=100)
  active = models.BooleanField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)
  city = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
  company_position = models.ForeignKey(CompanyPosition, on_delete=models.CASCADE)


  def __str__(self):
    return f"id: {self.id}, user_id: {self.user_id}, office_id: {self.office_id}, name: {self.name}, last_name: {self.last_name}, email: {self.email}, telephone: {self.telephone}, cedula: {self.cedula}, company_position_id: {self.company_position_id}, created_at: {self.created_at}, active: {self.active}, city_id: {self.city_id}"