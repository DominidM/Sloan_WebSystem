from django.shortcuts import render, get_object_or_404, redirect
from .serializers import ClienteSerializer, LoginSerializer
from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

def dashboard(request):
    return render(request, 'adminpanel/dashboard.html')

# PRODUCTOS
from .models import Producto
from .forms import ProductoForm
#CLIENTES
from .models import Cliente
from .forms import ClienteForm
#VENTA
from .models import Venta
from .forms import VentaForm

### ---------------------------------------------------------------------------------------------------------------
## --------------------------------------------------PRODUCTOS-----------------------------------------------------
### ---------------------------------------------------------------------------------------------------------------

# Listar productos
def listar_productos(request):
    productos = Producto.objects.all()
    return render(request, 'adminpanel/productos/listar.html', {'productos': productos})

# Crear producto
def crear_producto(request):
    if request.method == "POST":
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('productos')
    else:
        form = ProductoForm()
    return render(request, 'adminpanel/productos/formulario.html', {'form': form})

# Editar producto
def editar_producto(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    if request.method == "POST":
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('productos')
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'adminpanel/productos/formulario.html', {'form': form})

# Eliminar producto
def eliminar_producto(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    if request.method == "POST":
        producto.delete()
        return redirect('productos')
    return render(request, 'adminpanel/productos/eliminar.html', {'producto': producto})

### --------------------------------------------------------------------------------------------------------------
## --------------------------------------------------CLIENTES-----------------------------------------------------
### --------------------------------------------------------------------------------------------------------------

# Listar clientes
def listar_clientes(request):
    clientes = Cliente.objects.all()
    return render(request, 'adminpanel/clientes/listar.html', {'clientes': clientes})

# Crear cliente
def crear_cliente(request):
    if request.method == "POST":
        form = ClienteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('listar_clientes')
    else:
        form = ClienteForm()
    return render(request, 'adminpanel/clientes/formulario.html', {'form': form})

# Editar cliente
def editar_cliente(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)
    if request.method == "POST":
        form = ClienteForm(request.POST, instance=cliente)
        if form.is_valid():
            form.save()
            return redirect('listar_clientes')
    else:
        form = ClienteForm(instance=cliente)
    return render(request, 'adminpanel/clientes/formulario.html', {'form': form})

# Eliminar cliente
def eliminar_cliente(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)
    if request.method == "POST":
        cliente.delete()
        return redirect('listar_clientes')
    return render(request, 'adminpanel/clientes/eliminar.html', {'cliente': cliente})

### --------------------------------------------------------------------------------------------------------------
## --------------------------------------------------VENTA--------------------------------------------------------
### --------------------------------------------------------------------------------------------------------------

# Listar ventas
def listar_ventas(request):
    ventas = Venta.objects.all()
    return render(request, 'adminpanel/ventas/listar.html', {'ventas': ventas})

# Crear venta
def crear_venta(request):
    if request.method == "POST":
        form = VentaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('listar_ventas')
    else:
        form = VentaForm()
    return render(request, 'adminpanel/ventas/formulario.html', {'form': form})

# Editar venta
def editar_venta(request, venta_id):
    venta = get_object_or_404(Venta, id=venta_id)
    if request.method == "POST":
        form = VentaForm(request.POST, instance=venta)
        if form.is_valid():
            form.save()
            return redirect('listar_ventas')
    else:
        form = VentaForm(instance=venta)
    return render(request, 'adminpanel/ventas/formulario.html', {'form': form})

# Eliminar venta
def eliminar_venta(request, venta_id):
    venta = get_object_or_404(Venta, id=venta_id)
    if request.method == "POST":
        venta.delete()
        return redirect('listar_ventas')
    return render(request, 'adminpanel/ventas/eliminar.html', {'venta': venta})

### --------------------------------------------------------------------------------------------------------------
## ------------------------------------------extra-----------------------------------------------------------------
### --------------------------------------------------------------------------------------------------------------

class RegisterView(APIView):
    def post(self, request):
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Usuario creado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


