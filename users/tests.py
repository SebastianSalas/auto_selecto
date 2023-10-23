# Django
from django.test import TestCase

# Models
from .models import User, Client, StaffMember

# Django Rest Framework
from rest_framework.test import APIClient
from rest_framework import status

class UserTestCase(TestCase):
    def setUp(self):
        user = User(
            name='Test Name',
            last_name='Test LastName',
            cedula='000000'
        )
    
    def test_create_user(self):
        client = APIClient()
        response = client.post(
            '/api/client/create/', {
                'email': 'test_create_user@test.com',
                'name': 'Test Name',
                'last_name': 'Test LastName',
                'cedula': '000000',
                'password': 'password',
                'telephone': '333222111'
            },
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)