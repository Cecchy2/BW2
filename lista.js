const urlQueen = "https://deezerdevs-deezer.p.rapidapi.com/search?q=queen";
const urlMilkyChance = "https://deezerdevs-deezer.p.rapidapi.com/search?q=milky%20chance";
const urlDonOmar = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Don%20Omar";
const urlNickyJam = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Nicky%20jam";
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4fa9bd0898msh965f020f8dcfd73p133487jsnd846f46b0f69",
    /* "x-rapidapi-key": "0f032eb218mshe7b959267e60906p1d3878jsnde7092ae2254", */
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const listaBraniArtistiAlbum = document.getElementById("listaBraniArtistiAlbum");
const creaList = song => {
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
    titolo.classList.add("text-truncate", "d-none", "d-xl-block");
    divImg.classList.add("d-flex", "alig-items-center", "mb-3", "pointer");
    branoArtistaAlbum.classList.add("list-unstyled", "d-flex", "justify-content-center0", "align-items-center", "d-lg-block");
    branoArtistaAlbum.addEventListener("click", () => {
      console.log(element);
      const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
      const footerTitolo = document.getElementById("footerTitolo");
      const footerArtista = document.getElementById("footerArtista");
      const image = document.createElement("img");
      const h5 = document.createElement("h5");
      if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
        imgArtistaAlbum.innerHTML = "";
        footerTitolo.innerHTML = "";
        footerArtista.innerHTML = "";
        image.src = element.album.cover_small;
        imgArtistaAlbum.appendChild(image);
        footerTitolo.appendChild(h5);
        imgArtistaAlbum.classList.add("me-2");
        h5.innerText = element.title;
        h5.className = "text-truncate";
        h5.style.maxWidth = "250px";
        footerArtista.innerText = element.artist.name;
      } else {
        image.src = element.album.cover_small;
        imgArtistaAlbum.appendChild(image);
        footerTitolo.appendChild(h5);
        imgArtistaAlbum.classList.add("me-2");
        h5.innerText = element.title;
        h5.className = "text-truncate";
        h5.style.maxWidth = "250px";
        footerArtista.innerText = element.artist.name;
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
      asideAlbumCard(element);

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
      asideArtistCard(element);
    });
    nomeArtista.innerText = `${element.artist.name}`;
    nomeArtista.classList.add("m-0");
    divTitolo.classList.add("d-flex", "flex-column", "ms-3", "justify-content-center", "d-none", "d-xl-block", "pointer");

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
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(songs => {
      creaList(songs.data);

      /* btnPlay.addEventListener("click", (event) => {
        console.log("Button clicked");
        console.log(moTifrego);
        const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
        const footerTitolo = document.getElementById("footerTitolo");
        const footerArtista = document.getElementById("footerArtista");
        const image = document.createElement("img");
        const h5 = document.createElement("h5");
        if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
          imgArtistaAlbum.innerHTML = "";
          footerTitolo.innerHTML = "";
          footerArtista.innerHTML = "";
          image.src = moTifrego.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = moTifrego.title;
          footerArtista.innerText = moTifrego.artist.name;
        } else {
          image.src = moTifrego.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = moTifrego.title;
          footerArtista.innerText = moTifrego.artist.name;
        }
      }); */
    })
    .catch(err => alert(err));
  fetch(urlQueen, options2)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(songs => {
      creaList(songs.data);
    })
    .catch(err => alert(err));
  fetch(urlDonOmar, options2)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(songs => {
      creaList(songs.data);
    })
    .catch(err => alert(err));
  fetch(urlNickyJam, options2)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(songs => {
      creaList(songs.data);
    })
    .catch(err => alert(err));
  fetch(urlNickyJam, options2)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then(songs => {
      console.log(songs);
      creaList(songs.data);
    })
    .catch(err => alert(err));
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
  const searchInput = document.getElementById("searchInput");
  const btnAvanti = document.getElementById("btnAvanti");
  const btnEsplora = document.getElementById("btnEsplora");
  const btnInstall = document.getElementById("btnInstall");
  if (formSearch.classList.contains("d-none")) {
    searchDisable.classList.add("d-none");
    searchActivate.classList.remove("d-none");
    formSearch.classList.remove("d-none");
    searchInput.focus(); // Attiva il focus sull'input
    btnEsplora.classList.add("d-none");
    btnInstall.classList.add("d-none");
  } else {
    searchDisable.classList.remove("d-none");
    searchActivate.classList.add("d-none");
    formSearch.classList.add("d-none");
    btnEsplora.classList.remove("d-none");
    btnInstall.classList.remove("d-none");
  }
});
