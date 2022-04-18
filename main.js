
document.querySelector("button").onclick = () => {
  fetch("https://api.kanye.rest/").then(
    function (frase) {
      return frase.json()
    }
  ).then(
    function (res) {
      let tbody = document.querySelector("#frases")
      let tr = document.createElement("tr")
      let tdFrases = document.createElement("td")
      tdFrases.append(
        document.createTextNode(res.quote)
      )
      tr.append(tdFrases)
      tbody.append(tr)

    }
  );
}

