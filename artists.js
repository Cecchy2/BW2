const authKey = "1bf979bf4cmsh3a580f854a77993p1355dajsn876a815ada14";
const searchBar = document.getElementById("searchBar");
const artistBanner = document.getElementById("artistBanner");
const id = new URLSearchParams(window.location.search).get("artist");
const songsList = document.getElementById("songsList");
const containerList = document.getElementById("containerList");

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "1bf979bf4cmsh3a580f854a77993p1355dajsn876a815ada14",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

function getMinutes(duration) {
  seconds = duration % 60;
  minutes = ((duration - seconds) / 60) % 60;
  return minutes + ":" + seconds;
}

const createBanner = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/412", options)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else console.log("Errore nel caricamento dei dati");
    })
    .then(artist => {
      const artistTitle = document.getElementById("artistTitle");
      const artistName = document.createElement("h1");
      artistBanner.classList.add("d-flex", "flex-column", "justify-content-start", "align-items-end");
      artistName.className = "h1 mt-auto";
      artistName.setAttribute("style", "font-size: 80px;");
      artistName.innerText = artist.name;
      artistTitle.appendChild(artistName);
      artistBanner.style.minHeight = "40vh";
      artistBanner.style.opacity = "0.5";
      artistBanner.style.backgroundImage = `url(${artist.picture_xl})`;
      artistBanner.style.backgroundPosition = `75% 25%`;
      artistBanner.style.backgroundSize = `cover`;
      const verifiedArtist = document.getElementById("verifiedArtist");
      verifiedArtist.classList.add("d-block", "align-middle", "opacity-100");
      verifiedArtist.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi text-primary bi-patch-check-fill" viewBox="0 0 16 16">
<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg> <span>Artista Verificato</span>`;
    });
};

const createSongList = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=5", options)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else console.log("Errore nel caricamento dei dati");
    })
    .then(artists => {
      artists.data.forEach((art, index) => {
        const songsList = document.getElementById("songsList");
        const col = document.createElement("div");
        col.className = "col-6";

        songsList.appendChild(col);
        const songRow = document.createElement("div");
        songRow.className = "d-flex align-items-center mb-4";
        col.appendChild(songRow);
        const songNumber = document.createElement("p");
        songNumber.className = "text-secondary p-2 decoration-none px-2 m-0";

        songNumber.innerText = index + 1;
        songRow.appendChild(songNumber);
        const songImg = document.createElement("img");
        songImg.className = "ms-3";
        songImg.style = "width: 50px; heigth: 50px";
        songImg.src = art.album.cover;
        songRow.appendChild(songImg);

        const songTitle = document.createElement("h6");
        songTitle.className = "ps-3";
        songTitle.style = "font-size: 0.9rem";
        songTitle.innerText = art.title;
        songRow.appendChild(songTitle);

        const col2 = document.createElement("div");
        col2.className = "col-2 ms-auto";
        songsList.appendChild(col2);
        const views = document.createElement("p");
        views.className = "text-secondary p-2 ms-auto";
        views.innerText = "3.476.989.876";
        col2.appendChild(views);

        const col3 = document.createElement("div");
        col3.className = "col-2 ms-auto";
        songsList.appendChild(col3);
        const minutes = document.createElement("p");
        minutes.className = "text-secondary p-2 ms-auto";
        minutes.innerText = getMinutes(art.duration);
        col3.appendChild(minutes);

        const viewsCont = document.getElementById("viewsCont");
      });
    })
    .catch(err => console.log(err));
};

window.addEventListener("DOMContentLoaded", function () {
  createBanner();
  createSongList();
});
