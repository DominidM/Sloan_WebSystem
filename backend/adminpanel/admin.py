from django.contrib import admin
from .models import Cliente, Producto, Carrito, CarritoItem, Venta, VentaItem

admin.site.register(Cliente)
admin.site.register(Producto)
admin.site.register(Carrito)
admin.site.register(CarritoItem)
admin.site.register(Venta)
admin.site.register(VentaItem)
