const urlFabriFibra = "https://deezerdevs-deezer.p.rapidapi.com/search?q=greendays";
const urlEminem = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
const urltImagineDragons = "https://deezerdevs-deezer.p.rapidapi.com/search?q=imagine%20dragons";
const urlPopolari = "https://deezerdevs-deezer.p.rapidapi.com/search?q=popolari";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const creaCards = (songs, container) => {
  const row = document.querySelector(container);

  for (let i = 0; i < 6; i++) {
    const col = this.document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-dark border border-0 conteniroteCard";
    // col.addEventListener("click", () => {
    //   window.location.assign("./dettaglio.html?productId=" + songs[i]._id);
    // });
    const card = document.createElement("div");
    card.className = "btn btn-secondary card mb-4  border border-0";
    const imgContainer = document.createElement("div");
    imgContainer.className = "position-relative ";

    const img = document.createElement("img");
    img.className = "bd-placeholder-img card-img-top object-fit-cover";
    img.setAttribute("src", songs.data[i].album.cover_big);
    const btnPlay = document.createElement("a");
    btnPlay.type = "button";
    btnPlay.setAttribute("style", "width: 50px; height:50px");
    // btnPlay.href = "./back-office.html?productId=" + songs.data[i]._id;
    btnPlay.className = "btn btn-success rounded-circle  position-absolute  bottom-0 end-0 me-2 mb-2 d-flex align-items-center justify-content-center d-none ";
    btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`;

    btnPlay.id = "btnPlay";
    card.addEventListener("mouseover", ins, false);
    card.addEventListener("mouseout", out, false);
    function ins() {
      btnPlay.classList.remove("d-none");
    }
    function out() {
      btnPlay.classList.add("d-none");
    }
    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-start px-0";
    const h5 = document.createElement("h5");
    h5.innerText = songs.data[i].title;
    h5.className = "fs-5 text-truncate ";
    const name = document.createElement("p");
    name.innerText = songs.data[i].artist.name;

    imgContainer.append(img, btnPlay);
    cardBody.append(h5, name);
    card.append(imgContainer, cardBody);
    col.append(card);
    row.append(col);
  }
  const cards = [...document.querySelectorAll(".conteniroteCard")];
  cards[5].classList.add("d-lg-none", "d-xl-block");
  cards[4].classList.add("d-lg-none", "d-xl-block");
};
window.addEventListener("DOMContentLoaded", function () {
  const indexArtists = [1, 2, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 25, 21, 22, 24, 26, 27, 28, 29, 30];

  randomArtist = Math.round(Math.random() * indexArtists.length);

  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + indexArtists[randomArtist] + "/top?limit=50", {
    method: "GET",
  })
    .then(resp => {
      if (resp.ok) {
        // restituiamo il dato convertito in array da JSON
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(artist => {
      const annunci = document.getElementById("annunci");

      const random = Math.round(Math.random() * 1);
      const song = artist.data[random];

      const imgAnnunci = document.getElementById("imgAnnunci");
      imgAnnunci.setAttribute("src", song.album.cover_big);

      const infoAnnunci = document.createElement("div");
      infoAnnunci.setAttribute("data-bs-theme", "dark");
      const spanAnnunci = document.createElement("span");
      spanAnnunci.innerText = song.album.type;
      spanAnnunci.className = "fs-6";
      const h2 = document.createElement("h2");
      h2.innerText = song.title;
      h2.className = "text-truncate";
      h2.style.maxWidth = "400px";

      const p1 = document.createElement("p");
      p1.innerText = song.artist.name;
      const p2 = document.createElement("p");
      p2.innerText = song.album.title;
      const containerBtn = document.createElement("div");
      containerBtn.className = "d-flex";
      const buttonPlay = document.createElement("button");
      buttonPlay.innerText = "Play";
      buttonPlay.className = "btn btn-success text-black rounded-pill px-4 me-4";
      const buttonSalva = document.createElement("button");
      buttonSalva.innerText = "Salva";
      buttonSalva.className = "btn btn-outline-light rounded-pill  px-4 me-4";
      const buttonSettings = document.createElement("button");
      buttonSettings.innerText = ". . .";
      buttonSettings.className = "btn px-4 ";
      containerBtn.append(buttonPlay, buttonSalva, buttonSettings);
      infoAnnunci.append(spanAnnunci, h2, p1, p2, containerBtn);
      annunci.appendChild(infoAnnunci);
    })
    .catch(err => alert(err));
});
fetch(urlFabriFibra, options)
  .then(resp => {
    if (resp.ok) {
      // restituiamo il dato convertito in array da JSON
      return resp.json();
    } else {
      throw `Errore ${resp.status} : ${resp.statusText} `;
    }
  })
  .then(songs => {
    creaCards(songs, "#perTe");
  })
  .catch(err => alert(err));
fetch(urlEminem, options)
  .then(resp => {
    if (resp.ok) {
      // restituiamo il dato convertito in array da JSON
      return resp.json();
    } else {
      throw `Errore ${resp.status} : ${resp.statusText} `;
    }
  })
  .then(songs => {
    creaCards(songs, "#perOggi");
  })
  .catch(err => alert(err));
fetch(urlPopolari, options)
  .then(resp => {
    if (resp.ok) {
      // restituiamo il dato convertito in array da JSON
      return resp.json();
    } else {
      throw `Errore ${resp.status} : ${resp.statusText} `;
    }
  })
  .then(songs => {
    creaCards(songs, "#popolari");
  })
  .catch(err => alert(err));
fetch(urltImagineDragons, options)
  .then(resp => {
    if (resp.ok) {
      // restituiamo il dato convertito in array da JSON
      return resp.json();
    } else {
      throw `Errore ${resp.status} : ${resp.statusText} `;
    }
  })
  .then(songs => {
    creaCards(songs, "#mixPref");
  })
  .catch(err => alert(err));
