# Sloan_WebSystem
 

Herramienta	 Versión  instalada	 Compatible	 Comentario
Node.js	     v22.14.0	   ✅         Sí      	Versión reciente, estable para desarrollo.
npm	         v11.1.0	    ✅         Sí	     Compatible con Node.js 22.
Git	         v2.48.1	    ✅         Sí	     Última versión estable, sin problemas.
Python	       3.10.0	    ✅         Sí	     Compatible con Django 5.1.6.
PostgreSQL    	17.3	     ✅         Sí	      Compatible con psycopg2 y Django.
yarn        	1.22.22	    ✅         Sí	     Versión estable de Yarn 1 (aunque Yarn 3 es la más reciente).

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Sloan',       # El nombre de la base de datos
        'USER': 'postgres',          # El usuario que creaste en PostgreSQL
        'PASSWORD': 'dominid',    # La contraseña que asignaste
        'HOST': 'localhost',      # Si está en el mismo equipo
        'PORT': '5432',           # El puerto por defecto de PostgreSQL
    }
}
