from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth  import authenticate, login, logout
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.forms import inlineformset_factory
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
# from .forms import CreateUserForm
from django.contrib import messages
from .models import *
from django.db.models import Q
# from .forms import *

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import login, authenticate
from .models import User
from .serializers import UserSerializer

# Create your views here.
class UserLogin(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is None:
            return Response({
                'message':  'invalid username or password',
            }, status=status.HTTP_403_FORBIDDEN)

        login(request=request, user=user)
        refresh = RefreshToken.for_user(user)

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)


class UserRegistration(APIView):
    def post(self, request):
        # first_name, username, email, password
        serialize_user_data = UserSerializer(data=request.data)

        if not serialize_user_data.is_valid():
            return Response({
                'errors': serialize_user_data.errors,
                'message': 'invalid user data'
            }, status=status.HTTP_406_NOT_ACCEPTABLE)

        serialize_user_data.save()

        user = User.objects.get(username=request.data.get('username'))

        refresh = RefreshToken.for_user(user)
        # refresh = RefreshToken.for_user(serialize_user_data)

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'message': 'account created'
        }, status=status.HTTP_201_CREATED)

class RefreshAccessToken(APIView):
    def post(self,request):
        refresh_token = request.data.get("refresh")
        try:
            # Create a RefreshToken instance from the provided refresh token
            refresh_token = RefreshToken(refresh_token)
            
            # Get a new access token from the refresh token
            access_token = str(refresh_token.access_token)

            return Response({
                'access': str(access_token),
                'message': 'token created'
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            # Handle any exceptions that might occur during token refresh
            print(f"Token refresh failed: {e}")
            return None
def index(request):
    return HttpResponse('Hello world')