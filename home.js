// c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43

const artistiPopolari = [13, 66, 7543848, 12246, 384236, 1188];
// array di artisti presi in modo casuale e messi come estensione del url per accedere alle top 50 canzoni
// const indexArtists = [1, 2, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 25, 21, 22, 24, 26, 27, 28, 29, 30];
const albumAnnunci = [
  400319947, 108938, 423368, 159826232, 10613684, 194246202, 8178950, 273367132, 591398592, 9410100, 303950837, 581531012, 580186491, 554390622, 597941372, 560398332, 6240279, 96126, 47131362,
  12047952, 104660202, 96001912, 1262014, 299484812,
];
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
    "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43",
    /* "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43", dfd3925d0amshafe029754eb961ap17f037jsn18e065c48a37, 163c72cf37msh7fb90cec4c02a73p1390b4jsn4594dd70494e*/
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
// funzione che crea le cards e viene chiamata nel fetch da dove prende come parametri la lista songs e il container dove verranno appese
const creaCards = (artist, container, index) => {
  const arrayArtist = artist;
  console.log(arrayArtist);
  const row = document.querySelector(container);

  const col = this.document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2   border border-0  ";

  const card = document.createElement("div");
  card.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard";

  const imgContainer = document.createElement("div");
  imgContainer.className = "position-relative ";

  const img = document.createElement("img");
  img.className = "bd-placeholder-img card-img-top object-fit-cover rounded-circle";
  img.setAttribute("src", artist.picture_big);
  img.addEventListener("click", event => {
    window.location.assign("./artists.html?artistId=" + artist.id);
  });

  const btnPlay = document.createElement("a");
  btnPlay.type = "button";
  btnPlay.setAttribute("style", "width: 50px; height:50px");
  // btnPlay.href = "./back-office.html?productId=" + songs.data[i]._id;
  btnPlay.className = "btn btn-success rounded-circle  position-absolute  bottom-0 end-0 me-2 mb-2 d-flex align-items-center justify-content-center d-none ";
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

  btnPlay.addEventListener("click", event => {
    console.log("Button clicked");
    console.log(arrayArtist);
    const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
    const footerTitolo = document.getElementById("footerTitolo");
    const footerArtista = document.getElementById("footerArtista");
    const image = document.createElement("img");
    const h5 = document.createElement("h5");
    if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
      imgArtistaAlbum.innerHTML = "";
      footerTitolo.innerHTML = "";
      footerArtista.innerHTML = "";
      image.src = arrayArtist.picture_small;
      imgArtistaAlbum.appendChild(image);
      footerTitolo.appendChild(h5);
      imgArtistaAlbum.classList.add("me-2");
      h5.innerText = arrayArtist.name;
      h5.className = "text-truncate";
      h5.style.maxWidth = "250px";
      footerArtista.innerText = arrayArtist.type;
    } else {
      image.src = arrayArtist.picture_small;
      imgArtistaAlbum.appendChild(image);
      footerTitolo.appendChild(h5);
      imgArtistaAlbum.classList.add("me-2");
      h5.innerText = arrayArtist.title;
      h5.className = "text-truncate";
      h5.style.maxWidth = "250px";
      footerArtista.innerText = arrayArtist.artist.name;
    }
    const aside = document.getElementById("asideContainer");
    aside.innerHTML = "";
    const asideArtistCard = artist => {
      const asideCol = this.document.createElement("div");
      asideCol.className = "col-12 border border-0";
      const asideCard = document.createElement("div");
      asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
      const asideImgContainer = document.createElement("div");
      const asideImg = document.createElement("img");
      asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
      asideImg.setAttribute("src", artist.picture_big);
      asideImg.addEventListener("click", event => {
        window.location.assign("./artists.html?artistId=" + artist.id);
      });
      const asideCardBody = document.createElement("div");
      asideCardBody.className = "card-body text-start px-0 pb-0";
      const asideH5 = document.createElement("h5");
      asideH5.innerText = artist.name;
      asideH5.className = "fs-5 text-truncate text-white";
      asideH5.addEventListener("click", event => {
        window.location.assign("./artists.html?artistId=" + artist.id);
      });
      const asideGenres = document.createElement("a");
      asideGenres.innerText = artist.type;
      asideGenres.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";

      asideImgContainer.append(asideImg);
      asideCardBody.append(asideH5, asideGenres);
      asideCard.append(asideImgContainer, asideCardBody);
      asideCol.append(asideCard);
      aside.append(asideCol);
    };
    asideArtistCard(artist);
  });

  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-start px-0 pb-0";
  const h5 = document.createElement("h5");
  h5.innerText = artist.name;
  h5.className = "fs-5 text-truncate ";
  h5.addEventListener("click", event => {
    window.location.assign("./artists.html?artistId=" + artist.id);
  });
  const type = document.createElement("p");
  type.className = "text-secondary";
  type.innerText = artist.type;

  imgContainer.append(img, btnPlay);
  cardBody.append(h5, type);
  card.append(imgContainer, cardBody);
  col.append(card);
  row.appendChild(col);

  // aggiungo classsi a cards specifiche grazie al index col-lg-4 col-xl-3 col-xxl-2
  switch (index) {
    case 1:
      col.classList.add("d-none", "d-md-block");
      break;
    case 2:
      col.classList.add("d-none", "d-lg-block");
      break;
    case 3:
      col.classList.add("d-none", "d-xl-block");
      break;
    case 4:
      col.classList.add("d-none", "d-xxl-block");
      break;
    case 5:
      col.classList.add("d-none", "d-xxl-block");
      break;
  }
};

// funzione che crea le colonne di cards (cambiando i parametri cambio canzoni e container dove appenderle)
const cardsArtist = (arrArtists, container) => {
  arrArtists.forEach((artist, index) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + artist, options)
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw `Errore ${resp.status} : ${resp.statusText} `;
        }
      })
      .then(artistResp => {
        // creo cards con le canzoni del url inserito e le appendo al container dato come parametro
        creaCards(artistResp, container, index);
      })
      .catch(err => alert(err));
  });
};

//funzione che crea l'album card***************************************************
const creaAlbum = (album, container, index) => {
  const moTifrego = album;
  const row = document.querySelector(container);

  const col = this.document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 border border-0";

  const card = document.createElement("div");

  card.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";

  const imgContainer = document.createElement("div");
  imgContainer.className = "position-relative  ";

  const img = document.createElement("img");
  img.className = "bd-placeholder-img card-img-top object-fit-cover ";
  img.setAttribute("src", album.cover_big);
  img.addEventListener("click", event => {
    window.location.assign("./AlbumPage.html?albumId=" + album.id);
  });
  const btnPlay = document.createElement("a");
  btnPlay.type = "button";
  btnPlay.setAttribute("style", "width: 50px; height:50px");
  // btnPlay.href = "./back-office.html?productId=" + songs.data[i]._id;
  btnPlay.className = "btn btn-success btnPlay  rounded-circle   position-absolute  bottom-0 end-0 me-2 mb-2 d-flex align-items-center justify-content-center d-none ";
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
  btnPlay.addEventListener("click", event => {
    console.log("Button clicked");
    console.log(moTifrego);
    const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
    const footerTitolo = document.getElementById("footerTitolo");
    const footerArtista = document.getElementById("footerArtista");
    const image = document.createElement("img");
    const h5 = document.createElement("h5");
    if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
      const indexPazzo = Math.floor(Math.random() * 16);
      imgArtistaAlbum.innerHTML = "";
      footerTitolo.innerHTML = "";
      footerArtista.innerHTML = "";
      image.src = moTifrego.cover_small;
      imgArtistaAlbum.appendChild(image);
      footerTitolo.appendChild(h5);
      imgArtistaAlbum.classList.add("me-2");
      h5.innerText = moTifrego.tracks.data[indexPazzo].title;
      h5.className = "text-truncate";
      h5.style.maxWidth = "250px";
      footerArtista.innerText = moTifrego.artist.name;
    } else {
      const indexPazzo = Math.floor(Math.random() * 16);
      image.src = moTifrego.cover_small;
      imgArtistaAlbum.appendChild(image);
      footerTitolo.appendChild(h5);
      imgArtistaAlbum.classList.add("me-2");
      h5.innerText = moTifrego.tracks.data[indexPazzo].title;
      h5.className = "text-truncate";
      h5.style.maxWidth = "250px";
      footerArtista.innerText = moTifrego.artist.name;
    }

    // ***************************creazione album card e info aside bar***************************

    const aside = document.getElementById("asideContainer");
    aside.innerHTML = "";
    const asideAlbumCard = album => {
      const asideCol = this.document.createElement("div");
      asideCol.className = "col-12 border border-0";
      const asideCard = document.createElement("div");
      asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
      const asideImgContainer = document.createElement("div");
      const asideImg = document.createElement("img");
      asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
      asideImg.setAttribute("src", album.cover_big);
      asideImg.addEventListener("click", event => {
        window.location.assign("./AlbumPage.html?albumId=" + album.id);
      });
      const asideCardBody = document.createElement("div");
      asideCardBody.className = "card-body text-start px-0 pb-0";
      const asideH5 = document.createElement("h5");
      asideH5.innerText = album.title;
      asideH5.className = "fs-5 text-truncate text-white";
      asideH5.addEventListener("click", event => {
        window.location.assign("./AlbumPage.html?albumId=" + album.id);
      });
      const asideName = document.createElement("a");
      asideName.innerText = album.artist.name;
      asideName.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
      asideName.href = "./artists.html?artistId=" + album.artist.id;

      asideImgContainer.append(asideImg);
      asideCardBody.append(asideH5, asideName);
      asideCard.append(asideImgContainer, asideCardBody);
      asideCol.append(asideCard);
      aside.append(asideCol);
    };
    asideAlbumCard(album);

    // ***************************creazione artist card e info aside bar***************************
    const asideArtistCard = album => {
      const asideCol = this.document.createElement("div");
      asideCol.className = "col-12 border border-0";
      const asideCard = document.createElement("div");
      asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
      const asideImgContainer = document.createElement("div");
      const asideImg = document.createElement("img");
      asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
      asideImg.setAttribute("src", album.artist.picture_big);
      asideImg.addEventListener("click", event => {
        window.location.assign("./artists.html?artistId=" + album.artist.id);
      });
      const asideCardBody = document.createElement("div");
      asideCardBody.className = "card-body text-start px-0 pb-0";
      const asideH5 = document.createElement("h5");
      asideH5.innerText = album.artist.name;
      asideH5.className = "fs-5 text-truncate text-white";
      asideH5.addEventListener("click", event => {
        window.location.assign("./artists.html?artistId=" + album.artist.id);
      });
      const asideGenres = document.createElement("a");
      asideGenres.innerText = album.genres.data[0].name;
      asideGenres.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";

      asideImgContainer.append(asideImg);
      asideCardBody.append(asideH5, asideGenres);
      asideCard.append(asideImgContainer, asideCardBody);
      asideCol.append(asideCard);
      aside.append(asideCol);
    };
    asideArtistCard(album);
  });
  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-start px-0 pb-0";
  const h5 = document.createElement("h5");
  h5.innerText = album.title;
  h5.className = "fs-5 text-truncate ";
  h5.addEventListener("click", event => {
    window.location.assign("./AlbumPage.html?albumId=" + album.id);
  });
  const name = document.createElement("a");
  name.innerText = album.artist.name;
  name.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
  name.href = "./artists.html?artistId=" + album.artist.id;

  imgContainer.append(img, btnPlay);
  cardBody.append(h5, name);
  card.append(imgContainer, cardBody);
  col.append(card);
  row.append(col);

  // aggiungo classsi a cards specifiche grazie al index
  switch (index) {
    case 1:
      col.classList.add("d-none", "d-md-block");
      break;
    case 2:
      col.classList.add("d-none", "d-lg-block");
      break;
    case 3:
      col.classList.add("d-none", "d-xl-block");
      break;
    case 4:
      col.classList.add("d-none", "d-xxl-block");
      break;
    case 5:
      col.classList.add("d-none", "d-xxl-block");
      break;
  }
};

// funzione che crea gli album grazie ad un array di album dato come parametro e un contenitore dove appendere tutto
const cardsAlbum = (arrAlbums, container) => {
  arrAlbums.forEach((album, index) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + album, options)
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw `Errore ${resp.status} : ${resp.statusText} `;
        }
      })
      .then(album => {
        // creo album con l'url inserito e le appendo al container dato come parametro

        creaAlbum(album, container, index);
      })
      .catch(err => alert(err));
  });
};

// all caricamento del DOM creo la card di annuncio
window.addEventListener("DOMContentLoaded", function () {
  randomAlbum = Math.round(Math.random() * (albumAnnunci.length - 1));
  // ************************************album di annuncio del momento*******************************
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + albumAnnunci[randomAlbum], options)
    .then(resp => {
      if (resp.ok) {
        // restituiamo il dato convertito in array da JSON
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(album => {
      const moTifrego = album;
      console.log(album);
      const annunci = document.getElementById("annunci");
      // dal array di canzoni prendo una a caso tra le prime 3 (non sappiamo se le top 50 canzoni sono veramente 50)

      const imgAnnunci = document.getElementById("imgAnnunci");
      imgAnnunci.setAttribute("src", album.cover_big);
      imgAnnunci.addEventListener("click", event => {
        window.location.assign("./AlbumPage.html?albumId=" + album.id);
      });
      const infoAnnunci = document.createElement("div");
      infoAnnunci.setAttribute("data-bs-theme", "dark");
      const spanAnnunci = document.createElement("span");
      spanAnnunci.innerText = album.type;
      spanAnnunci.className = "fs-6 text-secondary";
      const h2 = document.createElement("h2");
      h2.innerText = album.title;
      h2.className = "text-truncate";
      h2.style.maxWidth = "300px";
      h2.addEventListener("click", event => {
        window.location.assign("./AlbumPage.html?albumId=" + album.id);
      });

      const artistName = document.createElement("a");
      artistName.className = "link-light link-underline-opacity-0 link-underline-opacity-75-hover text-white fw-bold";
      artistName.href = "./artists.html?artistId=" + album.artist.id;
      artistName.innerText = album.artist.name;

      const p2 = document.createElement("p");
      p2.innerText = `Ascolta il nuovo album di ${album.artist.name}`;
      p2.className = "text-secondary mt-3";
      const containerBtn = document.createElement("div");
      containerBtn.className = "d-flex";
      const buttonPlay = document.createElement("button");
      buttonPlay.innerText = "Play";
      buttonPlay.className = "btn btn-success text-black rounded-pill px-4 me-4";

      buttonPlay.addEventListener("click", event => {
        console.log("Button clicked");
        console.log(moTifrego);
        const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
        const footerTitolo = document.getElementById("footerTitolo");
        const footerArtista = document.getElementById("footerArtista");

        const image = document.createElement("img");
        const h5 = document.createElement("h5");
        if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
          const indexPazzo = Math.floor(Math.random() * moTifrego.tracks.data.length);
          imgArtistaAlbum.innerHTML = "";
          footerTitolo.innerHTML = "";
          footerArtista.innerHTML = "";
          image.src = moTifrego.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = moTifrego.tracks.data[indexPazzo].title;
          h5.className = "text-truncate";
          h5.style.maxWidth = "250px";

          footerArtista.innerText = moTifrego.artist.name;
        } else {
          const indexPazzo = Math.floor(Math.random() * 16);
          image.src = moTifrego.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = moTifrego.tracks.data[indexPazzo].title;
          h5.className = "text-truncate";
          h5.style.maxWidth = "250px";
          footerArtista.innerText = moTifrego.artist.name;
        }

        // ***************************creazione album card e info aside bar***************************

        const aside = document.getElementById("asideContainer");
        aside.innerHTML = "";
        const asideAlbumCard = album => {
          const asideCol = this.document.createElement("div");
          asideCol.className = "col-12 border border-0";
          const asideCard = document.createElement("div");
          asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
          const asideImgContainer = document.createElement("div");
          const asideImg = document.createElement("img");
          asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
          asideImg.setAttribute("src", album.cover_big);
          asideImg.addEventListener("click", event => {
            window.location.assign("./AlbumPage.html?albumId=" + album.id);
          });
          const asideCardBody = document.createElement("div");
          asideCardBody.className = "card-body text-start px-0 pb-0";
          const asideH5 = document.createElement("h5");
          asideH5.innerText = album.title;
          asideH5.className = "fs-5 text-truncate text-white";
          asideH5.addEventListener("click", event => {
            window.location.assign("./AlbumPage.html?albumId=" + album.id);
          });
          const asideName = document.createElement("a");
          asideName.innerText = album.artist.name;
          asideName.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
          asideName.href = "./artists.html?artistId=" + album.artist.id;

          asideImgContainer.append(asideImg);
          asideCardBody.append(asideH5, asideName);
          asideCard.append(asideImgContainer, asideCardBody);
          asideCol.append(asideCard);
          aside.append(asideCol);
        };
        asideAlbumCard(moTifrego);

        // ***************************creazione artist card e info aside bar***************************
        const asideArtistCard = album => {
          const asideCol = this.document.createElement("div");
          asideCol.className = "col-12 border border-0";
          const asideCard = document.createElement("div");
          asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
          const asideImgContainer = document.createElement("div");
          const asideImg = document.createElement("img");
          asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
          asideImg.setAttribute("src", album.artist.picture_big);
          asideImg.addEventListener("click", event => {
            window.location.assign("./artists.html?artistId=" + album.artist.id);
          });
          const asideCardBody = document.createElement("div");
          asideCardBody.className = "card-body text-start px-0 pb-0";
          const asideH5 = document.createElement("h5");
          asideH5.innerText = album.artist.name;
          asideH5.className = "fs-5 text-truncate text-white";
          asideH5.addEventListener("click", event => {
            window.location.assign("./artists.html?artistId=" + album.artist.id);
          });
          const asideGenres = document.createElement("a");
          asideGenres.innerText = album.genres.data[0].name;
          asideGenres.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";

          asideImgContainer.append(asideImg);
          asideCardBody.append(asideH5, asideGenres);
          asideCard.append(asideImgContainer, asideCardBody);
          asideCol.append(asideCard);
          aside.append(asideCol);
        };
        asideArtistCard(moTifrego);
      });

      const buttonSalva = document.createElement("button");
      buttonSalva.innerText = "Salva";
      buttonSalva.className = "btn btn-outline-light rounded-pill  px-4 me-4";
      const buttonSettings = document.createElement("button");
      buttonSettings.innerText = ". . .";
      buttonSettings.setAttribute("type", "button");
      buttonSettings.setAttribute("data-bs-toggle", "dropdown");
      buttonSettings.className = "btn px-4 border-0";
      const dotsMenu = document.createElement("ul");
      dotsMenu.className = "dropdown-menu";

      const listMenu = document.createElement("li");

      listMenu.innerHTML = `<a class="dropdown-item" href="#"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-plus me-3"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                              /></svg
                            >Segui</a
                          >`;

      const listMenu2 = document.createElement("li");

      listMenu2.innerHTML = ` <a class="dropdown-item border-bottom" href="#"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-broadcast me-3"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
                              /></svg
                            >Vai a Radio dell'artista</a
                          >`;

      const listMenu3 = document.createElement("li");

      listMenu3.innerHTML = ` <a class="dropdown-item" href="#"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-spotify me-3"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"
                              /></svg
                            >Apri l'app</a
                          >`;

      dotsMenu.append(listMenu, listMenu2, listMenu3);
      buttonSettings.append(dotsMenu);

      containerBtn.append(buttonPlay, buttonSalva, buttonSettings);
      infoAnnunci.append(spanAnnunci, h2, artistName, p2, containerBtn);
      annunci.appendChild(infoAnnunci);
    })
    .catch(err => alert(err));

  cardsArtist(artistiPopolari, "#perTe");
  cardsAlbum(albumsArtistaPref, "#artistaPref");
  cardsAlbum(albumsDiOggi, "#perOggi");
  cardsAlbum(albumsPopolari, "#popolari");
  cardsAlbum(albumsStorici, "#mixPref");
});

// ********** input search******************************************
const searchInput = document.getElementById("searchInput");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (searchInput.value) {
    window.location.assign("./search.html?search=" + searchInput.value);
  }
});
