from users.models import Client, StaffMember
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.db import transaction
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 
                  'email', 
                  'name', 
                  'last_name', 
                  'cedula', 
                  'password']
        
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def create(self, validated_data):
      validated_data_copy = validated_data.copy()
      password = validated_data_copy.pop('password')
      
      user = User.objects.create_user(password=password, **validated_data_copy)
      return user


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
      model = Client
      fields = ['name', 
                'last_name', 
                'email', 
                'telephone', 
                'cedula']

    @transaction.atomic
    def create(self, validated_data):
        user_data = self.context['request'].data
        user_data.pop('telephone')

        with transaction.atomic():
            user = User.objects.create_user(**user_data)

            client = Client(user=user, **validated_data)
            client.save()
            return client
            
class StaffMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffMember
        fields = ['id', 'name', 'last_name', 'email', 'telephone', 'cedula', 'company_position','office']

    @transaction.atomic
    def create(self, validated_data):
        user_data = self.context['request'].data
        user_data.pop('telephone')
        user_data.pop('company_position')
        user_data.pop('office')

        with transaction.atomic():
            user = User.objects.create_user(**user_data)
            staff = StaffMember(user=user, **validated_data)
            staff.save()
            return staff

