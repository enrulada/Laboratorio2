# StudentHub

## Aplicación móvil educativa

StudentHub es una aplicación móvil desarrollada como proyecto de la materia **Laboratorio 2**.

La aplicación está orientada a estudiantes y tiene como objetivo organizar en un mismo espacio diferentes recursos académicos, permitiendo acceder de manera sencilla a materias, apuntes, próximos exámenes y contenidos favoritos.

El proyecto se encuentra actualmente en desarrollo y evoluciona progresivamente incorporando los conceptos y herramientas trabajados durante las clases.

---

## Problemática que aborda

StudentHub surge ante la necesidad de contar con una herramienta que permita al estudiante organizar de manera sencilla la información relacionada con su actividad académica.

La aplicación busca facilitar:

- El acceso organizado a las materias.
- La consulta de apuntes y material de estudio.
- La organización de próximos exámenes.
- El acceso rápido a contenidos marcados como favoritos.
- La centralización de información académica en una única aplicación.

---

## Integrantes

- Brovelli Erica
- Cid Juan Cruz

---

## Tecnologías utilizadas

### Frontend

- React Native
- Expo
- Expo Router
- TypeScript
- Styled Components
- React Hooks

### Backend

- Go
- MySQL
- API REST
- JWT
- bcrypt

> Actualmente, las funcionalidades académicas desarrolladas durante las clases utilizan datos locales. La integración completa de estas funcionalidades con el backend se realizará en etapas posteriores.

---

## Funcionalidades actuales

| Funcionalidad | Descripción | Estado |
|---|---|---|
| Login | Permite ingresar a StudentHub mediante email y contraseña. | Implementado |
| Inicio | Pantalla de acceso inicial luego del Login. | Implementado |
| Dashboard | Centraliza los principales accesos de StudentHub. | Implementado |
| Mis Materias | Muestra las materias disponibles mediante una lista. | Implementado |
| Mis Apuntes | Permite visualizar apuntes correspondientes a una materia seleccionada. | Implementado con datos locales |
| Próximos Exámenes | Pantalla destinada a la organización de evaluaciones. | En desarrollo |
| Favoritos | Permite marcar y desmarcar contenidos como favoritos. | Implementado con datos locales |
| Tema claro/oscuro | Permite modificar la apariencia del Dashboard. | Implementado |

---

# Implementación de contenidos — Clase 1

Durante la **Clase 1** se trabajaron los conceptos iniciales necesarios para estructurar y desarrollar una aplicación móvil con React Native y Expo.

Los contenidos fueron aplicados directamente al proyecto StudentHub.

## Expo y React Native

StudentHub utiliza **Expo** junto con **React Native** para el desarrollo de la aplicación móvil.

El proyecto fue organizado utilizando TypeScript y Expo Router.

---

## Navegación con Expo Router

Se implementó navegación basada en archivos utilizando **Expo Router**.

StudentHub cuenta actualmente con rutas para:

- Login
- Home
- Dashboard
- Materias
- Apuntes
- Exámenes
- Favoritos

Se utilizan diferentes formas de navegación, por ejemplo:

```tsx
router.push('/materias');
```

También se utiliza:

```tsx
router.replace('/home');
```

`router.replace()` se utiliza después del Login para reemplazar la pantalla actual dentro del flujo de navegación.

Para regresar a una pantalla anterior se utiliza:

```tsx
router.back();
```

---

## Componentes de React Native

Durante el desarrollo de StudentHub se utilizaron diferentes componentes de React Native, entre ellos:

- `View`
- `Text`
- `TextInput`
- `Image`
- `Pressable`
- `TouchableOpacity`
- `ActivityIndicator`
- `FlatList`

---

## Login

La aplicación cuenta con una pantalla de Login desarrollada en TypeScript.

La pantalla incluye:

- Campo de email.
- Campo de contraseña.
- Validación de datos.
- Indicador de carga.
- Servicio de autenticación.
- Navegación hacia la aplicación luego del ingreso.

---

## Imágenes

StudentHub utiliza recursos gráficos locales almacenados dentro del proyecto.

Se incorporó el logo de StudentHub utilizando el componente `Image` de React Native y definiendo sus dimensiones para visualizarlo correctamente.

---

## Styled Components

Se incorporó:

```text
styled-components/native
```

para trabajar con componentes estilizados y reutilizables.

Esto permite organizar mejor los estilos visuales de la aplicación.

---

## Tema claro y oscuro

Se implementó un sistema de temas utilizando:

- `ThemeProvider`
- `lightTheme`
- `darkTheme`
- `ThemeContext`

El usuario puede alternar entre modo claro y modo oscuro desde el Dashboard.

---

## Navegación con parámetros

StudentHub permite enviar información de una pantalla a otra.

Por ejemplo, al seleccionar una materia se envían:

- ID de la materia.
- Nombre de la materia.

La pantalla de Apuntes recibe estos parámetros y muestra la información correspondiente a la materia seleccionada.

---

# Implementación de contenidos — Clase 2

Durante la **Clase 2** se incorporaron nuevos conceptos de React Native y Expo.

Los ejemplos trabajados durante la clase fueron utilizados como referencia y posteriormente adaptados al contexto de StudentHub.

---

## FlatList

Se incorporó `FlatList` para mostrar colecciones de datos de manera organizada.

En la pantalla **Mis Materias**, las materias se almacenan en un arreglo y se muestran mediante `FlatList`.

Ejemplo:

```tsx
<FlatList
  data={materias}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    // contenido de cada materia
  )}
/>
```

También se utiliza `FlatList` para mostrar los apuntes y los contenidos de Favoritos.

---

## useState

Se utiliza `useState` para manejar información que puede cambiar durante la ejecución de la aplicación.

En la pantalla **Favoritos**, por ejemplo, se mantiene el estado de los contenidos y se permite modificar si un elemento está marcado o no como favorito.

---

## Actualización inmutable del estado

Para modificar los favoritos se utiliza `.map()` junto con el operador spread (`...`).

Ejemplo:

```tsx
const nuevosContenidos = contenidos.map((contenido) => {
  if (contenido.id === id) {
    return {
      ...contenido,
      favorito: !contenido.favorito,
    };
  }

  return contenido;
});

setContenidos(nuevosContenidos);
```

De esta manera se genera un nuevo arreglo sin modificar directamente el estado original.

---

## useEffect

En la pantalla **Mis Apuntes** se incorporó `useEffect` para ejecutar la carga de información cuando cambia la materia seleccionada.

```tsx
useEffect(() => {
  cargarApuntes();
}, [idMateria]);
```

---

## Async/Await

La función encargada de cargar los apuntes fue preparada utilizando programación asíncrona:

```tsx
const cargarApuntes = async () => {
  // carga de información
};
```

Actualmente la función utiliza datos locales de StudentHub.

En una etapa posterior podrá reemplazarse esta carga local por una petición al backend.

---

## Try / Catch / Finally

La función de carga de apuntes utiliza una estructura:

```tsx
try {
  // carga de datos
} catch (error) {
  console.error('Error al cargar los apuntes:', error);
} finally {
  setCargando(false);
}
```

Esto permite organizar el manejo de posibles errores y controlar la finalización del proceso de carga.

---

## ActivityIndicator

Mientras se realiza la carga de los apuntes se utiliza `ActivityIndicator`.

Ejemplo:

```tsx
<ActivityIndicator
  size="large"
  color="#2563EB"
/>
```

De esta manera la aplicación puede indicar visualmente que existe un proceso de carga.

---

## Favoritos

La pantalla **Favoritos** permite marcar y desmarcar contenidos.

Al tocar un contenido, su estado puede cambiar entre:

```text
☆ No favorito
⭐ Favorito
```

Esta funcionalidad permite aplicar los conceptos de:

- `useState`
- `FlatList`
- Eventos mediante `Pressable`
- `.map()`
- Operador spread
- Actualización inmutable del estado

---

## Link de Expo Router

Además de la navegación programática mediante `router`, se incorporó navegación declarativa utilizando `Link` de Expo Router.

Ejemplo:

```tsx
<Link href="/materias">
  📚 Ir a Mis Materias
</Link>
```

Este enlace se encuentra en la pantalla **Mis Apuntes** y permite regresar directamente a **Mis Materias**.

---

# Adaptación de los ejemplos trabajados en clase

Los ejemplos desarrollados durante las clases fueron utilizados como referencia para comprender los conceptos de React Native y Expo.

Estos conceptos fueron adaptados al contexto de StudentHub en lugar de reproducir literalmente los ejemplos demostrativos.

Por ejemplo, el ejemplo trabajado en clase utilizando información de **Pokémon** fue adaptado a información académica de StudentHub.

De esta manera:

- `FlatList` se aplicó a materias, apuntes y favoritos.
- `useState` se aplicó al manejo de favoritos.
- `.map()` y el operador spread se utilizaron para modificar el estado de los favoritos.
- `useEffect` se aplicó a la carga de apuntes.
- `ActivityIndicator` se utilizó durante el proceso de carga.
- `Link` se utilizó para navegar entre Apuntes y Materias.
- Los datos utilizados corresponden al contexto académico de StudentHub.

El objetivo fue aplicar los mismos conceptos enseñados durante la clase, pero adaptándolos a las necesidades reales del proyecto.

---

# Estado de la integración con el backend

StudentHub posee una estructura de backend desarrollada en **Go**.

El proyecto contempla el uso de:

- API REST
- MySQL
- bcrypt
- JWT

Actualmente, las funcionalidades académicas trabajadas durante la Clase 2 utilizan datos locales.

Por el momento no se implementó `fetch` para obtener materias, apuntes o favoritos desde el backend.

La conexión de estas funcionalidades con la API queda prevista para una etapa posterior del proyecto.

---

# Estructura principal del proyecto

```text
StudentHub_Lab2/
│
├── backend-go/
│   ├── config/
│   ├── handlers/
│   ├── models/
│   ├── utils/
│   ├── go.mod
│   ├── go.sum
│   └── main.go
│
└── frontend/
    ├── app/
    │   ├── (principal)/
    │   │   ├── _layout.tsx
    │   │   ├── apuntes.tsx
    │   │   ├── dashboard.tsx
    │   │   ├── examenes.tsx
    │   │   ├── favoritos.tsx
    │   │   └── materias.tsx
    │   │
    │   ├── _layout.tsx
    │   ├── home.tsx
    │   ├── index.tsx
    │   └── login.tsx
    │
    ├── assets/
    │
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── context/
    │   ├── services/
    │   └── theme/
    │
    ├── app.json
    ├── package.json
    └── tsconfig.json
```

---

# Estado actual del proyecto

StudentHub se encuentra actualmente en desarrollo.

Los contenidos correspondientes a las **Clases 1 y 2** fueron incorporados progresivamente y adaptados a la temática educativa del proyecto.

Actualmente se encuentran implementados y probados:

- Login.
- Navegación con Expo Router.
- Dashboard.
- Tema claro y oscuro.
- Pantalla Mis Materias.
- Selección de materias.
- Envío de parámetros entre pantallas.
- Pantalla Mis Apuntes.
- Datos locales para apuntes.
- Listados mediante `FlatList`.
- Manejo de estado mediante `useState`.
- Uso de `useEffect`.
- Programación asíncrona mediante `async/await`.
- Manejo de `try/catch/finally`.
- Indicador de carga mediante `ActivityIndicator`.
- Favoritos interactivos.
- Actualización inmutable mediante `.map()` y spread.
- Navegación declarativa mediante `Link`.

---

# Próximas mejoras

Como próximas etapas del proyecto se prevé:

- Integrar las funcionalidades académicas con el backend.
- Incorporar `fetch` para consumir información desde la API.
- Desarrollar la funcionalidad de Próximos Exámenes.
- Ampliar el contenido de materias y apuntes.
- Persistir los favoritos.
- Continuar incorporando los contenidos correspondientes a las próximas clases de Laboratorio 2.
