from .models import Office, CompanyPosition, City
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.db import transaction


class OfficeSerializer(ModelSerializer):
  id = serializers.IntegerField(read_only=True)

  class Meta:
      model = Office
      fields =[
          "id",
          "name",
          "address",
          "telephone",
          "nit",
          "city"
      ]

  @transaction.atomic
  def create(self, validated_data):
        office = Office(**validated_data)

        office.save()
        return office

  @transaction.atomic
  def update(self, instance, validated_data):
      instance.name = validated_data.get('name', instance.farm_name)
      instance.address = validated_data.get('address', instance.address)
      instance.telephone = validated_data.get('telephone', instance.telephone)
      instance.nit = validated_data.get('nit', instance.nit)
      instance.city = validated_data.get('city', instance.city)

      instance.save()
      return instance
  
class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'name', 'created_at']

class CompanyPositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyPosition
        fields = ['id', 'name', 'created_at']

