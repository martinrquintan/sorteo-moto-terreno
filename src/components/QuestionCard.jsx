/**
 * Tarjeta de pregunta con dos botones de opción Sí / No.
 *
 * Props:
 *  - icono: SVG/JSX del ícono de la izquierda.
 *  - pregunta: texto de la pregunta.
 *  - hint: texto opcional debajo de la pregunta (ej: aclaración).
 *  - valorSeleccionado: 'si' | 'no' | '' (vacío = ninguno seleccionado).
 *  - onChange: función que recibe el nuevo valor ('si' o 'no').
 */
function QuestionCard({
  icono,
  pregunta,
  hint,
  valorSeleccionado,
  onChange
}) {
  // Helper para construir las clases del botón según si está seleccionado o no
  const claseBoton = (opcion) =>
    'boton-opcion' +
    (valorSeleccionado === opcion ? ' boton-opcion--seleccionado' : '')

  return (
    <div className="question-card">
      <div className="question-card__fila">
        <span className="question-card__icono-wrap" aria-hidden="true">
          <span className="question-card__icono">{icono}</span>
        </span>

        <p className="question-card__pregunta">{pregunta}</p>

        <div className="question-card__opciones">
          <button
            type="button"
            className={claseBoton('si')}
            onClick={() => onChange('si')}
            aria-pressed={valorSeleccionado === 'si'}
          >
            Sí
          </button>
          <button
            type="button"
            className={claseBoton('no')}
            onClick={() => onChange('no')}
            aria-pressed={valorSeleccionado === 'no'}
          >
            No
          </button>
        </div>
      </div>

      {hint && <p className="question-card__hint">{hint}</p>}
    </div>
  )
}

export default QuestionCard
