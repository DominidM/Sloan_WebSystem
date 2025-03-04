from django.urls import path
from .views import listar_productos, crear_producto, editar_producto, eliminar_producto
from .views import listar_clientes, crear_cliente, editar_cliente, eliminar_cliente 
from .views import listar_ventas, crear_venta, editar_venta, eliminar_venta
from .views import RegisterView, LoginView



urlpatterns = [
    path('productos/', listar_productos, name='productos'),
    path('productos/crear/', crear_producto, name='crear_producto'),
    path('productos/editar/<int:producto_id>/', editar_producto, name='editar_producto'),
    path('productos/eliminar/<int:producto_id>/', eliminar_producto, name='eliminar_producto'),

    path('clientes/', listar_clientes, name='clientes'),
    path('clientes/crear/', crear_cliente, name='crear_cliente'),
    path('clientes/editar/<int:cliente_id>/', editar_cliente, name='editar_cliente'),
    path('clientes/eliminar/<int:cliente_id>/', eliminar_cliente, name='eliminar_cliente'),

    path('ventas/', listar_ventas, name='ventas'),
    path('ventas/crear/', crear_venta, name='crear_venta'),
    path('ventas/editar/<int:venta_id>/', editar_venta, name='editar_venta'),
    path('ventas/eliminar/<int:venta_id>/', eliminar_venta, name='eliminar_venta'),

    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),

]
