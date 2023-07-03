from .models import Office, CompanyPosition, City, Vehicle, VehicleQuotation
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.db import transaction
from babel.dates import format_date

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
    
class VehicleQuotationSerializer(serializers.ModelSerializer):
  client_name = serializers.SerializerMethodField()
  client_last_name = serializers.SerializerMethodField()
  office_name = serializers.SerializerMethodField()
  city_name = serializers.SerializerMethodField()
  created_at = serializers.SerializerMethodField()



  class Meta:
    model = VehicleQuotation
    fields = ['id',
              'city',
              'client',
              'vendor',
              'office',
              'vehicle',
              'sold',
              'closed_at',
              'created_at',
              'client_name',
              'client_last_name',
              'office_name',
              'city_name']

  def get_client_name(self, obj):
    return obj.client.name if obj.client else None
  
  def get_client_last_name(self, obj):
    return obj.client.last_name if obj.client else None
  
  def get_office_name(self, obj):
    return obj.office.name if obj.office else None
  
  def get_city_name(self, obj):
    return obj.city.name if obj.city else None
  
  def get_created_at(self, obj):
        if obj.created_at:
            formatted_date = format_date(obj.created_at, format='dd MMMM yyyy', locale='es')
            return formatted_date
        else:
            return None
        
  @transaction.atomic
  def create(self, validated_data):
    vehicle_quotation = VehicleQuotation(**validated_data)
    vehicle_quotation.save()
    return vehicle_quotation
