function checkPassword(){
  let pass = document.getElementById("pwd").value
  let repeated = document.getElementById("pwdR").value
  let checker = "******"
  if (pass.length < checker.length ){
    document.getElementById("short").style.display="inline"
  }else{
    document.getElementById("short").style.display="none"
  }
  if (pass !== repeated){
    document.getElementById("identical").style.display="inline"
  }else{
    document.getElementById("identical").style.display="none"
  }
  if (pass.length >= checker.length && pass === repeated ){
    document.getElementById("submit").style.display="inline";
    document.getElementById("submit").disabled=false;
  }
}