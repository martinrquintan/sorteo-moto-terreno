/**
 * Selector de horario de contacto (Mañana / Tarde).
 * Es OPCIONAL: el usuario puede dejarlo vacío.
 * Está siempre visible pero queda DESHABILITADO mientras
 * el usuario no haya elegido "Sí" en "¿Querés más información?".
 *
 * Props:
 *  - valorSeleccionado: 'manana' | 'tarde' | ''.
 *  - onChange: función que recibe el nuevo valor.
 *  - deshabilitado: boolean. Si es true, los botones quedan inactivos.
 */
function TimeSelector({ valorSeleccionado, onChange, deshabilitado }) {
  const claseContenedor =
    'time-selector' +
    (deshabilitado ? ' time-selector--deshabilitado' : '')

  const claseBoton = (opcion) =>
    'boton-opcion' +
    (valorSeleccionado === opcion && !deshabilitado
      ? ' boton-opcion--seleccionado'
      : '')

  // Si se deshabilita después de haber seleccionado algo, limpiamos el valor
  // (esto evita enviar un horario "fantasma" si el usuario cambia su respuesta
  // de "Sí" a "No" después de elegir un horario). Lo manejamos también desde App,
  // pero por seguridad no marcamos visualmente la opción si está deshabilitado.

  const iconoCalendario = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
      <circle cx="16" cy="15" r="3" />
      <path d="M16 13.5V15l1 .8" strokeLinecap="round" />
    </svg>
  )

  const iconoSol = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  )

  const iconoAtardecer = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 18h18" strokeLinecap="round" />
      <path d="M6 18a6 6 0 0 1 12 0" strokeLinecap="round" />
      <path
        d="M12 4v3M4.6 7.6 6 9M19.4 7.6 18 9M2 14h2M20 14h2"
        strokeLinecap="round"
      />
    </svg>
  )

  return (
    <div className={claseContenedor}>
      <div className="time-selector__fila">
        <span className="time-selector__icono-wrap" aria-hidden="true">
          <span className="time-selector__icono">{iconoCalendario}</span>
        </span>
        <p className="time-selector__pregunta">
          ¿Qué horario te queda mejor para que te llamemos?
        </p>
      </div>

      <div className="time-selector__opciones">
        <button
          type="button"
          className={claseBoton('manana')}
          onClick={() => onChange('manana')}
          disabled={deshabilitado}
          aria-pressed={valorSeleccionado === 'manana' && !deshabilitado}
        >
          <span className="boton-opcion__icono">{iconoSol}</span>
          Mañana
        </button>
        <button
          type="button"
          className={claseBoton('tarde')}
          onClick={() => onChange('tarde')}
          disabled={deshabilitado}
          aria-pressed={valorSeleccionado === 'tarde' && !deshabilitado}
        >
          <span className="boton-opcion__icono">{iconoAtardecer}</span>
          Tarde
        </button>
      </div>
    </div>
  )
}

export default TimeSelector
