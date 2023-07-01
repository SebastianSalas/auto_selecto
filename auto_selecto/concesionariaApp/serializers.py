from models import Office, CompanyPosition
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.db import transaction


class OfficeSerializer(ModelSerializer):
  id = serializers.IntegerField(read_only=True)

  class Meta:
      models = Office
      fields =[
          "id",
          "name",
          "address",
          "telephone",
          "nit"
      ]

  @transaction.atomic
  def create(self, validated_data):
        office = Office(**validated_data)

        office.save()
        return office

  @transaction.atomic
  def update(self, instance, validated_data):
      instance.name = validated_data.get('name', instance.farm_name)
      instance.address = validated_data.get('address', instance.longitude)
      instance.telephone = validated_data.get('telephone', instance.latitude)
      instance.nit = validated_data.get('nit', instance.latitude)

      instance.save()
      return instance
  
