// c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43

const artistiPopolari = [13, 66, 7543848, 12246, 384236, 1188];
// array di artisti presi in modo casuale e messi come estensione del url per accedere alle top 50 canzoni
const indexArtists = [1, 2, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 25, 21, 22, 24, 26, 27, 28, 29, 30];
// array di album artista preferito (eminem)
const albumsArtistaPref = [103248, 119606, 7090505, 595243, 72000342, 125748];
// array di album consigliati per oggi
const albumsDiOggi = [400319947, 423368, 159826232, 194246202, 8178950, 273367132];
// array di album popolari
const albumsPopolari = [591398592, 581531012, 580186491, 554390622, 597941372, 560398332];
// array di album storici
const albumsStorici = [96126, 47131362, 12047952, 104660202, 96001912, 1262014];

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "163c72cf37msh7fb90cec4c02a73p1390b4jsn4594dd70494e",
    /* "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43", */
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

// funzione che crea le cards e viene chiamata nel fetch da dove prende come parametri la lista songs e il container dove verranno appese
const creaCards = (artist, container, index) => {
  const row = document.querySelector(container);
  // decido di creare 6 cards

  const col = this.document.createElement("div");
  col.className = "col-sm-6 col-md-4 col-lg-3 col-xl-2  border border-0  ";
  // col.addEventListener("click", () => {
  //   window.location.assign("./dettaglio.html?productId=" + songs[i]._id);
  // });
  const card = document.createElement("div");
  card.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard";
  card.addEventListener("click", (event) => {
    // window.location.assign("./ArtistaPage.html?artistId=" + artist.id);
  });
  const imgContainer = document.createElement("div");
  imgContainer.className = "position-relative ";

  const img = document.createElement("img");
  img.className = "bd-placeholder-img card-img-top object-fit-cover rounded-circle";
  img.setAttribute("src", artist.picture_big);
  const btnPlay = document.createElement("a");

  btnPlay.type = "button";
  btnPlay.setAttribute("style", "width: 50px; height:50px");
  // btnPlay.href = "./back-office.html?productId=" + songs.data[i]._id;
  btnPlay.className =
    "btn btn-success rounded-circle  position-absolute  bottom-0 end-0 me-2 mb-2 d-flex align-items-center justify-content-center d-none ";
  btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`;

  card.addEventListener("mouseover", ins, false);
  card.addEventListener("mouseout", out, false);
  function ins() {
    btnPlay.classList.remove("d-none");
  }
  function out() {
    btnPlay.classList.add("d-none");
  }
  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-start px-0 pb-0";
  const h5 = document.createElement("h5");
  h5.innerText = artist.name;
  h5.className = "fs-5 text-truncate ";
  const type = document.createElement("p");
  type.className = "text-secondary";
  type.innerText = artist.type;

  imgContainer.append(img, btnPlay);
  cardBody.append(h5, type);
  card.append(imgContainer, cardBody);
  col.append(card);
  row.append(col);

  // aggiungo classsi a cards specifiche grazie al index
  switch (index) {
    case 2:
      col.classList.add("d-none", "d-md-block");
      break;
    case 3:
      col.classList.add("d-none", "d-lg-block");
      break;
    case 4:
      col.classList.add("d-none", "d-xl-block");
      break;
    case 5:
      col.classList.add("d-none", "d-xl-block");
      break;
  }
};

// funzione che crea le colonne di cards (cambiando i parametri cambio canzoni e container dove appenderle)
const cardsArtist = (arrArtists, container) => {
  arrArtists.forEach((artist, index) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + artist, options)
      .then((resp) => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw `Errore ${resp.status} : ${resp.statusText} `;
        }
      })
      .then((artistResp) => {
        // creo cards con le canzoni del url inserito e le appendo al container dato come parametro
        creaCards(artistResp, container, index);
      })
      .catch((err) => alert(err));
  });
};

// funzione che crea gli album grazie ad un array di album dato come parametro e un contenitore dove appendere tutto
const cardsAlbum = (arrAlbums, container) => {
  arrAlbums.forEach((album, index) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + album, options)
      .then((resp) => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw `Errore ${resp.status} : ${resp.statusText} `;
        }
      })
      .then((album) => {
        // creo album con l'url inserito e le appendo al container dato come parametro

        const row = document.querySelector(container);

        const col = this.document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3 col-xl-2 border border-0";

        const card = document.createElement("div");

        card.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
        card.addEventListener("click", (event) => {
          window.location.assign("./AlbumPage.html?albumId=" + album.id);
        });

        const imgContainer = document.createElement("div");
        imgContainer.className = "position-relative  ";

        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top object-fit-cover ";
        img.setAttribute("src", album.cover_big);
        const btnPlay = document.createElement("a");
        btnPlay.type = "button";
        btnPlay.setAttribute("style", "width: 50px; height:50px");
        // btnPlay.href = "./back-office.html?productId=" + songs.data[i]._id;
        btnPlay.className =
          "btn btn-success btnPlay  rounded-circle   position-absolute  bottom-0 end-0 me-2 mb-2 d-flex align-items-center justify-content-center d-none ";
        btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`;

        card.addEventListener("mouseover", ins, false);
        card.addEventListener("mouseout", out, false);
        function ins() {
          btnPlay.classList.remove("d-none");
        }
        function out() {
          btnPlay.classList.add("d-none");
        }
        btnPlay.addEventListener("click", (event) => {
          window.location.assign("./home.html");

          // on click prende le informazioni del album o del artista e fa partire la prima canzone sulla barra play
        });

        const cardBody = document.createElement("div");
        cardBody.className = "card-body text-start px-0 pb-0";
        const h5 = document.createElement("h5");
        h5.innerText = album.title;
        h5.className = "fs-5 text-truncate ";
        const name = document.createElement("a");
        name.innerText = album.artist.name;
        name.className =
          "z-2 link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
        name.href = "./home.html?artistId=";
        // name.addEventListener("click", event => {
        //   console.log(event.target);
        //   // window.location.assign("./ArtistaPage.html?artistId=" + artist.id);
        // });

        imgContainer.append(img, btnPlay);
        cardBody.append(h5, name);
        card.append(imgContainer, cardBody);
        col.append(card);
        row.append(col);

        // aggiungo classsi a cards specifiche grazie al index
        switch (index) {
          case 2:
            col.classList.add("d-none", "d-md-block");
            break;
          case 3:
            col.classList.add("d-none", "d-lg-block");
            break;
          case 4:
            col.classList.add("d-none", "d-xl-block");
            break;
          case 5:
            col.classList.add("d-none", "d-xl-block");
            break;
        }
      })
      .catch((err) => alert(err));
  });
};
// all caricamento del DOM creo la card di annuncio
window.addEventListener("DOMContentLoaded", function () {
  randomArtist = Math.round(Math.random() * indexArtists.length);

  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + indexArtists[randomArtist] + "/top?limit=50", {
    method: "GET",
  })
    .then((resp) => {
      if (resp.ok) {
        // restituiamo il dato convertito in array da JSON
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then((artist) => {
      const annunci = document.getElementById("annunci");
      // dal array di canzoni prendo una a caso tra le prime 3 (non sappiamo se le top 50 canzoni sono veramente 50)
      const random = Math.round(Math.random() * 2);
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
      h2.style.maxWidth = "300px";

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
    .catch((err) => alert(err));

  cardsArtist(artistiPopolari, "#perTe");
  cardsAlbum(albumsArtistaPref, "#artistaPref");
  cardsAlbum(albumsDiOggi, "#perOggi");
  cardsAlbum(albumsPopolari, "#popolari");
  cardsAlbum(albumsStorici, "#mixPref");
});
