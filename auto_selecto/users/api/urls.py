from django.urls import path
from . import views

from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/create/', views.UserCreateView.as_view(), name='create_user'),
    path('client/create/', views.ClientCreateView.as_view(), name='create_client'),
    path('staff_members/', views.StaffMemberListView.as_view(), name='staff_member_list'),
    path('staff_member/create/', views.StaffMemberCreateView.as_view(), name='create_staff_member'),
]
