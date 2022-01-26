# proyecto_corte3_PW
Conexión de APIS con una interfaz hecha en react
Para las conexiones a las bases de datos se utilizan los siguientes scripts:
-----Citas:
Para citas utilizamos el siguiente script en MySql:
        Para crear la base de datos:
            CREATE DATABASE veterinaria_ci;
        Para seleccionar la base de datos:
            USE veterinaria_ci;
        Para crear la tabla:
            CREATE TABLE cita (
              idCita int NOT NULL AUTO_INCREMENT,
              fecha varchar(45) NOT NULL,
              hora varchar(45) NOT NULL,
              tipoServicio varchar(45) DEFAULT NULL,
              PRIMARY KEY (idcita)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        Y para poder ejecutar springboot deberá cambiar en ApplicationsProperties el puerto de la base de datos en caso de tenerlo en otro, así como el usuario y la contraseña de ser necesario
        Importante:No cambiar el valor de server.port de ApplicationProperties (de lo contrario ya no servirá la aplicación en react)



Para dueños utilizamos el siguiente script en PostgreSQL:
        Para crear la base de datos:
            CREATE DATABASE veterinaria
                    WITH 
                    OWNER = postgres
                    ENCODING = 'UTF8'
                    LC_COLLATE = 'Spanish_Mexico.1252'
                    LC_CTYPE = 'Spanish_Mexico.1252'
                    TABLESPACE = pg_default
                    CONNECTION LIMIT = -1;
        Para seleccionar la base de datos en PostgreSQL:
            Para seleccionar la base de datos, en PGAdmin damos click derecho a la Base de datos que acabamos de crear y daremos click a "CREATE SCRIPT". Con esto ya tendremos seleccionada la base de datos. Le dejo este enlace por si no me entiende mucho: http://postgresql-dbms.blogspot.com/p/crear-una-base-de-datos-en-postgres-sql.html en el apartado 5 y 6
        Para crear la base de datos:
            CREATE TABLE IF NOT EXISTS public.duenio
                (
                    idduenio integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
                    nombre character varying(40) COLLATE pg_catalog."default" NOT NULL,
                    telefono character varying(10) COLLATE pg_catalog."default" NOT NULL,
                    direccion character varying(100) COLLATE pg_catalog."default" NOT NULL,
                    CONSTRAINT duenio_pkey PRIMARY KEY (idduenio)
                )
                WITH (
                    OIDS = FALSE
                )
                TABLESPACE pg_default;

                ALTER TABLE public.duenio
                    OWNER to postgres;
        Y para poder ejecutar springboot deberá cambiar en ApplicationsProperties el puerto de la base de datos en caso de tenerlo en otro, así como el usuario y la contraseña de ser necesario
        Importante:No cambiar el valor de server.port de ApplicationProperties (de lo contrario ya no servirá la aplicación en react)


Para Mascotas utilizamos la base de datos en SQLServer:
    Para crear la base de datos:
        CREATE DATABASE [Veterinaria]
    Para usar la base de datos:
        USE [Veterinaria]
        GO
    Para crear la tabla de datos:
            CREATE TABLE [dbo].[Mascota](
	            [idMascota] [int] IDENTITY(1,1) NOT NULL,
	            [nombre] [varchar](50) NOT NULL,
	            [tipo] [varchar](50) NOT NULL,
	            [idDuenio] [int] NULL,
	            [idCita] [int] NULL,
	            [idMedicamento] [int] NULL,
	            [fechaIngreso] [varchar](50) NOT NULL,
	            [razon] [varchar](50) NOT NULL,
            CONSTRAINT [PK_Mascota] PRIMARY KEY CLUSTERED 
            (
	            [idMascota] ASC
                )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
            ) ON [PRIMARY]
            GO
    Y para poder ejecutar springboot deberá cambiar en ApplicationsProperties el puerto de la base de datos en caso de tenerlo en otro, así como el usuario y la contraseña de ser necesario
        Importante:No cambiar el valor server.port de ApplicationProperties (de lo contrario ya no servirá la aplicación en react)


Para Medicamentos utilizamos la base de datos en SQLServer:
    Para crear la base de datos:
        CREATE DATABASE [Veterinaria_me]
    Para usar la base de datos:
        USE [Veterinaria_me]
        GO
    Para crear la tabla de datos:
        CREATE TABLE [dbo].[medicamento](
	        [idMedicamento] [int] IDENTITY(1,1) NOT NULL,
	        [codigo] [int] NULL,
	        [nombre] [varchar](50) NULL,
	        [fechaCaducidad] [varchar](50) NULL,
	        [sustanciaActiva] [varchar](50) NULL
        ) ON [PRIMARY]
        GO
    Y para poder ejecutar springboot deberá cambiar en ApplicationsProperties el puerto de la base de datos en caso de tenerlo en otro, así como el usuario y la contraseña de ser necesario
        Importante:No cambiar el valor de server.port de ApplicationProperties (de lo contrario ya no servirá la aplicación en react)

Para ejecutar react:
    0. Tener ejecutados los 4 proyectos de SpringBoot ejecutándose para las llamadas a las APIS
    0.1. Descomprimir "Practica4_Flores_203418_Gómez_203437" con la opcion  "extraer aquí"
    1. Necesitamos ubicarnos en la carpeta del proyecto: '.../proyecto_corte_PW/vista-veterinaria'
    2. Necesitaremos instalar todas las dependencias usadas con el comando "npm install"
    3. De ser necesario (a algunos les pasa) instalar el paquete de react scripts: "npm i react-scripts"
    4.Una vez instaladas las dependencias (y las 4 aplicaciones de Springboot corriendo) procederemos a ejecutar el comando "npm start"