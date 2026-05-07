/**
 * Botón principal de envío del formulario.
 *
 * Props:
 *  - enviando: boolean. Si es true, muestra "Enviando..." y se deshabilita.
 *  - onClick: handler del click.
 */
function SubmitButton({ enviando, onClick }) {
  const iconoAvion = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.4 20.4 20.85 12.92a1 1 0 0 0 0-1.84L3.4 3.6a1 1 0 0 0-1.39 1.18l2.1 6.16a1 1 0 0 0 .8.67l8.94 1.39-8.94 1.39a1 1 0 0 0-.8.67l-2.1 6.16a1 1 0 0 0 1.39 1.18Z" />
    </svg>
  )

  return (
    <button
      type="button"
      className="boton-enviar"
      onClick={onClick}
      disabled={enviando}
    >
      {!enviando && (
        <span className="boton-enviar__icono" aria-hidden="true">
          {iconoAvion}
        </span>
      )}
      {enviando ? 'Enviando...' : 'ENVIAR'}
    </button>
  )
}

export default SubmitButton
