from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


# Modelo Cliente (Usuario)
class Cliente(AbstractUser):  # Se extiende de AbstractUser para login
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Evitar conflictos con auth.User
    groups = models.ManyToManyField(Group, related_name="cliente_groups")
    user_permissions = models.ManyToManyField(Permission, related_name="cliente_permissions")
    
    def __str__(self):
        return self.username

# Modelo Producto
class Producto(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    image_url = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Modelo Carrito
class Carrito(models.Model):
    STATUS_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('aprobado', 'Aprobado'),
        ('rechazado', 'Rechazado'),
    ]
    client = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendiente')

    def __str__(self):
        return f"Carrito de {self.client.username} - {self.status}"

# Modelo Detalle del Carrito
class CarritoItem(models.Model):
    cart = models.ForeignKey(Carrito, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Producto, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"

# Modelo Venta
class Venta(models.Model):
    STATUS_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('completado', 'Completado'),
        ('rechazado', 'Rechazado'),
    ]
    client = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendiente')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Venta {self.id} - {self.client.username}"

# Modelo Detalle de Ventas
class VentaItem(models.Model):
    sale = models.ForeignKey(Venta, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Producto, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"
