from django.contrib import admin # pyright: ignore[reportMissingModuleSource]
from .models import Feature, PricingPlan

admin.site.register(Feature)
admin.site.register(PricingPlan)

