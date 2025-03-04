function comprar(){
  let name = document.getElementById("nome").value
  let sobrenome = document.getElementById("last").value
  let email = document.getElementById("email").value
  let senha = document.getElementById("senha").value

  function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

  if( name.trim() === ""){
    document.getElementById("nome").style.border = "1px solid red"
    alert("Por favor coloque seu nome")
    return
  }else{
      document.getElementById("nome").style.border = "";
    }
  if(sobrenome.trim() === ""){
    document.getElementById("last").style.border = "1px solid red"
    alert("Por favor coloque seu sobrenome")
    return
  }else{
      document.getElementById("last").style.border = "";
    }
  if(email.trim() === ""){
    document.getElementById("email").style.border = "1px solid red"
    alert("por favor coloque seu email")
    return
  }else{
    document.getElementById("email").style.border = "";
  }
  if(senha.trim() === ""){
    document.getElementById("senha").style.border = "1px solid red"
    alert("por favor coloque uma senha")
    return
  }else{
    document.getElementById("senha").style.border = "";
  }

  if (!validarEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }else{
    document.getElementById("last").style.border = "";
  }

  console.log("DADOS DE CADASTRO")
  console.log(`nome: ${name}`)
  console.log(`sobrenome: ${sobrenome}`)
  console.log(`Email: ${email}`)
  console.log(`senha: ${senha}` )

alert("Conta criada com sucesso, parabens")
}
