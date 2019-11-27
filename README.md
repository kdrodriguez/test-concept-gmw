# Prueba de concepto del GraphQL Mendeley Wrapper (API)

## Introducción

La prueba de concepto del [Wrapper GraphQL de Mendeley][] (API), es un proyecto académico - investigativo el cual tiene como objetivo comprobar la funcionalidad del wrapper por medio del consumo del mismo. Lea más acerca del [Wrapper GraphQL de Mendeley][] o acceda a su [repositorio GitHub][]

## Como usar

Para usar esta aplicación, debe tener una cuenta Mendeley previamente creada; si no la tiene puede ver las opciones de registro [aquí][]. Si ya tiene una cuenta, siga estos pasos.

- `Empezar` - En la [página de inicio][] del API existen dos maneras de empezar a usar la API; una de estas es **Probar API**, usa esta cuando ya proporciono credenciales de Mendeley, si aun no proporciona sus credenciales, dirijase a **Probar API Credenciales**.

- `Proporcionar credenciales` - Si escogio **Probar API Credenciales**, la aplicación le redirigirá a una ventana en donde deberá proporcionar sus credenciales de Mendeley o a su vez confirmar su identidad Mendeley.

- `Proporcionar permisos a la API GraphQL` -  Despúes de proporcionar las credenciales, deberá de dar permisos de uso a la API para poder usar el token generado para poder realizar peticiones (Esto guardará una cookie con el token generado).
- `Ir a la prueba de concepto` - Después de proporcionar los permiso de uso de token, podrá dirigirse a la prueba de concepto. Nota: Si no dio permisos de uso del token, las peticiones a la API generaran un mensaje informando que el token es inválido.
- `Uso básico` - La prueba de concepto simula de alguna manera el funcionamiento de la Libreria de Mendeley; esta aplicación le permite ver sus recursos tales como carpetas, grupos, documentos, detalles de documento, archivos y su perfil, además insertar, editar y eliminar recursos.

## Intenta una prueba
Puedes consumir el API proponiendo tu propia solución. Vamos ¡Intentalo!.

[prueba de concepto]:https://test-concept-gmw.herokuapp.com/
[aquí]:https://www.mendeley.com/
[Wrapper GraphQL de Mendeley]: https://graphql-mendeley.herokuapp.com/
[repositorio GitHub]: https://github.com/kdrodriguez/graphql-mendeley-wrapper
[página de inicio]: https://graphql-mendeley.herokuapp.com/