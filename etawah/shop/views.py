from django.shortcuts import render

def home(request):
    return render(request, 'shop/index.html')

def about(request):
    return render(request, 'shop/about.html')

def pricing(request):
    return render(request, 'shop/pricing.html')

def contact(request):
    return render(request, 'shop/contact.html')
