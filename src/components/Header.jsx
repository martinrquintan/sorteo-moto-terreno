import { LOGO_URL, TEXTOS } from '../data/branding'

/**
 * Cabecera de la landing.
 * Muestra el logo, el título principal, el badge promocional
 * y el subtítulo. Todos los textos vienen de /data/branding.js.
 */
function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <img
          className="header__logo"
          src={LOGO_URL}
          alt="Logo Mi Primer Casa S.A."
        />
      </div>

      <h1 className="header__titulo">{TEXTOS.tituloPrincipal}</h1>

      <span className="header__badge">{TEXTOS.badge}</span>

      <p className="header__subtitulo">{TEXTOS.subtitulo}</p>
    </header>
  )
}

export default Header
