const authKey = "1bf979bf4cmsh3a580f854a77993p1355dajsn876a815ada14";
const searchBar = document.getElementById("searchBar");
const artistBanner = document.getElementById("artistBanner");
const id = new URLSearchParams(window.location.search).get("artist");
const songsList = document.getElementById("songsList");
const containerList = document.getElementById("containerList");
const likedSongs = document.getElementById("likedSongs");

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "1bf979bf4cmsh3a580f854a77993p1355dajsn876a815ada14",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const getMinutes = duration => {
  seconds = duration % 60;
  minutes = ((duration - seconds) / 60) % 60;
  return minutes + ":" + seconds;
};

const handlelikedSongs = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/412", options)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else console.log(`Error ${resp.status}`);
    })
    .then(artist => {
      console.log(artist);
      const row = document.createElement("div");
      row.className = "row";
      likedSongs.appendChild(row);
      const colImg = document.createElement("div");
      colImg.className = "col-12 col-xl-2 px-0";
      row.appendChild(colImg);
      const artistImg = document.createElement("img");
      artistImg.className = "rounded-circle img-fluid";
      artistImg.src = artist.picture_big;
      artistImg.style = "width: 70px; heigth: 70px;";
      colImg.appendChild(artistImg);
      const colDescritpion = document.createElement("div");
      colDescritpion.className = "col-12 col-xl-10 pe-0";
      row.appendChild(colDescritpion);
      const likeCounter = document.createElement("p");
      likeCounter.className = "mb-0";
      likeCounter.innerText = "Hai messo Mi piace a 11 brani";
      colDescritpion.appendChild(likeCounter);
      const artistTag = document.createElement("small");
      artistTag.className = "text-secondary";
      artistTag.innerText = `Di ${artist.name}`;
      colDescritpion.appendChild(artistTag);
    })
    .catch(err => console.log(err));
};

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
      artistBanner.classList.add(
        "d-flex",
        "position-relative",
        "flex-column",
        "justify-content-start",
        "align-items-end"
      );
      const banner = document.createElement("img");
      banner.src = artist.picture_xl;
      banner.className = " img-fluid w-100 opacity-25 overflow-hidden";
      banner.setAttribute("style", "object-fit: fill;");
      banner.style.maxHeight = "40vh";
      artistBanner.appendChild(banner);
      artistName.className = "h1 mb-0 ms-3 position-absolute z-1 top-50 start-0"; // da capire
      artistName.setAttribute("style", "font-size: 80px;");
      artistName.innerText = artist.name;
      artistBanner.appendChild(artistName);
      // artistBanner.style.backgroundImage = `url(${artist.picture_xl})`;
      // artistBanner.style.backgroundPosition = `75% 25%`;
      // artistBanner.style.backgroundSize = `cover`;
      const verifiedArtist = document.getElementById("verifiedArtist");
      const verified = document.createElement("p");
      verified.className = " align-middle mb-0 ms-4 z-1 position-absolute bottom-50 start-0";
      verified.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi text-primary bi-patch-check-fill" viewBox="0 0 16 16">
<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg> <span>Artista Verificato</span>`;
      artistBanner.appendChild(verified);
      const listener = document.createElement("p");
      listener.className = "aling-middle ms-4 mb-3 position-absolute bottom-0 start-0 z-1";
      listener.innerText = "34.576.898 Ascoltatori Mensili";
      artistBanner.appendChild(listener);
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
  handlelikedSongs();
});
