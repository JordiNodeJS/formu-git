import form from './form.js' //campo de formularios y los mensajes donde aparecerá los errores
import msg from './msg.js' // mensajes personalizados de errores
import styling from './styling.js' //
import {
  nombre,
  apellido,
  telf,
  mail,
  asunto,
  contenido,
  fecha,
  validaDNI,
} from './functions.js' // Colección de funciones que me devuelven un true o false si el campo cumple las condiciones

// FUNCIÓN que valida cada campo y que se añidará a al addEventListener
const validar = event => {
  let dom
  switch (event.target.name) {
    case 'nombre':
      dom = [form.nombre, mostra_nombre]
      nombre()
        ? styling(true, msg.valido, dom)
        : styling(false, msg.apellido, dom)
      break
    case 'apellido':
      dom = [form.apellido, mostra_apellido]
      apellido()
        ? styling(true, msg.valido, dom)
        : styling(false, msg.apellido, dom)
      break
    case 'telf':
      dom = [form.telf, mostra_telf]
      telf() ? styling(true, msg.valido, dom) : styling(false, msg.telf, dom)
      break
    case 'email':
      dom = [form.email, mostra_email]
      mail() ? styling(true, msg.valido, dom) : styling(false, msg.email, dom)
      break
    case 'asunto':
      dom = [form.asunto, mostra_asunto]
      asunto()
        ? styling(true, msg.valido, dom)
        : styling(false, msg.asunto, dom)
      break
    case 'contenido':
      dom = [form.contenido, mostra_contenido]
      contenido()
        ? styling(true, msg.valido, dom)
        : styling(false, msg.contenido, dom)
      break
    case 'fecha':
      dom = [form.fecha, mostra_fecha]
      fecha() ? styling(true, msg.valido, dom) : styling(false, msg.fecha, dom)
      break
    case 'dni':
      validaDNI(form.formu.dni.value)
      break
    case 'check':
      form.check.checked
        ? console.log('funciona') //styling(true, 'C H E C K   B O X', [enviando, enviando])
        : alert(msg.check)
      break
  }
}

// Estilo los mensajes de error y validez

// añado los listeners al formulario
const listeners = [
  form.nombre,
  form.apellido,
  form.email,
  form.fecha,
  form.telf,
  form.dni,
  form.asunto,
  form.contenido,
  form.check,
]
for (const listener of listeners) listener.addEventListener('keyup', validar)

// Evito que el formulario se envíe sin rellenar
form.formu.addEventListener('submit', event => {
  event.preventDefault()
  if (
    !mail() ||
    !asunto() ||
    !contenido() ||
    !telf() ||
    !apellido() ||
    !fecha() ||
    !form.check.checked
  ) {
    styling(false, msg.error.toLocaleUpperCase(), [enviando, enviando])
    alert(msg.check)
  } else {
    styling(true, msg.enviando.toLocaleUpperCase(), [enviando, enviando])
    document
      .querySelector('.spinner-border')
      .classList.remove('visually-hidden')
    setTimeout(() => {
      form.formu.submit()
    }, 1000)
  }
})
// Reseteo del campo de formulario
reset.addEventListener('click', () => {
  const smalls = document.querySelectorAll('.text-danger')
  const inputs = document.querySelectorAll('.is-invalid')
  for (const small of smalls) small.classList.remove('text-danger')
  for (const input of inputs) {
    input.classList.remove('is-invalid')
    input.placeholder = 'Campos reseteados, prueba de nuevo'
  }
})

// Zona de testeo, se puede elimitar
test.addEventListener('click', event => {
  !mail() ||
  !asunto() ||
  !contenido() ||
  !telf() ||
  !apellido() ||
  !fecha() ||
  !validaDNI(form.formu.dni.value) ||
  !form.check.checked
    ? styling(false, msg.error.toLocaleUpperCase(), [enviando, enviando])
    : styling(true, msg.valido.toLocaleUpperCase(), [enviando, enviando])
})
test.addEventListener('click', event => {
  if (
    !mail() ||
    !asunto() ||
    !contenido() ||
    !telf() ||
    !apellido() ||
    !fecha() ||
    !form.check.checked
  ) {
    console.log(
      telf(),
      contenido(),
      mail(),
      asunto(),
      apellido(),
      fecha(),
      form.check.checked
    )
  }
})
