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

def index(request):
    return HttpResponse('Hello world')