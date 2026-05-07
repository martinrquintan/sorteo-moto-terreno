/**
 * Input de texto reutilizable con un ícono circular adelante.
 *
 * Props:
 *  - icono: nodo React con el SVG del ícono.
 *  - placeholder: texto guía del input.
 *  - value: valor controlado.
 *  - onChange: función que recibe el nuevo valor (string).
 *  - name: nombre del campo (útil para forms y debugging).
 *  - autoComplete: hint de autocompletado del navegador.
 */
function TextInput({
  icono,
  placeholder,
  value,
  onChange,
  name,
  autoComplete = 'off'
}) {
  return (
    <label className="text-input">
      <span className="text-input__icono-wrap" aria-hidden="true">
        <span className="text-input__icono">{icono}</span>
      </span>
      <input
        type="text"
        name={name}
        className="text-input__field"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
      />
    </label>
  )
}

export default TextInput
