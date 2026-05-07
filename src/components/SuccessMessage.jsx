/**
 * Mensaje de éxito que reemplaza al formulario una vez
 * que la encuesta se envió correctamente.
 */
function SuccessMessage() {
  const iconoCheck = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <div className="success-card" role="status" aria-live="polite">
      <span className="success-card__icono-wrap" aria-hidden="true">
        <span className="success-card__icono">{iconoCheck}</span>
      </span>

      <h2 className="success-card__titulo">¡Ya estás participando!</h2>

      <p className="success-card__mensaje">
        Un asesor de Mi Primer Casa S.A. se pondrá en contacto en breve.
      </p>
    </div>
  )
}

export default SuccessMessage
