// =====================================================
// SERVICIO DE ENVÍO DE ENCUESTAS
// Único archivo que el backend developer necesita tocar
// para conectar la base de datos.
// =====================================================

// 👉 Reemplazá esta URL por la de tu API real.
const API_URL = 'https://tu-api.com/api/encuestas'

/**
 * Envía la encuesta al backend.
 *
 * @param {Object} datosEncuesta - Objeto con los datos de la encuesta.
 *   Estructura esperada:
 *   {
 *     nombreApellido: string,
 *     barrioODireccion: string,
 *     conoceInmobiliaria: 'si' | 'no',
 *     sabePlan55000: 'si' | 'no',
 *     quiereMasInformacion: 'si' | 'no',
 *     horarioContacto: 'manana' | 'tarde' | '',
 *     fechaEnvio: string (ISO)
 *   }
 * @returns {Promise<Object>} respuesta JSON del servidor.
 */
export async function enviarEncuesta(datosEncuesta) {
  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosEncuesta)
  })

  if (!respuesta.ok) {
    throw new Error('No se pudo enviar la encuesta')
  }

  return respuesta.json()
}
