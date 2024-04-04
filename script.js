const key = "29a2e5bcfd8ebe6895c800fc025fa3c5"

function dadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

  console.log(dados)
}

async function buscarCidade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())
    dadosNaTela(dados)
}

function busca() {
  const cidade = document.querySelector(".input-cidade").value

  buscarCidade(cidade)
}