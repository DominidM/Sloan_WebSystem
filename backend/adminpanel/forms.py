from django.contrib.auth.forms import UserCreationForm
from django import forms
from .models import Producto
from .models import Venta
from .models import Cliente

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['name', 'description', 'price', 'stock', 'image_url']


class ClienteForm(UserCreationForm):
    class Meta:
        model = Cliente
        fields = ['username', 'email', 'password']

class VentaForm(forms.ModelForm):
    class Meta:
        model = Venta
        fields = ['client', 'total_price', 'status']
