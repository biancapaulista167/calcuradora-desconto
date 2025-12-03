document.getElementById("calcular").addEventListener("click", function() {
  const valor = parseFloat(document.getElementById("valor").value);
  const pagamento = document.getElementById("pagamento").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = "Digite um valor válido!";
    resultado.className = "neutro";
    return;
  }

  let valorFinal = valor;
  let tipo = "";

  if (pagamento === "avista") {
    valorFinal = valor * 0.9;
    tipo = "desconto";
  } else if (pagamento === "credito") {
    valorFinal = valor * 1.05;
    tipo = "acrescimo";
  } else if (pagamento === "3x") {
    valorFinal = valor * 1.1;
    tipo = "acrescimo";
  } else {
    tipo = "neutro";
  }

  resultado.textContent = `Valor final: R$ ${valorFinal.toFixed(2)}`;
  resultado.className = tipo;
});