// Declaração de uma variável booleana 'usuarioRegistrado' com o valor 'true',
// indicando que um usuário está registrado.
const usuarioRegistrado = true;

// Declaração de uma variável booleana 'senhaCorreta' com o valor 'true',
// indicando que a senha inserida está correta.
const senhaCorreta = true;

// Verifica se o usuário está registrado.
if (usuarioRegistrado) {
  // Se o usuário estiver registrado, verifica se a senha está correta.
  if (senhaCorreta) {
    // Se o usuário estiver registrado e a senha estiver correta, exibe a mensagem de login bem-sucedido.
    console.log("Login bem-sucedido. Bem-vindo!");
  } else {
    // Se o usuário estiver registrado, mas a senha estiver incorreta, exibe a mensagem de senha incorreta.
    console.log("Senha incorreta. Tente novamente.");
  }
} else {
  // Se o usuário não estiver registrado, exibe a mensagem de que o usuário não foi encontrado e sugere o registro.
  console.log("Usuário não encontrado. Registre-se primeiro.");
}
