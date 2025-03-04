from django.contrib import admin
from django.urls import path, include
from adminpanel.views import dashboard

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', dashboard, name='dashboard'),
   path('adminpanel/', include('adminpanel.urls')),
]
