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


    def test_get_user_not_exists(self):
        client = APIClient()
        response = client.get(
            '/api/client/1/' # The user doesn't exist
        )

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


    # def test_get_user(self):
    #     client = APIClient()
    #     create_client = client.post(
    #         '/api/client/create/', {
    #             'email': 'test_create_user@test.com',
    #             'name': 'Test Name',
    #             'last_name': 'Test LastName',
    #             'cedula': '000000',
    #             'password': 'password',
    #             'telephone': '333222111'
    #         },
    #         format='json'
    #     )

    #     if (create_client.status_code == status.HTTP_201_CREATED):
    #         response = client.get(
    #             '/api/client/1/' # The user doesn't exist
    #         ) 
    #     else:
    #         response = status.HTTP_404_NOT_FOUND

    #     self.assertEqual(response.status_code, status.HTTP_200_OK)