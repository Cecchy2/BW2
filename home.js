const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=fabrifibra";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(url, options)
  .then(resp => {
    if (resp.ok) {
      // restituiamo il dato convertito in array da JSON
      return resp.json();
    } else {
      throw `Errore ${resp.status} : ${resp.statusText} `;
    }
  })
  .then(songs => {
    console.log(songs);
  })
  .catch(err => alert(err));
