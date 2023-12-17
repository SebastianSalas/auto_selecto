from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Quote 

class QuoteTestCase(TestCase):
    def setUp(self):
        pass

    def test_create_quote(self):
        client = APIClient()

        # Datos de prueba
        data = {
            'brand': 'Honda',
            'name': 'Civic',
            'year': '2021',
            'value': '40000',
        }

        response = client.post('/api/v1/quotes/', data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Verificar que las claves esperadas estén presentes en la respuesta JSON
        keys_to_check = ['brand', 'name', 'year', 'value']
        self.assertTrue(all(key in response.data for key in keys_to_check))

        quote_created = Quote.objects.filter(name='Civic').first()
        self.assertIsNotNone(quote_created)
      
        initial_count = Quote.objects.count()
        new_count = Quote.objects.count()
        self.assertEqual(new_count, initial_count + 1)

class QuoteTestCase(TestCase):
    def setUp(self):
        pass

    def test_create_quote_missing_fields(self):
        client = APIClient()

        # Datos de prueba sin los campos obligatorios
        data = {
            'name': 'Mustang',
            'year': '2020',
            'value': '215000',
        }

        response = client.post('/api/v1/quotes/', data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


        initial_count = Quote.objects.count()
        new_count = Quote.objects.count()
        self.assertEqual(new_count, initial_count)