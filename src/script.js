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
  
  
  
  
  