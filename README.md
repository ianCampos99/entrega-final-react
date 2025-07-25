# 🛍️ Mi E-commerce Tienda Fluxx

Este es un proyecto de un E-commerce desarrollado con React, Firebase y Bootstrap, diseñado para mostrar una tienda en línea funcional con un carrito de compras, listado de productos y proceso de checkout.

## 👨‍💻 Autor

**Ian Pablo Campos**

## ✨ Funcionalidades Clave

Este e-commerce cuenta con las siguientes características principales:

* **Listado de Productos:**
    * Muestra una lista dinámica de productos obtenidos desde Firebase.
    * Permite navegar entre diferentes categorías de productos (electrónica, joyería, ropa de hombres, ropa de mujeres) a través de la barra de navegación.
    * Manejo de estados de carga y mensajes para listas vacías o errores en la obtención de datos.

* **Detalle del Producto:**
    * Al hacer clic en un producto, se muestra una vista detallada con información extendida (descripción, precio, stock).
    * Componente de contador para seleccionar la cantidad deseada de un producto.
    * Botón para agregar productos al carrito de compras.

* **Carrito de Compras:**
    * Funcionalidad para agregar, remover y vaciar productos del carrito.
    * Cálculo automático de la cantidad total de ítems y el precio total del carrito.
    * Icono de carrito (CartWidget) en la barra de navegación que muestra la cantidad de ítems en el carrito.

* **Proceso de Checkout:**
    * Formulario de contacto para que el comprador ingrese sus datos (Nombre, Teléfono, Email).
    * Validación básica de los campos del formulario.
    * Generación de una orden de compra única en Firebase Firestore.
    * Notificaciones al usuario sobre el éxito o el fracaso de la compra mediante SweetAlert2.
    * Redirección al inicio después de una compra exitosa.

* **Diseño Responsivo:**
    * Adaptado para una visualización correcta en diferentes tamaños de pantalla (escritorio, tabletas, móviles) utilizando Bootstrap.
    * Barra de navegación con "hamburguesa" para dispositivos móviles, permitiendo el acceso a las categorías.

## 🛠️ Tecnologías y Dependencias Utilizadas

Este proyecto utiliza las siguientes tecnologías y librerías:

| Tecnología/Dependencia | Descripción                                                               | Documentación                                                                               |
| :--------------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------- |
| **React** | Biblioteca de JavaScript para construir interfaces de usuario.            | [React Docs](https://react.dev/learn)                                                        |
| **Firebase** | Plataforma de Google para desarrollo de aplicaciones web y móviles (Firestore para base de datos, otros servicios como `serverTimestamp`). | [Firebase Docs](https://firebase.google.com/docs)                                            |
| **React Router DOM** | Colección de componentes de navegación para aplicaciones React.           | [React Router DOM Docs](https://reactrouter.com/en/main)                                     |
| **Bootstrap** | Framework de CSS para diseño responsivo y componentes de UI pre-construidos. | [Bootstrap Docs](https://getbootstrap.com/docs/)                                             |
| **SweetAlert2** | Librería para crear alertas personalizadas, responsivas y accesibles.     | [SweetAlert2 Docs](https://sweetalert2.github.io/)                                           |

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd [nombre-de-tu-carpeta-ecommerce]
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```
3.  **Configura Firebase:**
    * Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
    * Crea una aplicación web dentro de tu proyecto.
    * Obtén tus credenciales de configuración de Firebase (apiKey, authDomain, projectId, etc.).
    * Crea un archivo `.env` en la raíz de tu proyecto (si usas variables de entorno para las credenciales) o configura tus credenciales directamente en `src/db/config.js` o similar.
    * Inicializa Firestore y carga algunos productos de ejemplo si no lo has hecho ya.

4.  **Ejecuta la aplicación:**
    ```bash
    npm run dev
    # o si usas yarn
    # yarn dev
    ```
    Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador (normalmente en `http://localhost:5173/`).

---