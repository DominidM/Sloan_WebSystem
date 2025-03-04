# Documentación del Proyecto Sloan_WebSystem

## 1. Descripción General
Sloan_WebSystem es una página web para la venta de productos de gasfitería. El sistema cuenta con un frontend desarrollado en **React con TypeScript** y un backend en **Django con PostgreSQL**. Su objetivo es gestionar productos, usuarios y permitir la visualización de los productos como una tienda online.

## 2. Tecnologías Utilizadas
### **Frontend (React + TypeScript)**
- **React con TypeScript**: Para construir la interfaz de usuario.
- **Axios**: Para realizar peticiones HTTP al backend.
- **CSS puro** (sin Tailwind ni frameworks adicionales).
- **Node.js y npm**: Para gestionar dependencias y ejecutar la aplicación.

### **Backend (Django + PostgreSQL)**
- **Django 5.1.6**: Framework para gestionar la lógica del servidor.
- **PostgreSQL 17.2**: Base de datos utilizada para almacenar usuarios y productos.
- **Django REST Framework (DRF)**: Para la creación de API REST.
- **psycopg2 2.9.10**: Conector de Django con PostgreSQL.
- **CORS Headers**: Para permitir la comunicación entre frontend y backend.

## 3. Funcionalidades Implementadas
1. **Autenticación de Usuarios**
   - Login y registro desde el frontend.
   - Validación de credenciales en la base de datos.
   - Creación de nuevos usuarios si no existen.

2. **Gestor de Productos**
   - Agregar, visualizar y listar productos desde la base de datos.
   - Mostrarlos en el frontend en formato de tienda online.

3. **Conexión Backend - Frontend**
   - Uso de API para enviar y recibir datos entre React y Django.
   - Implementación de peticiones `GET` y `POST` con Axios.

## 4. Funcionalidades Pendientes
- **Implementación de Carrito de Compras**
- **Gestor de Pedidos y Pagos**
- **Mejoras en el Diseño UI/UX**
- **Despliegue en la Web**
  - Subir el backend a un hosting como Render o Railway.
  - Subir el frontend a un hosting como Vercel o Netlify.
  - Configurar PostgreSQL en la nube.

## 5. Configuración para Despliegue
1. **Subir el Backend**
   - Elegir un hosting como Render o Railway.
   - Configurar variables de entorno para la base de datos.
   - Habilitar CORS para permitir conexiones desde el frontend.

2. **Subir el Frontend**
   - Construir la aplicación con `npm run build`.
   - Subir a Vercel o Netlify.
   - Configurar la URL del backend en el `fetch` del frontend.

---

## 6. Conclusión
Sloan_WebSystem está en proceso de desarrollo, con una base sólida en React y Django. Se ha implementado la autenticación y la gestión de productos, pero aún se requiere mejorar el diseño, agregar funciones de compra y desplegar la página en internet.

