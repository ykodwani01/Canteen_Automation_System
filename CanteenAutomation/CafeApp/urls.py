from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from . import views
urlpatterns = [
    path('admin', admin.site.urls),
    path('',views.index,name='index'),
    path('login/', views.UserLogin.as_view(), name='login'),
    path('register', views.UserRegistration.as_view(), name='register'),
    path('refresh', views.RefreshAccessToken.as_view(), name='refresh_access_token'),
    path('get-items', views.GetItems.as_view(), name='get_items'),
    path('get-orders', views.getOrders.as_view(), name='get_orders'),
    path('get-account-details', views.getaccountdetails.as_view(), name='get-account-details'),

    

    # #password forgot urls
    # path('reset_password/',auth_views.PasswordResetView.as_view(),name="reset_password"),
    # path('reset_password_sent/',auth_views.PasswordResetDoneView.as_view(),name="password_reset_done"),
    # path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name="password_reset_confirm"),
    # path('reset_complete/',auth_views.PasswordResetCompleteView.as_view(),name="password_reset_complete"),
  
    # #change password
    # path('change_password/',auth_views.PasswordChangeView.as_view(success_url='/home'),name="changepass"),
    # path('change_password_done/',auth_views.PasswordChangeDoneView.as_view(),name="changepassdone"),

]