import { SUCURSALES } from '../data/branches'
import { REDES_SOCIALES } from '../data/socialLinks'
import { TEXTOS } from '../data/branding'

/**
 * Footer informativo: lista de sucursales y redes sociales.
 * Datos cargados desde /data/branches.js y /data/socialLinks.js.
 * Por requerimiento del proyecto NO son clickeables.
 */
function BranchFooter() {
  // Íconos SVG inline (sin librerías externas)
  const iconoPin = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.5 7.1 11.4 7.4 11.7a1 1 0 0 0 1.2 0C12.9 21.4 20 15.5 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  )

  const iconoInstagram = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  )

  const iconoFacebook = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
    </svg>
  )

  // Mapea cada red al ícono correspondiente
  const iconosPorRed = {
    Instagram: iconoInstagram,
    Facebook: iconoFacebook
  }

  return (
    <footer className="footer">
      {/* ---- Sucursales ---- */}
      <section className="footer__seccion">
        <h2 className="footer__titulo">NUESTRAS SUCURSALES</h2>
        <div className="sucursales">
          {SUCURSALES.map((suc) => (
            <div key={suc.id} className="sucursal">
              <span className="sucursal__icono" aria-hidden="true">
                {iconoPin}
              </span>
              <span className="sucursal__tipo">{suc.tipo}</span>
              <span className="sucursal__direccion">{suc.direccion}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Redes ---- */}
      <section className="footer__seccion">
        <h2 className="footer__titulo">SEGUINOS EN NUESTRAS REDES</h2>
        <div className="redes">
          {REDES_SOCIALES.map((red, idx) => (
            <div key={red.id} style={{ display: 'contents' }}>
              <div className="red">
                <span className="red__icono" aria-hidden="true">
                  {iconosPorRed[red.red]}
                </span>
                <span className="red__handle">{red.handle}</span>
              </div>
              {idx < REDES_SOCIALES.length - 1 && (
                <span className="redes__separador" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---- Aclaración legal ---- */}
      <p className="footer__aclaracion">{TEXTOS.fechaSorteo}</p>
    </footer>
  )
}

export default BranchFooter
