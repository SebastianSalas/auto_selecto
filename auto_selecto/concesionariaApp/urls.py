from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter

urlpatterns = [
    path('cities/', views.CityListCreateView.as_view(), name='city-list-create'),
    path('company_positions/', views.CompanyPositionListCreateView.as_view(), name='company-position-list-create'),
    path('offices/', views.OfficeListCreateView.as_view(), name='office-list-create'),
    path('vehicles/', views.VehicleListCreateView.as_view(), name='vehicle-list-create'),
    path('vehicle/create', views.VehicleCreateView.as_view(), name='vehicle-create'),
    path('vehicle/<int:pk>/show', views.VehicleDetailView.as_view(), name='vehicle-show'),
    path('search_vehicle/', views.VehicleSearchView.as_view(), name='vehicle-search'),
    path('vehicle_quotations/', views.VehicleQuotationListCreateView.as_view(), name='vehicle-quotations'),
    path('vehicle_quotation/create', views.VehicleQuotationListCreateView.as_view(), name='vehicle-quotation-create'),
    path('vehicle_quotation/<int:pk>/edit/', views.VehicleQuotationRetrieveUpdateDestroyView.as_view(), name='vehicle_quotation_update'),
    path('vehicle_quotations/vendor/<int:staffmember_id>/', views.VehicleQuotationByVendorView.as_view(), name='vehicle-quotation-by-vendor'),
]