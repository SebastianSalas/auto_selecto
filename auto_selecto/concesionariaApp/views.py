from django.shortcuts import render
from rest_framework import generics
from .models import City, CompanyPosition, Office
from .serializers import CitySerializer, CompanyPositionSerializer, OfficeSerializer

class CityListCreateView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class CompanyPositionListCreateView(generics.ListCreateAPIView):
    queryset = CompanyPosition.objects.all()
    serializer_class = CompanyPositionSerializer

class OfficeListCreateView(generics.ListCreateAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer

