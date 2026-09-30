
# StudentHub

## Aplicación móvil educativa

StudentHub es una aplicación móvil desarrollada como proyecto de la materia **Laboratorio 2**.

La aplicación está orientada a estudiantes y tiene como objetivo organizar en un mismo espacio diferentes recursos académicos, permitiendo acceder de manera sencilla a materias, apuntes, próximos exámenes y contenidos favoritos.

El proyecto se encuentra actualmente en desarrollo y evoluciona progresivamente incorporando los conceptos y herramientas trabajados durante las clases.

---

# Información para el corte evaluativo

## Integrantes del grupo

- Brovelli Erica
- Cid Juan Cruz

---

## Features implementadas

| Feature | Descripción | Estado |
|---|---|---|
| Login | Permite ingresar a StudentHub mediante email y contraseña. | ✅ Implementada |
| Inicio | Pantalla de acceso inicial luego del Login. | ✅ Implementada |
| Dashboard | Centraliza los principales accesos de StudentHub. | ✅ Implementada |
| Mis Materias | Permite consultar las materias disponibles mediante una lista. | ✅ Implementada |
| Mis Apuntes | Permite visualizar apuntes correspondientes a una materia seleccionada. | ✅ Implementada con datos locales |
| Favoritos | Permite marcar y desmarcar contenidos utilizando estado global con Zustand. | ✅ Implementada con datos locales |
| Tema claro/oscuro | Permite modificar la apariencia del Dashboard. | ✅ Implementada |
| Gradientes visuales | Se aplicó LinearGradient a las tarjetas principales del Dashboard. | ✅ Implementada |

---

## Features pendientes

| Feature | Estado |
|---|---|
| Próximos Exámenes | 🟡 En desarrollo |
| Integración de las funcionalidades académicas con el backend/API | ⏳ Pendiente |
| Uso de TanStack Query para datos provenientes del servidor | ⏳ Pendiente |
| Persistencia de Favoritos | ⏳ Pendiente |
| Ampliación del contenido de Materias y Apuntes | ⏳ Pendiente |

> Las funcionalidades académicas desarrolladas actualmente utilizan datos locales. La integración completa con la API/backend se realizará progresivamente en próximas etapas del proyecto.

---

# Problemática que aborda

StudentHub surge ante la necesidad de contar con una herramienta que permita al estudiante organizar de manera sencilla la información relacionada con su actividad académica.

La aplicación busca facilitar:

- El acceso organizado a las materias.
- La consulta de apuntes y material de estudio.
- La organización de próximos exámenes.
- El acceso rápido a contenidos marcados como favoritos.
- La centralización de información académica en una única aplicación.

---

# Tecnologías utilizadas

## Frontend

- React Native
- Expo
- Expo Router
- TypeScript
- Styled Components
- React Hooks
- Expo LinearGradient
- Zustand

## Backend

- Go
- MySQL
- API REST
- JWT
- bcrypt

> Actualmente, las funcionalidades académicas desarrolladas durante las clases utilizan datos locales. La integración completa de estas funcionalidades con el backend se realizará en etapas posteriores.

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

Se utilizan diferentes formas de navegación.

Ejemplo:

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
- `ScrollView`

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

Durante la Clase 2 se utilizó `useState` para manejar información que puede cambiar durante la ejecución de la aplicación.

Inicialmente, la pantalla **Favoritos** utilizó `useState` para mantener el estado local de los contenidos.

Posteriormente, durante la Clase 3, esta implementación evolucionó y el estado de Favoritos fue trasladado a un store global utilizando **Zustand**.

---

## Actualización inmutable del estado

Durante la implementación inicial de Favoritos se trabajó con `.map()` junto con el operador spread (`...`) para modificar los elementos sin alterar directamente el arreglo original.

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
```

Este mismo concepto de actualización inmutable continúa utilizándose dentro del store de Zustand.

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

## Favoritos — implementación inicial

Durante la Clase 2 se desarrolló la primera versión de la pantalla **Favoritos**.

La pantalla permite cambiar un contenido entre:

```text
☆ No favorito
⭐ Favorito
```

En esta primera implementación se aplicaron conceptos como:

- `useState`
- `FlatList`
- Eventos mediante `Pressable`
- `.map()`
- Operador spread
- Actualización inmutable del estado

Durante la Clase 3 esta funcionalidad fue mejorada utilizando Zustand para manejar los favoritos mediante estado global.

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

# Implementación de contenidos — Clase 3

Durante la **Clase 3** se trabajaron nuevos conceptos relacionados con la interfaz visual, el manejo de estado global y la administración de datos provenientes de servicios externos.

Los conceptos fueron adaptados al contexto académico de StudentHub.

---

## LinearGradient

Se incorporó la dependencia:

```text
expo-linear-gradient
```

Se utilizó `LinearGradient` para mejorar visualmente las tarjetas del Dashboard.

Las tarjetas:

- Mis Materias
- Mis Apuntes
- Próximos Exámenes
- Favoritos

utilizan actualmente un degradado de colores.

Ejemplo:

```tsx
<LinearGradient
  colors={['#2563EB', '#60A5FA']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
>
  {/* contenido de la tarjeta */}
</LinearGradient>
```

Esta implementación permite aplicar un degradado desde un azul más intenso hacia un azul más claro.

El componente fue integrado dentro del componente reutilizable `Card.tsx`, permitiendo que todas las tarjetas principales del Dashboard compartan el mismo estilo.

---

## Zustand

Se incorporó:

```text
zustand
```

para trabajar con estado global dentro de StudentHub.

Durante la Clase 2, Favoritos utilizaba inicialmente `useState` dentro de la propia pantalla.

Durante la Clase 3 esta implementación fue modificada para utilizar un store global.

Se creó:

```text
src/store/favoritosStore.ts
```

El store contiene:

- La lista de contenidos.
- El estado favorito de cada contenido.
- La función para marcar o desmarcar un favorito.

Ejemplo simplificado:

```tsx
export const useFavoritosStore = create<FavoritosStore>((set) => ({
  contenidos: [
    // contenidos académicos
  ],

  cambiarFavorito: (id) =>
    set((state) => ({
      contenidos: state.contenidos.map((contenido) =>
        contenido.id === id
          ? {
              ...contenido,
              favorito: !contenido.favorito,
            }
          : contenido
      ),
    })),
}));
```

---

## Estado global de Favoritos

La pantalla **Favoritos** consume actualmente el store global:

```tsx
const contenidos = useFavoritosStore(
  (state) => state.contenidos
);

const cambiarFavorito = useFavoritosStore(
  (state) => state.cambiarFavorito
);
```

Esto permite separar el estado de la pantalla y mantenerlo disponible para otros componentes de StudentHub.

---

## Estado compartido entre Favoritos y Dashboard

El Dashboard también utiliza `useFavoritosStore`.

De esta manera puede calcular dinámicamente la cantidad de contenidos marcados como favoritos:

```tsx
const cantidadFavoritos = useFavoritosStore(
  (state) =>
    state.contenidos.filter(
      (contenido) => contenido.favorito
    ).length
);
```

La tarjeta de Favoritos muestra la cantidad actual:

```tsx
descripcion={`Tenés ${cantidadFavoritos} contenidos favoritos.`}
```

Esta implementación permite comprobar el funcionamiento del estado global.

Por ejemplo:

- Si existen 2 favoritos, el Dashboard muestra 2.
- Si se desmarca uno, el Dashboard actualiza el valor a 1.
- Si se marcan los tres contenidos, el Dashboard actualiza el valor a 3.

La actualización se realiza sin necesidad de pasar manualmente los datos entre las pantallas.

---

## TanStack Query

Durante la Clase 3 también se trabajó el concepto de **TanStack Query** para administrar información proveniente de APIs o servicios externos.

En StudentHub todavía no se implementó TanStack Query porque las funcionalidades académicas actuales continúan trabajando con datos locales.

Su implementación queda prevista para la etapa en la que Materias, Apuntes u otras funcionalidades consuman información real desde la API/backend.

De esta manera se evita incorporar una consulta externa artificial únicamente para reproducir el ejemplo visto en clase.

---

# Adaptación de los ejemplos trabajados en clase

Los ejemplos desarrollados durante las clases fueron utilizados como referencia para comprender los conceptos de React Native, Expo y manejo de estado.

Estos conceptos fueron adaptados al contexto de StudentHub en lugar de reproducir literalmente los ejemplos demostrativos.

Por ejemplo, los ejercicios realizados en clase utilizando información de **Pokémon** fueron adaptados a información académica de StudentHub.

De esta manera:

- `FlatList` se aplicó a materias, apuntes y favoritos.
- `useState` se utilizó inicialmente para trabajar el estado local.
- `.map()` y el operador spread se aplicaron a la actualización de favoritos.
- `useEffect` se aplicó a la carga de apuntes.
- `ActivityIndicator` se utilizó durante el proceso de carga.
- `Link` se utilizó para navegar entre Apuntes y Materias.
- `LinearGradient` se aplicó a las tarjetas académicas del Dashboard.
- Zustand se aplicó al estado global de Favoritos.
- El Dashboard y Favoritos comparten información mediante el mismo store.
- Los datos utilizados corresponden al contexto académico de StudentHub.

El objetivo fue aplicar los conceptos enseñados durante las clases adaptándolos a las necesidades reales del proyecto.

---

# Estado de la integración con el backend

StudentHub posee una estructura de backend desarrollada en **Go**.

El proyecto contempla el uso de:

- API REST
- MySQL
- bcrypt
- JWT

Actualmente, las funcionalidades académicas trabajadas durante las Clases 2 y 3 utilizan datos locales.

Por el momento no se implementó la consulta de materias, apuntes o favoritos desde el backend.

La conexión de estas funcionalidades con la API queda prevista para una etapa posterior del proyecto.

Cuando se realice esta integración se evaluará la incorporación de **TanStack Query** para administrar los datos provenientes del servidor.

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
    │   │   ├── Card.tsx
    │   │   └── Title.tsx
    │   ├── context/
    │   ├── services/
    │   ├── store/
    │   │   └── favoritosStore.ts
    │   ├── theme/
    │   └── styled.d.ts
    │
    ├── app.json
    ├── package.json
    └── tsconfig.json
```

---

# Estado actual del proyecto

StudentHub se encuentra actualmente en desarrollo.

Los contenidos correspondientes a las **Clases 1, 2 y 3** fueron incorporados progresivamente y adaptados a la temática educativa del proyecto.

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
- Uso de `useState`.
- Uso de `useEffect`.
- Programación asíncrona mediante `async/await`.
- Manejo de `try/catch/finally`.
- Indicador de carga mediante `ActivityIndicator`.
- Navegación declarativa mediante `Link`.
- Tarjetas con `LinearGradient`.
- Estado global mediante Zustand.
- Store global de Favoritos.
- Favoritos interactivos.
- Actualización inmutable mediante `.map()` y spread.
- Estado compartido entre Favoritos y Dashboard.
- Contador dinámico de contenidos favoritos.

Las funcionalidades desarrolladas fueron probadas en el proyecto y se verificó el funcionamiento de la navegación entre las pantallas principales.

---

# Features pendientes

Como próximas etapas del proyecto se prevé:

- Desarrollar y ampliar la Feature de Próximos Exámenes.
- Integrar las funcionalidades académicas con el backend.
- Consumir información real desde la API.
- Incorporar TanStack Query cuando se realice la integración con datos del servidor.
- Ampliar el contenido de materias y apuntes.
- Persistir los favoritos.
- Continuar incorporando los contenidos correspondientes a las próximas clases de Laboratorio 2.

---

# Observación

StudentHub es un proyecto en desarrollo.

Las Features implementadas actualmente representan el avance realizado durante las primeras clases de Laboratorio 2.

Las funcionalidades pendientes se incorporarán progresivamente a medida que avance el desarrollo del proyecto y se integren nuevos contenidos trabajados durante la materia.