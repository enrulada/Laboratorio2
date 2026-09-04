
# StudentHub

### README del proyecto — Aplicación móvil

## Descripción del proyecto

StudentHub es la aplicación móvil orientada a estudiantes dentro del sistema Mentor Estudiantil, un sistema de información educativo enfocado en el diagnóstico, seguimiento y acompañamiento académico de estudiantes de nivel secundario.

Desde StudentHub, el estudiante puede acceder a sus materias, rendir evaluaciones, consultar sus resultados y visualizar qué contenidos necesita reforzar, transformando la información académica en una herramienta útil para su propio seguimiento.

## Problemática que aborda

- Dificultad de los estudiantes para acceder de forma organizada a sus evaluaciones y resultados.
- Una calificación general no siempre permite identificar qué contenidos fueron comprendidos.
- Necesidad de que el estudiante identifique por sí mismo qué contenidos requieren refuerzo.
- Falta de una visualización simple del propio progreso académico.

## Integrantes

- Brovelli Erica
- Cid Juan Cruz

## Features

Grupo de 2 integrantes → alcance mínimo requerido: **4 Features**.

| # | Feature | Descripción | Estado |
|---|---------|-------------|--------|
| 1 | Iniciar sesión como estudiante | El estudiante se autentica con su usuario y contraseña para acceder a StudentHub. | En progreso |
| 2 | Consultar materias y evaluaciones disponibles | El estudiante visualiza sus materias y cuáles tienen evaluaciones pendientes de rendir. | Pendiente |
| 3 | Rendir una evaluación | El estudiante responde las preguntas de una evaluación habilitada y la envía (proceso completo: ver pregunta → responder → avanzar → enviar). | Pendiente |
| 4 | Consultar el resultado de una evaluación rendida | El estudiante consulta el puntaje y la calificación obtenida en una evaluación ya corregida. | Pendiente |

> El listado de Features se actualizará a medida que evolucione el proyecto, incorporando nuevas funcionalidades junto con los contenidos trabajados en la materia.

## Detalle del avance — Feature 1: Iniciar sesión como estudiante

- Proyecto frontend migrado de JavaScript a TypeScript (navegación, screens y servicios tipados).
- Backend desarrollado en Go, conectado a la base de datos MySQL real del proyecto.
- Endpoint `POST /api/auth/login` funcionando: valida el usuario contra la tabla `usuarios`, compara la contraseña con bcrypt y genera un token JWT.
- Endpoint probado y validado de forma directa (fuera de la app), devolviendo el token correctamente.
- Pantalla de Login migrada a TypeScript y visible en dispositivo real vía Expo Go.
- Pendiente: finalizar la conexión de red entre el celular y el backend local para completar el flujo de punta a punta.
