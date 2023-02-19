const mensagemSubmit = document.getElementById("mensagem");
const submit = {
  nome: '',
  email: '',
  telefone: ''
}

// Validação de E-mail
function validarEmail() {
  const email = document.getElementById("email").value;
  const validador = new ValidadorEmail(email);
  const resultado = validador.validar();

  const mensagemElement = document.getElementById("erroEmail");
  mensagemSubmit.textContent = "";
  mensagemElement.textContent = "";
  if (!resultado) {
    mensagemElement.textContent = "E-mail inválido. O formato deve ser example@example.com";
  } else {
    submit.email = email;
    if (estaPreenchido())
      document.getElementById('botao-submit').disabled = false;
  }
}



// Validação de Telefone
function validarTelefone() {
  const telefone = document.getElementById("telefone").value;
  const validador = new ValidadorTelefone(telefone);
  const resultado = validador.validar();

  const mensagemElement = document.getElementById("erroTelefone");
  mensagemSubmit.textContent = "";
  mensagemElement.textContent = "";
  if (!resultado) {
    mensagemElement.textContent = "Telefone inválido. O formato deve ser (NN)NNNN-NNNN.";
  } else {
    submit.telefone = telefone;
    if (estaPreenchido())
      document.getElementById('botao-submit').disabled = false;
  }
}
  
class ValidadorTelefone {
  constructor(telefone) {
    this.telefone = telefone;
  }

  validar() {
    const regex = /^\(\d{2}\)\d{4}-\d{4}$/; // regex para verificar se o telefone está no formato correto
    if (!regex.test(this.telefone)) {
      return false
    }
    return true
  }
}
class ValidadorEmail {
  constructor(email) {
    this.email = email;
  }

  validar() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(this.email)) {
      return false
    }
    return true;
  }
}

function estaPreenchido() {
  if (submit.nome && submit.email && submit.telefone) {
    return true;
  }
  return false
}

document.getElementById("telefone").addEventListener("keyup", (e) => {
  //(NN)NNNN-NNNN
  const key = e.target.value;
  if (key.length === 1)
    e.target.value = `(${key}`

  if (key.length === 3)
    e.target.value = `(${key.substring(1, 3)})`

  if (key.length >= 8)
    e.target.value = `(${key.substring(1, 3)})${key.substring(4, 8)}-${key.substring(9)}`
});

document.getElementById("botao-submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (estaPreenchido()) {
    mensagemSubmit.innerText = `Nome: ${submit.nome}\n 
      E-mail: ${submit.email}\n 
      Telefone: ${submit.telefone}\n`;
  }

});
  
//Chamadas de validação
const nome = "";
const email = "";
const telefone = "";

const regexNome = /^[a-zA-Zà-úÀ-Ú]+(([',. -][a-zA-Zà-úÀ-Ú ])?[a-zA-Zà-úÀ-Ú]*)*$/;
const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexTelefone = /^\(\d{2}\) \d{4}-\d{4}$/;

if (!regexNome.test(nome)) {
  console.log("Nome inválido.");
} else {
  console.log("Nome válido.");
}

if (!regexEmail.test(email)) {
  console.log("E-mail inválido.");
} else {
  console.log("E-mail válido.");
}
if (!regexTelefone.test(telefone)) {
  console.log("Telefone inválido.");
} else {
  console.log("Telefone válido.");
}

  
  
  