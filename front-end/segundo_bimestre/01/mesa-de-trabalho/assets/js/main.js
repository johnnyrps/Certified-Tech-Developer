
// Deixei um erro nessa função de sintaxe... Apenas um erro, juro!

function pegarTodosOsDadosDoFormulario(evento) {
    // Seleção de todo DOM do formulário;
    var formulario = evento.target;
    // Dados que o usuário colocou como e-mail.
    var dadosDoEmailDoUsuario = formulario.email;
    // Um alerta informando que o cadastro foi realizado com sucesso.
    alert(`O e-mail ${dadosDoEmailDoUsuario} foi cadastrado com sucesso!`);
    // Método para não atualizar a página após envio do formulário.
    evento.preventDefault();
  }
  
  
