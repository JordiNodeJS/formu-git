export default (booleano, msg, [campo, mostra]) => {
  if (!booleano) {
    campo.classList.add('is-invalid')
    mostra.classList.add('text-danger')
    mostra.classList.remove('text-muted')
    mostra.classList.remove('text-success')
    mostra.textContent = msg
  } else {
    campo.classList.remove('is-invalid')
    mostra.classList.remove('text-danger')
    mostra.classList.add('text-success')
    mostra.textContent = msg
  }
}
