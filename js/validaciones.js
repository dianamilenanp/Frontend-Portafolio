export function valida(input) {
  const tipoDeInput = input.dataset.tipo;


  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
  },
};


function mostrarMensajeDeError(tipoDeElemento, elemento) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (elemento.validity[error]) {
      console.log(tipoDeElemento, error);
      console.log(elemento.validity[error]);
      console.log(mensajesDeError[tipoDeElemento][error]);
      mensaje = mensajesDeError[tipoDeElemento][error];
    }
  });
  return mensaje;
}


export function validatextarea(textarea) {
  const tipoDeElem = textarea.dataset.tipo;


  if (textarea.validity.valid) {
    textarea.parentElement.classList.remove("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-mensagem-erro").innerHTML = "";
  } else {
    textarea.parentElement.classList.add("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-mensagem-erro").innerHTML =
      mostrarMensajeDeError(tipoDeElem, textarea);
  }
}
