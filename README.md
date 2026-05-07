# Mi Primer Casa S.A. — Encuesta Promocional

Landing page mobile-first en **React + Vite + JavaScript + CSS puro**, pensada para una encuesta promocional con sorteo de una moto 110cc.

El proyecto está listo para que un programador conecte una API/base de datos cambiando una sola URL.

---

## 1. Instalación

Requisitos: **Node.js 18+** y **npm**.

```bash
npm install
```

## 2. Ejecución en desarrollo

```bash
npm run dev
```

Esto abre el sitio en `http://localhost:5173`.

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

---

## 3. Dónde cambiar la URL del logo

Archivo: **`src/data/branding.js`**

```js
export const LOGO_URL = 'https://tu-url.com/logo.png'
```

También podés guardar el logo en `/public/logo.png` y usar `'/logo.png'`.

---

## 4. Dónde cambiar la URL de la API

Archivo: **`src/services/surveyApi.js`**

```js
const API_URL = 'https://tu-api.com/api/encuestas'
```

Es el ÚNICO archivo que el backend developer necesita tocar para conectar la base de datos.

---

## 5. Estructura del objeto enviado a la base de datos

El frontend envía un `POST` con `Content-Type: application/json` y este body:

```json
{
  "nombreApellido": "Juan Pérez",
  "barrioODireccion": "Barrio San Miguel",
  "conoceInmobiliaria": "si",
  "sabePlan55000": "no",
  "quiereMasInformacion": "si",
  "horarioContacto": "manana",
  "fechaEnvio": "2026-05-07T14:23:11.000Z"
}
```

Campos:

| Campo                  | Tipo                          | Obligatorio | Notas                                                              |
| ---------------------- | ----------------------------- | ----------- | ------------------------------------------------------------------ |
| `nombreApellido`       | `string`                      | Sí          | Nombre y apellido del usuario.                                     |
| `barrioODireccion`     | `string`                      | Sí          | Barrio o dirección.                                                |
| `conoceInmobiliaria`   | `'si' \| 'no'`                | Sí          | Respuesta a la pregunta 1.                                         |
| `sabePlan55000`        | `'si' \| 'no'`                | Sí          | Respuesta a la pregunta 2.                                         |
| `quiereMasInformacion` | `'si' \| 'no'`                | Sí          | Respuesta a la pregunta 3.                                         |
| `horarioContacto`      | `'manana' \| 'tarde' \| ''`   | No          | Solo se completa si eligió "Sí" en la pregunta 3.                  |
| `fechaEnvio`           | `string` (ISO 8601)           | Auto        | Generado en el front con `new Date().toISOString()`.               |

---

## 6. Archivos que toca el programador para conectar el backend

En orden de importancia:

1. **`src/services/surveyApi.js`** → cambiar `API_URL`.
2. **`src/data/branding.js`** → opcional: cambiar `LOGO_URL` y textos.
3. **`src/data/branches.js`** → opcional: actualizar sucursales.
4. **`src/data/socialLinks.js`** → opcional: actualizar redes.

Si la API requiere headers extra (ej. `Authorization: Bearer ...`), agregalos en `surveyApi.js` dentro del objeto `headers`.

Si la respuesta del backend tiene una forma específica que querés usar (por ejemplo un `id` de participante), modificá el `return respuesta.json()` y actualizá `App.jsx` para usar ese dato.

---

## 7. Componentes del proyecto

```
src/
├── main.jsx                    Punto de entrada de Vite. Monta <App />.
├── App.jsx                     Estado del formulario, validaciones y envío.
│
├── components/
│   ├── Header.jsx              Logo + título + badge + subtítulo.
│   ├── TextInput.jsx           Input de texto con ícono circular.
│   ├── QuestionCard.jsx        Pregunta con botones Sí/No.
│   ├── TimeSelector.jsx        Selector Mañana/Tarde (opcional, deshabilitable).
│   ├── SubmitButton.jsx        Botón principal con estado "Enviando...".
│   ├── BranchFooter.jsx        Footer con sucursales y redes.
│   └── SuccessMessage.jsx      Mensaje de éxito post-envío.
│
├── data/
│   ├── branding.js             URL del logo + textos del header.
│   ├── branches.js             Lista de sucursales.
│   └── socialLinks.js          Lista de redes sociales.
│
├── services/
│   └── surveyApi.js            Función enviarEncuesta() y URL de la API.
│
└── styles/
    ├── global.css              Reset + variables CSS + fondo de la página.
    ├── layout.css              Header, contenedor, footer.
    ├── buttons.css             Botones de opción y botón de envío.
    └── form.css                Inputs, tarjetas de pregunta, mensajes.
```

---

## 8. Buenas prácticas aplicadas

- **Componentes pequeños y reutilizables** (cada uno hace una sola cosa).
- **Datos separados de la lógica** (`/data/` para listas, `/services/` para llamadas externas).
- **Variables CSS** centralizadas en `global.css` para repintar todo desde un solo lugar.
- **Mobile-first**: la base es para celular; los `@media (min-width: ...)` adaptan a desktop.
- **Sin animaciones complejas**: solo cambios suaves de color/sombra con `transition`.
- **Accesibilidad básica**: `aria-pressed`, `aria-live`, `aria-hidden` donde corresponde.
- **`fetch` nativo**: sin `axios` ni librerías HTTP, listo para reemplazar la URL.

---

## 9. Cómo extender

- **Agregar una nueva pregunta Sí/No**: agregá un campo en `ESTADO_INICIAL` (en `App.jsx`), incluí la validación si es obligatoria, y renderizá un `<QuestionCard>` más.
- **Agregar otro horario** (por ejemplo "Noche"): editá `TimeSelector.jsx` agregando un botón más.
- **Cambiar la paleta**: editá las variables CSS en `src/styles/global.css` (`--color-rojo`, `--color-rojo-oscuro`, etc.).

---

## 10. Comandos esperados (resumen)

```bash
npm install     # instala dependencias
npm run dev     # arranca en http://localhost:5173
npm run build   # build de producción en /dist
npm run preview # sirve el build localmente
```
