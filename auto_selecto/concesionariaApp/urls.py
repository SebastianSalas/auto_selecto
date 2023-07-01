from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter
#router.register()
urlpatterns = [
    path('cities/', views.CityListCreateView.as_view(), name='city-list-create'),
    path('company_positions/', views.CompanyPositionListCreateView.as_view(), name='company-position-list-create'),
    path('offices/', views.OfficeListCreateView.as_view(), name='office-list-create'),
]