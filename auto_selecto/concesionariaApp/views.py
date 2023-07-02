from django.shortcuts import render
from rest_framework import generics
from .models import City, CompanyPosition, Office, Vehicle
from .serializers import CitySerializer, CompanyPositionSerializer, OfficeSerializer, VehicleSerializer

class CityListCreateView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class CompanyPositionListCreateView(generics.ListCreateAPIView):
    queryset = CompanyPosition.objects.all()
    serializer_class = CompanyPositionSerializer

class OfficeListCreateView(generics.ListCreateAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer

class VehicleCreateView(generics.CreateAPIView):
  serializer_class = VehicleSerializer

class VehicleListCreateView(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer