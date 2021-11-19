import form from './form.js' //campo de formularios y los mensajes donde aparecerá los errores
import pattern from './pattern.js' // patterns utilizados para validar los campos
import msg from './msg.js' // mensajes personalizados de errores
import styling from './styling.js' //

const nombre = () => (pattern.nombre.test(form.nombre.value) ? true : false)
const apellido = () =>
  pattern.apellido.test(form.apellido.value) ? true : false
const telf = () => (pattern.telf.test(form.telf.value) ? true : false)
const mail = () => (pattern.email.test(form.email.value) ? true : false)
const asunto = () => (pattern.asunto.test(form.asunto.value) ? true : false)
const contenido = () =>
  pattern.contenido.test(form.contenido.value) ? true : false
const fecha = () => {
  let edad = new Date() - Date.parse(form.fecha.value)
  edad = edad / (1000 * 60 * 60 * 24 * 365)
  edad = Number(edad.toFixed(4))
  return edad >= 18 ? true : false
}
const validaDNI = dni => {
  // generador de dni: https://testingdatagenerator.com/doi.html
  let numero, letraDNI, letra
  if (pattern.dni.test(dni) == true) {
    numero = dni.substr(0, dni.length - 1)
    letraDNI = dni.substr(dni.length - 1, 1)
    numero = numero % 23
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET'
    letra = letra.substring(numero, numero + 1)
    if (letra != letraDNI.toUpperCase())
      styling(false, msg.dni1, [form.dni, mostra_dni])
    else styling(true, msg.dni2, [form.dni, mostra_dni])
    return true
  }
  styling(false, msg.dni3, [form.dni, mostra_dni])
}
export { nombre, apellido, telf, mail, asunto, contenido, fecha, validaDNI }
