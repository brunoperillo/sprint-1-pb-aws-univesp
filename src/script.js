const mensagemSubmit = document.getElementById("mensagem");
const submit = {
  nome: '',
  email: '',
  telefone: ''
}


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
  
    const mensagemElement = document.getElementById("mensagem");
    if (resultado === true) {
      mensagemElement.textContent = "Telefone válido.";
    } else {
      mensagemElement.textContent = resultado;
    }
  }
  
  class ValidadorTelefone {
    constructor(telefone) {
      this.telefone = telefone;
    }
  
    validar() {
      const regex = /^\(\d{2}\)\d{4}-\d{4}$/; // regex para verificar se o telefone está no formato correto
      if (!regex.test(this.telefone)) {
        return "Telefone inválido. O formato deve ser (NN)NNNN-NNNN.";
      }
      return this.telefone;
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
  
  
  
  
  