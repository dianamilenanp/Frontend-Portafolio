import { valida } from "./validaciones.js";
import { validatextarea } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textareacontacto = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});



textareacontacto.addEventListener("blur", (textareacontacto) => {
  validatextarea(textareacontacto.target);
});

