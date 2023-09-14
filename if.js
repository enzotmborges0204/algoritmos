const usuarioRegistrado = true;
const senhaCorreta = true;

if (usuarioRegistrado) {
  if (senhaCorreta) {
    console.log("Login bem-sucedido. Bem-vindo!");
  } else {
    console.log("Senha incorreta. Tente novamente.");
  }
} else {
  console.log("Usuário não encontrado. Registre-se primeiro.");
}
