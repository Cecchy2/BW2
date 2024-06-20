const urlQueen = "https://deezerdevs-deezer.p.rapidapi.com/search?q=queen";
const urlMilkyChance = "https://deezerdevs-deezer.p.rapidapi.com/search?q=milky%20chance";
const urlDonOmar = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Don%20Omar";
const urlNickyJam = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Nicky%20jam";
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0f032eb218mshe7b959267e60906p1d3878jsnde7092ae2254",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const listaBraniArtistiAlbum = document.getElementById("listaBraniArtistiAlbum");
const creaList = (song) => {
  for (let index = 0; index < 6; index++) {
    const element = song[index];
    const branoArtistaAlbum = document.createElement("li");
    const divImg = document.createElement("div");
    const imgBranoArtista = document.createElement("img");
    const titolo = document.createElement("h6");
    const nomeArtista = document.createElement("p");

    const divTitolo = document.createElement("div");

    imgBranoArtista.setAttribute("src", `${element.album.cover_small}`);
    imgBranoArtista.classList.add("object-fit-contain");
    titolo.innerText = `${element.title}`;
    titolo.classList.add("text-truncate");
    divImg.classList.add("d-flex", "alig-items-center", "mb-3");
    branoArtistaAlbum.classList.add("list-unstyled");
    nomeArtista.innerText = `${element.artist.name}`;
    nomeArtista.classList.add("m-0");
    divTitolo.classList.add("d-flex", "flex-column", "ms-3", "justify-content-center");

    divImg.appendChild(imgBranoArtista);

    branoArtistaAlbum.appendChild(divImg);
    divTitolo.appendChild(titolo);
    divTitolo.appendChild(nomeArtista);
    divImg.appendChild(divTitolo);
    listaBraniArtistiAlbum.appendChild(branoArtistaAlbum);
  }
};
window.addEventListener("DOMContentLoaded", () => {
  fetch(urlMilkyChance, options2)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then((songs) => {
      console.log(songs);
      creaList(songs.data);
    })
    .catch((err) => alert(err));
  fetch(urlQueen, options2)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then((songs) => {
      console.log(songs);
      creaList(songs.data);
    })
    .catch((err) => alert(err));
  fetch(urlDonOmar, options2)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then((songs) => {
      console.log(songs);
      creaList(songs.data);
    })
    .catch((err) => alert(err));
  fetch(urlNickyJam, options2)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then((songs) => {
      console.log(songs);
      creaList(songs.data);
    })
    .catch((err) => alert(err));
});

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  window.location.assign("./home.html");
});
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  const searchDisable = document.getElementById("searchDisable");
  const searchActivate = document.getElementById("searchActivate");
  const formSearch = document.getElementById("formSearch");
  if (formSearch.classList.contains("d-none")) {
    searchDisable.classList.add("d-none");
    searchActivate.classList.remove("d-none");
    formSearch.classList.remove("d-none");
    searchInput.focus(); // Attiva il focus sull'input
  } else {
    searchDisable.classList.remove("d-none");
    searchActivate.classList.add("d-none");
    formSearch.classList.add("d-none");
  }
});
