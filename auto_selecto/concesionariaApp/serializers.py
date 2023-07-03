from .models import Office, CompanyPosition, City, Vehicle, VehicleQuotation
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

class VehicleSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField(read_only=True)

  class Meta:
    model = Vehicle
    fields = [
        "id",
        "name",
        "brand",
        "type",
        "year",
        "value",
        "hp",
        "torque",
        "description",
        "image",
    ]

  def create(self, validated_data):
    vehicle = Vehicle(**validated_data)
    vehicle.save()
    return vehicle

  def update(self, instance, validated_data):
    instance.name = validated_data.get('name', instance.name)
    instance.brand = validated_data.get('brand', instance.brand)
    instance.type = validated_data.get('type', instance.type)
    instance.year = validated_data.get('year', instance.year)
    instance.value = validated_data.get('value', instance.value)
    instance.hp = validated_data.get('hp', instance.hp)
    instance.torque = validated_data.get('torque', instance.torque)
    instance.description = validated_data.get('description', instance.description)
    instance.image = validated_data.get('image', instance.image)
    instance.save()
    return instance
    
class VehicleQuotationSerializer(serializers.ModelSerializer):
  class Meta:
    model = VehicleQuotation
    fields = '__all__'

  def create(self, validated_data):
    vehicle_quotation = VehicleQuotation(**validated_data)
    vehicle_quotation.save()
    return vehicle_quotation

  def update(self, instance, validated_data):
    instance.closed_at = validated_data.get('closed_at', instance.type)
    return instance
