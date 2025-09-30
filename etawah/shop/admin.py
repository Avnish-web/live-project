from django.contrib import admin 
from .models import Feature, PricingPlan

admin.site.register(Feature)
admin.site.register(PricingPlan)
admin.site.site_header = "Etawah Shops Admin"
admin.site.site_title = "Etawah Shops Admin Portal"
admin.site_index_title = "Welcome to Etawah Shops Admin"

