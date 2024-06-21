const searchValue = new URLSearchParams(window.location.search).get("search");
const row = document.querySelector("#searchZone");
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "163c72cf37msh7fb90cec4c02a73p1390b4jsn4594dd70494e",
    /* "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43", */
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const searchInput = document.getElementById("searchInput");
searchInput.value = searchValue;
const form = document.getElementById("form");

const creaCards = searchObj => {
  searchArray = searchObj.data;
  searchArray.forEach(song => {
    const col = this.document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2   border border-0  ";

    const card = document.createElement("div");
    card.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard";

    const imgContainer = document.createElement("div");
    imgContainer.className = "position-relative ";

    const img = document.createElement("img");
    img.className = "bd-placeholder-img card-img-top object-fit-cover";
    img.setAttribute("src", song.album.cover_big);
    img.addEventListener("click", event => {
      window.location.assign("./AlbumPage.html?albumId=" + song.album.id);
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
    btnPlay.addEventListener("click", () => {
      console.log(song);
      const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
      const footerTitolo = document.getElementById("footerTitolo");
      const footerArtista = document.getElementById("footerArtista");
      const image = document.createElement("img");
      const h5 = document.createElement("h5");
      if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
        imgArtistaAlbum.innerHTML = "";
        footerTitolo.innerHTML = "";
        footerArtista.innerHTML = "";
        image.src = song.album.cover_small;
        imgArtistaAlbum.appendChild(image);
        footerTitolo.appendChild(h5);
        imgArtistaAlbum.classList.add("me-2");
        h5.innerText = song.title;
        h5.className = "text-truncate";
        h5.style.maxWidth = "250px";
        footerArtista.innerText = song.artist.name;
      } else {
        image.src = song.album.cover_small;
        imgArtistaAlbum.appendChild(image);
        footerTitolo.appendChild(h5);
        imgArtistaAlbum.classList.add("me-2");
        h5.innerText = song.title;
        h5.className = "text-truncate";
        h5.style.maxWidth = "250px";
        footerArtista.innerText = song.artist.name;
      }

      // ********************** creazione album card aside bar****************************************
      const aside = document.getElementById("asideContainer");
      aside.innerHTML = "";
      const asideAlbumCard = element => {
        const asideCol = this.document.createElement("div");
        asideCol.className = "col-12 border border-0";
        const asideCard = document.createElement("div");
        asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
        const asideImgContainer = document.createElement("div");
        const asideImg = document.createElement("img");
        asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
        asideImg.setAttribute("src", element.album.cover_big);
        asideImg.addEventListener("click", event => {
          window.location.assign("./AlbumPage.html?albumId=" + element.album.id);
        });
        const asideCardBody = document.createElement("div");
        asideCardBody.className = "card-body text-start px-0 pb-0";
        const asideH5 = document.createElement("h5");
        asideH5.innerText = element.album.title;
        asideH5.className = "fs-5 text-truncate text-white";
        asideH5.addEventListener("click", event => {
          window.location.assign("./AlbumPage.html?albumId=" + element.album.id);
        });
        const asideName = document.createElement("a");
        asideName.innerText = element.artist.name;
        asideName.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
        asideName.href = "./artists.html?artistId=" + element.artist.id;

        asideImgContainer.append(asideImg);
        asideCardBody.append(asideH5, asideName);
        asideCard.append(asideImgContainer, asideCardBody);
        asideCol.append(asideCard);
        aside.append(asideCol);
      };
      asideAlbumCard(song);

      // ************************* crazione artista card aside bar **********************************
      const asideArtistCard = element => {
        const asideCol = this.document.createElement("div");
        asideCol.className = "col-12 border border-0";
        const asideCard = document.createElement("div");
        asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
        const asideImgContainer = document.createElement("div");
        const asideImg = document.createElement("img");
        asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
        asideImg.setAttribute("src", element.artist.picture_big);
        asideImg.addEventListener("click", event => {
          window.location.assign("./artists.html?artistId=" + element.artist.id);
        });
        const asideCardBody = document.createElement("div");
        asideCardBody.className = "card-body text-start px-0 pb-0";
        const asideH5 = document.createElement("h5");
        asideH5.innerText = element.artist.name;
        asideH5.className = "fs-5 text-truncate text-white";
        asideH5.addEventListener("click", event => {
          window.location.assign("./artists.html?artistId=" + element.artist.id);
        });
        const asideGenres = document.createElement("a");
        asideGenres.innerText = element.artist.type;
        asideGenres.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";

        asideImgContainer.append(asideImg);
        asideCardBody.append(asideH5, asideGenres);
        asideCard.append(asideImgContainer, asideCardBody);
        asideCol.append(asideCard);
        aside.append(asideCol);
      };
      asideArtistCard(song);
    });

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-start px-0 pb-0";
    const h5 = document.createElement("h5");
    h5.innerText = song.title;
    h5.className = "fs-5 text-truncate ";
    h5.addEventListener("click", event => {
      window.location.assign("./AlbumPage.html?albumId=" + song.album.id);
    });
    const artistName = document.createElement("a");
    artistName.innerText = song.artist.name;
    artistName.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
    artistName.href = "./artists.html?artistId=" + song.artist.id;

    imgContainer.append(img, btnPlay);
    cardBody.append(h5, artistName);
    card.append(imgContainer, cardBody);
    col.append(card);
    row.append(col);
  });
};

window.addEventListener("DOMContentLoaded", function () {
  // *************************** al submit del search sulla pagina home.html ***************************

  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue, options)
    .then(resp => {
      if (resp.ok) {
        // restituiamo il dato convertito in array da JSON
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(searchObj => {
      console.log(searchObj);
      creaCards(searchObj);
    })
    .catch(err => alert(err));

  // *************************** al submit del search sulla pagina search.html ***************************
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.assign("./search.html?search=" + searchInput.value);

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue, options)
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw `Errore ${resp.status} : ${resp.statusText} `;
        }
      })
      .then(searchObj => {
        console.log(searchObj);
        creaCards(searchObj);
      })
      .catch(err => alert(err));
  });
});
