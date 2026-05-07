import { useState } from 'react'
import Header from './components/Header'
import TextInput from './components/TextInput'
import QuestionCard from './components/QuestionCard'
import TimeSelector from './components/TimeSelector'
import SubmitButton from './components/SubmitButton'
import BranchFooter from './components/BranchFooter'
import SuccessMessage from './components/SuccessMessage'
import { enviarEncuesta } from './services/surveyApi'

// =====================================================
// Estado inicial del formulario.
// Mantiene la misma forma que se enviará al backend
// (más cómodo de mapear y debuggear).
// =====================================================
const ESTADO_INICIAL = {
  nombreApellido: '',
  barrioODireccion: '',
  conoceInmobiliaria: '',
  sabePlan55000: '',
  quiereMasInformacion: '',
  horarioContacto: ''
}

function App() {
  // ---- Estados ----
  const [datos, setDatos] = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState([])
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [errorEnvio, setErrorEnvio] = useState('')

  // ---- Helpers para actualizar campos individuales ----
  const actualizarCampo = (campo, valor) => {
    setDatos((prev) => {
      const nuevo = { ...prev, [campo]: valor }

      // Regla: si el usuario cambia "¿Querés más información?" a "no",
      // limpiamos el horario para no enviar datos fantasma.
      if (campo === 'quiereMasInformacion' && valor === 'no') {
        nuevo.horarioContacto = ''
      }

      return nuevo
    })
  }

  // ---- Validación ----
  const validar = () => {
    const erroresNuevos = []

    if (!datos.nombreApellido.trim()) {
      erroresNuevos.push('Ingresá tu nombre y apellido.')
    }
    if (!datos.barrioODireccion.trim()) {
      erroresNuevos.push('Ingresá tu barrio o dirección.')
    }

    const faltaAlgunaRespuesta =
      !datos.conoceInmobiliaria ||
      !datos.sabePlan55000 ||
      !datos.quiereMasInformacion

    if (faltaAlgunaRespuesta) {
      erroresNuevos.push('Respondé todas las preguntas obligatorias.')
    }

    setErrores(erroresNuevos)
    return erroresNuevos.length === 0
  }

  // ---- Submit ----
  const handleSubmit = async () => {
    setErrorEnvio('')

    if (!validar()) return

    const payload = {
      ...datos,
      fechaEnvio: new Date().toISOString()
    }

    try {
      setEnviando(true)
      await enviarEncuesta(payload)
      setEnviado(true)
    } catch (err) {
      console.error(err)
      setErrorEnvio('No pudimos enviar la encuesta. Intentá nuevamente.')
    } finally {
      setEnviando(false)
    }
  }

  // ---- Íconos SVG inline (sin librerías) ----
  const iconoPersona = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0v1H4Z" />
    </svg>
  )

  const iconoPin = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.5 7.1 11.4 7.4 11.7a1 1 0 0 0 1.2 0C12.9 21.4 20 15.5 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  )

  const iconoInfo = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5a1.4 1.4 0 1 1 0 2.8A1.4 1.4 0 0 1 12 7Zm1.5 11h-3v-1h.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-.5v-1h2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 0 .5.5h.5v1Z" />
    </svg>
  )

  const iconoDolar = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20" />
      <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )

  const iconoChat = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M20 9h.5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H20v3l-3-3h-5v-2h7a1 1 0 0 0 1-1V9Z" />
    </svg>
  )

  const iconoError = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 6h2v6h-2V8Zm1 11a1.3 1.3 0 1 1 0-2.6A1.3 1.3 0 0 1 12 19Z" />
    </svg>
  )

  // ---- Render ----
  return (
    <div className="app-container">
      <Header />

      {enviado ? (
        <SuccessMessage />
      ) : (
        <>
          <main className="card-principal">
            <TextInput
              name="nombreApellido"
              icono={iconoPersona}
              placeholder="Nombre y apellido"
              value={datos.nombreApellido}
              onChange={(v) => actualizarCampo('nombreApellido', v)}
              autoComplete="name"
            />

            <TextInput
              name="barrioODireccion"
              icono={iconoPin}
              placeholder="Barrio o dirección"
              value={datos.barrioODireccion}
              onChange={(v) => actualizarCampo('barrioODireccion', v)}
              autoComplete="street-address"
            />

            <QuestionCard
              icono={iconoInfo}
              pregunta="¿Conocés la inmobiliaria Mi Primer Casa S.A.?"
              valorSeleccionado={datos.conoceInmobiliaria}
              onChange={(v) => actualizarCampo('conoceInmobiliaria', v)}
            />

            <QuestionCard
              icono={iconoDolar}
              pregunta="¿Sabías que con $55.000 por mes (cuotas fijas) comenzás pagando tu terreno?"
              valorSeleccionado={datos.sabePlan55000}
              onChange={(v) => actualizarCampo('sabePlan55000', v)}
            />

            <QuestionCard
              icono={iconoChat}
              pregunta="¿Querés más información?"
              hint="Si elegís Sí, podrás indicar el horario de contacto."
              valorSeleccionado={datos.quiereMasInformacion}
              onChange={(v) => actualizarCampo('quiereMasInformacion', v)}
            />

            <TimeSelector
              valorSeleccionado={datos.horarioContacto}
              onChange={(v) => actualizarCampo('horarioContacto', v)}
              deshabilitado={datos.quiereMasInformacion !== 'si'}
            />

            {/* ---- Mensajes de error ---- */}
            {errores.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {errores.map((msg, i) => (
                  <div className="error-mensaje" key={i}>
                    <span className="error-mensaje__icono" aria-hidden="true">
                      {iconoError}
                    </span>
                    {msg}
                  </div>
                ))}
              </div>
            )}

            {errorEnvio && (
              <div className="error-mensaje">
                <span className="error-mensaje__icono" aria-hidden="true">
                  {iconoError}
                </span>
                {errorEnvio}
              </div>
            )}
          </main>

          <SubmitButton enviando={enviando} onClick={handleSubmit} />
        </>
      )}

      <BranchFooter />
    </div>
  )
}

export default App
