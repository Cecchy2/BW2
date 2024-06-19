const authKey = "1bf979bf4cmsh3a580f854a77993p1355dajsn876a815ada14";
const searchBar = document.getElementById("searchBar");
const artistBanner = document.getElementById("artistBanner");

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "1bf979bf4cmsh3a580f854a77993p1355dajsn876a815ada14",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

window.addEventListener("DOMContentLoaded", function () {
  //   const artistName = searchBar.value;

  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", options)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else console.log("Errore nel caricamento dei dati");
    })
    .then(artists => {
      console.log(artists.data);
      const banner = document.createElement("img");
      banner.className = "img-fluid w-100";
      banner.style.maxHeight = "20vh";
      banner.setAttribute("src", artists.data.picture_xl);
      artistBanner.appendChild(banner);
      artists.data.forEach(artist => {});
    })
    .catch(err => console.log(err));
});
