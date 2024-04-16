
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("miderson gosta do?");

    
  if (respostaTime.toLowerCase() === "PARANA CLUB") {
      alert("sim e o parana  club")
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("tente na proxima!!!");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
