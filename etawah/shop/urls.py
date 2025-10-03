from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('pricing/', views.pricing, name='pricing'),
    path('contact/', views.contact, name='contact'),
    path('status/', views.status, name='status'),
    path('shops/', views.shop_list, name='shop_list'),
    path('about/', views.about_view, name='about'),
]