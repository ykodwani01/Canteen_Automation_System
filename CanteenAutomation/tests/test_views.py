from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from CafeApp.models import *
from CafeApp.serializers import *

# comment


class UserLoginTestCase(TestCase):
    def setUp(self):
        # Create test users
        self.test_user_customer = User.objects.create_user(
            username="testcustomer", password="testpassword")
        self.test_user_canteen = User.objects.create_user(
            username="testcanteen", password="testpassword")

        # Create test profiles
        self.test_profile_customer = Profile.objects.create(
            user=self.test_user_customer, name='Test Customer', type='Customer')
        self.test_profile_canteen = Profile.objects.create(
            user=self.test_user_canteen, name='Test Canteen', type='Canteen')

        # Create test customer and canteen
        self.test_customer = customer.objects.create(
            cust=self.test_profile_customer)
        self.test_canteen = canteen.objects.create(
            owner=self.test_profile_canteen)

        # Create a client for making requests
        self.client = Client()

    def test_customer_login(self):
        url = reverse('login')
        data = {
            'username': 'testcustomer',
            'password': 'testpassword'
        }
        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)

    def test_canteen_login(self):
        url = reverse('login')
        data = {
            'username': 'testcanteen',
            'password': 'testpassword'
        }
        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)

    def test_customer_login_invalid_credentials(self):
        url = reverse('login')
        data = {
            'username': 'testcustomer',
            'password': 'invalidpassword'
        }
        response = self.client.post(url, data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
# comment


# comment
class UserRegistrationTestCase(TestCase):
    def setUp(self):
        # Create a client for making requests
        self.client = Client()

    def test_user_registration(self):
        url = reverse('register')
        data = {
            'username': 'testuser',
            'password': 'testpassword',
            'type': 'Customer',
            'name': 'Test Customer',
            'contact_number': '123456789'
        }
        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)
# comment


# comment
class DeleteItemTestCase(TestCase):
    def setUp(self):
        # Create test user
        self.test_user_canteen = User.objects.create_user(
            username="testcanteen", password="testpassword")

        # Create test profile
        self.test_profile_canteen = Profile.objects.create(
            user=self.test_user_canteen, name='Test Canteen', type='Canteen')

        # Create test canteen
        self.test_canteen = canteen.objects.create(
            owner=self.test_profile_canteen)

        # Create a test item
        self.test_item = items.objects.create(
            canteen=self.test_canteen, name='Test Item', desc='Item description', price=10.0)

        # Create a client for making requests
        self.client = Client()

        # Get access token for authentication
        refresh_canteen = RefreshToken.for_user(self.test_user_canteen)
        self.access_token_canteen = str(refresh_canteen.access_token)

    def test_delete_item_with_canteen_auth(self):
        url = reverse('delete-items')
        data = {'item_id': 1}

        # Include the authentication token in the request header
        headers = {'HTTP_AUTHORIZATION': f'Bearer {self.access_token_canteen}'}
        response = self.client.post(
            url, data, content_type='application/json', **headers)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_item_without_canteen_auth(self):
        url = reverse('delete-items')
        data = {'item_id': 1}

        # Do not include the authentication token in the request header
        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
# comment


# comment
class AddGetItemTestCase(TestCase):
    def setUp(self):
        # Create test user
        self.test_user_canteen = User.objects.create_user(
            username="testcanteen", password="testpassword")

        # Create test profile
        self.test_profile_canteen = Profile.objects.create(
            user=self.test_user_canteen, name='Test Canteen', type='Canteen')

        # Create test canteen
        self.test_canteen = canteen.objects.create(
            owner=self.test_profile_canteen)

        # Create a client for making requests
        self.client = Client()

        # Get access token for authentication
        refresh_canteen = RefreshToken.for_user(self.test_user_canteen)
        self.access_token_canteen = str(refresh_canteen.access_token)

    def test_add_items_get_items_with_auth(self):
        # Test GetItems view with authentication
        # Post method to add an item
        url = reverse('get_items')
        data = {
            'name': 'Test Item',
            'desc': 'Description of the test item',
            'price': 10,
        }

        # # Include the authentication token in the request header
        headers = {'HTTP_AUTHORIZATION': f'Bearer {self.access_token_canteen}'}
        response = self.client.post(url, data, format='json', **headers)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Test the Get method to retrieve items
        response = self.client.get(url, **headers)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Validate the response structure using the serializer
        expected_item = {
            'id': 1,  # Adjust based on the actual ID
            'canteen': self.test_canteen.canteen_id,
            'name': 'Test Item',
            'desc': 'Description of the test item',
            'price': 10,
            'available': True
        }

        self.assertEqual(response.data, [expected_item])
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Delete the added item so that items don't stack up
        url = reverse('delete-items')
        data = {'item_id': 1}

        response = self.client.post(
            url, data, content_type='application/json', **headers)

    def test_add_items_get_items_without_auth(self):
        # Test GetItems view without authentication
        # Post method to add an item
        url = reverse('get_items')
        data = {
            'name': 'Test Item',
            'desc': 'Description of the test item',
            'price': 10,
        }

        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        # Test the Get method to retrieve items
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        # Validate the response structure using the serializer
        expected_item = {
            'id': 1,
            'canteen': self.test_canteen.canteen_id,
            'name': 'Test Item',
            'desc': 'Description of the test item',
            'price': 10,
            'available': True
        }

        self.assertNotEqual(response.data, [expected_item])
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
# comment


# comment
class GetAccountDetailsTestCase(TestCase):
    def setUp(self):
        # Create a test user
        self.test_user_customer = User.objects.create_user(
            username='testusercustomer', password='testpassword')

        # Create a test profile for a customer
        self.customer_profile = Profile.objects.create(
            user=self.test_user_customer, name='Test Customer', type='Customer', contact_number='123456789')

        # Create a test customer
        self.test_customer = customer.objects.create(
            cust=self.customer_profile)

        # Create a client for making requests
        self.client = Client()

        # Get an access token for authentication
        refresh_customer = RefreshToken.for_user(self.test_user_customer)
        self.access_token_customer = str(refresh_customer.access_token)

    def test_get_account_details_customer(self):
        # Test GetAccountDetails view for a customer with authentication
        # Adjust the URL name based on your project's URL configuration
        url = reverse('get-account-details')

        # Include the authentication token in the request header
        headers = {'HTTP_AUTHORIZATION': f'Bearer {self.access_token_customer}'}
        response = self.client.get(url, **headers)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Validate the response structure using the serializer
        expected_data = {
            'user': 1,
            'id': 1,
            'name': 'Test Customer',
            'contact_number': '123456789',
            'type': 'Customer',
            'total_orders': 0,
        }

        self.assertEqual(response.data, expected_data)

    def test_get_account_details_customer_without_auth(self):
        # Test GetAccountDetails view for a customer with authentication
        url = reverse('get-account-details')

        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        # Validate the response structure using the serializer
        expected_data = {
            'user': 1,
            'id': 1,
            'name': 'Test Customer',
            'contact_number': '123456789',
            'type': 'Customer',
            'total_orders': 0,
        }

        self.assertNotEqual(response.data, expected_data)
# comment


# comment
class GetAllCanteensTestCase(TestCase):
    def setUp(self):
        # Create a test user
        self.test_user = User.objects.create_user(
            username='testuser', password='testpassword')

        # Create canteens
        # Create test user
        self.test_user_canteen1 = User.objects.create_user(
            username="testcanteen1", password="testpassword")
        self.test_user_canteen2 = User.objects.create_user(
            username="testcanteen2", password="testpassword")

        # Create test profile
        self.test_profile_canteen1 = Profile.objects.create(
            user=self.test_user_canteen1, name='Test Canteen 1', type='Canteen')
        self.test_profile_canteen2 = Profile.objects.create(
            user=self.test_user_canteen2, name='Test Canteen 2', type='Canteen')

        # Create test canteen
        self.test_canteen = canteen.objects.create(
            owner=self.test_profile_canteen1, is_verified=True)
        self.test_canteen = canteen.objects.create(
            owner=self.test_profile_canteen2, is_verified=True)

        # Create a client for making requests
        self.client = Client()

        # Get an access token for authentication
        refresh = RefreshToken.for_user(self.test_user)
        self.access_token = str(refresh.access_token)

    def test_get_all_canteens(self):
        # Test GetAllCanteens view with authentication
        url = reverse('get-all-canteens')

        # Include the authentication token in the request header
        headers = {'HTTP_AUTHORIZATION': f'Bearer {self.access_token}'}
        response = self.client.get(url, **headers)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        expected_data = [
            {
                'canteen_name': 'Test Canteen 1',
                'canteen_id': 1
            },
            {
                'canteen_name': 'Test Canteen 2',
                'canteen_id': 2
            }
        ]

        self.assertEqual(response.data, expected_data)
# comment


class GetCustOrdersTestCase(TestCase):
    def setUp(self):
        # Create test users
        self.test_user_customer = User.objects.create_user(
            username="testcustomer", password="testpassword", email='testcustomer@gmail.com')
        self.test_user_canteen = User.objects.create_user(
            username="testcanteen", password="testpassword")

        # Create test profiles
        self.test_profile_customer = Profile.objects.create(
            user=self.test_user_customer, name='Test Customer', type='Customer', contact_number='123456789')
        self.test_profile_canteen = Profile.objects.create(
            user=self.test_user_canteen, name='Test Canteen', type='Canteen')

        # Create test customer and canteen
        self.test_customer = customer.objects.create(
            cust=self.test_profile_customer)
        self.test_canteen = canteen.objects.create(
            owner=self.test_profile_canteen)

        # Create a test item
        self.test_item = items.objects.create(
            canteen=self.test_canteen, name='Test Item', desc='Item description', price=10)

        # Create a test order
        self.test_order = orders.objects.create(
            order_cust=self.test_customer, order_canteen=self.test_canteen, status='Delivered', total_amount=10)
        self.test_order.items.add(self.test_item)
        self.order_date = str(datetime.now())
        self.order_date = self.order_date[0:10] + \
            ' -- ' + self.order_date[11:16] + ' GMT'

        self.test_order_qty = orderquantity.objects.create(
            order_id=self.test_order, item_id=self.test_item)

        # Create a client for making requests
        self.client = Client()

        # Get an access token for authentication
        refresh_customer = RefreshToken.for_user(self.test_user_customer)
        self.access_token_customer = str(refresh_customer.access_token)

    def test_get_cust_orders(self):
        # Test GetCustOrders view with authentication
        url = reverse('get-cust-orders')

        # Include the authentication token in the request header
        headers = {'HTTP_AUTHORIZATION': f'Bearer {self.access_token_customer}'}
        response = self.client.get(url, **headers)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        expected_data = [
            {
                "id": 1,
                "order_cust_name": "Test Customer",
                "order_cust_contact": "123456789",
                "order_cust_email": "testcustomer@gmail.com",
                "order_canteen_name": "Test Canteen",
                "total_amount": 10,
                "items": [
                    {
                        "id": 1,
                        "name": "Test Item",
                        "desc": "Item description",
                        "price": 10,
                        "available": True,
                        "canteen": 1,
                        "quantity": 1
                    }
                ],
                "status": "Delivered",
                "date": self.order_date,
                "total_quantity": 1
            }
        ]

        self.assertEqual(response.data, expected_data)
