const authKey = "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43";
const searchBar = document.getElementById("searchBar");
const artistBanner = document.getElementById("artistBanner");
const id = new URLSearchParams(window.location.search).get("artistId");
const songsList = document.getElementById("songsList");
const containerList = document.getElementById("containerList");
const likedSongs = document.getElementById("likedSongs");
const correlati = document.getElementById("correlati");

const popularArtist = [13, 66, 7543848, 12246];

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0f032eb218mshe7b959267e60906p1d3878jsnde7092ae2254",
    /* "x-rapidapi-key": "4fa9bd0898msh965f020f8dcfd73p133487jsnd846f46b0f69", */
    /* "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43", */
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const getMinutes = duration => {
  seconds = duration % 60;
  minutes = ((duration - seconds) / 60) % 60;
  if (seconds < 10) return `${minutes}:0${seconds}`;
  else return minutes + ":" + seconds;
};

const createCards = () => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=4`, options)
    .then(resp => {
      if (resp.ok) return resp.json();
      else console.log(`Errore: ${resp.status}, ${resp.text}`);
    })
    .then(songs => {
      console.log(songs);

      songs.data.forEach(song => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-6 col-xl-3  border border-0  ";
        const card = document.createElement("div");
        card.className = "btn card mb-4 border border-0 bg-darkness";
        card.addEventListener("click", event => {
          window.location.assign("./artists.html?artistId=" + song.artist.id);
        });
        const imgContainer = document.createElement("div");
        imgContainer.className = "position-relative ";

        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top object-fit-cover";
        img.setAttribute("src", song.album.cover_big);
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
        const cardBody = document.createElement("div");
        cardBody.className = "card-body text-start px-0 pb-0";
        const h5 = document.createElement("h5");
        h5.innerText = song.artist.name;
        h5.className = "fs-5 text-truncate ";
        const type = document.createElement("p");
        type.className = "text-secondary text-truncate";
        type.innerText = song.album.title;

        imgContainer.append(img, btnPlay);
        cardBody.append(h5, type);
        card.append(imgContainer, cardBody);
        col.append(card);
        correlati.append(col);
      });
    })
    .catch(err => console.log(err));
};

const handlelikedSongs = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id, options)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else console.log(`Error ${resp.status}`);
    })
    .then(artist => {
      const row = document.createElement("div");
      row.className = "row";
      likedSongs.appendChild(row);
      const colImg = document.createElement("div");
      colImg.className = "col-1 px-0";
      row.appendChild(colImg);
      const artistImg = document.createElement("img");
      artistImg.className = "rounded-circle img-fluid";
      artistImg.src = artist.picture_big;
      artistImg.style = "width: 80px; heigth: 80px;";
      colImg.appendChild(artistImg);
      const colDescritpion = document.createElement("div");
      colDescritpion.className = "col-9 pe-0";
      row.appendChild(colDescritpion);
      const likeCounter = document.createElement("p");
      likeCounter.className = "mb-0 ps-0";
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
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id, options)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else console.log("Errore nel caricamento dei dati");
    })
    .then(artist => {
      const artistTitle = document.getElementById("artistTitle");
      const artistName = document.createElement("h1");
      artistBanner.classList.add("d-flex", "position-relative", "flex-column", "justify-content-start", "align-items-end");
      const banner = document.createElement("img");
      banner.src = artist.picture_xl;
      banner.className = " img-fluid w-100 opacity-25 overflow-hidden";
      banner.setAttribute("style", "object-fit: cover;");
      banner.style.maxHeight = "45vh";
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
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id + "/top?limit=5", options)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else console.log("Errore nel caricamento dei dati");
    })
    .then(artists => {
      const artistsOBJ = artists.data;
      console.log(artistsOBJ);
      const btnPlayArtist = document.getElementById("btnPlayArtist");
      btnPlayArtist.addEventListener("click", event => {
        console.log("Button clicked");
        console.log(artistsOBJ);

        const indexPazzo = Math.floor(Math.random() * 5);

        const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
        const footerTitolo = document.getElementById("footerTitolo");
        const footerArtista = document.getElementById("footerArtista");
        const image = document.createElement("img");
        const h5 = document.createElement("h5");
        if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
          imgArtistaAlbum.innerHTML = "";
          footerTitolo.innerHTML = "";
          footerArtista.innerHTML = "";
          image.src = artistsOBJ[indexPazzo].album.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = artistsOBJ[indexPazzo].title;
          h5.className = "text-truncate";
          h5.style.maxWidth = "250px";
          footerArtista.innerText = artistsOBJ[indexPazzo].artist.name;
        } else {
          image.src = artistsOBJ[indexPazzo].album.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = artistsOBJ[indexPazzo].title;
          h5.className = "text-truncate";
          h5.style.maxWidth = "250px";
          footerArtista.innerText = artistsOBJ[indexPazzo].artist.name;
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
        asideAlbumCard(artistsOBJ[indexPazzo]);

        // ************************* crazione artista card aside bar **********************************
        const asideArtistCard = element => {
          const asideCol = this.document.createElement("div");
          asideCol.className = "col-12 border border-0";
          const asideCard = document.createElement("div");
          asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
          const asideImgContainer = document.createElement("div");
          const asideImg = document.createElement("img");
          asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
          asideImg.setAttribute("src", element.contributors[0].picture_big);
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
        asideArtistCard(artistsOBJ[indexPazzo]);
      });

      artists.data.forEach((art, index) => {
        const songsList = document.getElementById("songsList");
        const col = document.createElement("div");
        col.className = "col-6 pointer";

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

        col.addEventListener("click", event => {
          console.log("Button clicked");
          console.log(art);

          const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
          const footerTitolo = document.getElementById("footerTitolo");
          const footerArtista = document.getElementById("footerArtista");
          const image = document.createElement("img");
          const h5 = document.createElement("h5");
          if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
            imgArtistaAlbum.innerHTML = "";
            footerTitolo.innerHTML = "";
            footerArtista.innerHTML = "";
            image.src = art.album.cover_small;
            imgArtistaAlbum.appendChild(image);
            footerTitolo.appendChild(h5);
            imgArtistaAlbum.classList.add("me-2");
            h5.innerText = art.title;
            h5.className = "text-truncate";
            h5.style.maxWidth = "250px";
            footerArtista.innerText = art.artist.name;
          } else {
            image.src = art.album.cover_small;
            imgArtistaAlbum.appendChild(image);
            footerTitolo.appendChild(h5);
            imgArtistaAlbum.classList.add("me-2");
            h5.innerText = art.title;
            h5.className = "text-truncate";
            h5.style.maxWidth = "250px";
            footerArtista.innerText = art.artist.name;
          }
          // ********************** creazione album card aside bar****************************************
          const aside = document.getElementById("asideContainer");
          aside.innerHTML = "";
          const asideAlbumCard = art => {
            const asideCol = document.createElement("div");
            asideCol.className = "col-12 border border-0";
            const asideCard = document.createElement("div");
            asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
            const asideImgContainer = document.createElement("div");
            const asideImg = document.createElement("img");
            asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
            asideImg.setAttribute("src", art.album.cover_big);
            asideImg.addEventListener("click", event => {
              window.location.assign("./AlbumPage.html?albumId=" + art.album.id);
            });
            const asideCardBody = document.createElement("div");
            asideCardBody.className = "card-body text-start px-0 pb-0";
            const asideH5 = document.createElement("h5");
            asideH5.innerText = art.album.title;
            asideH5.className = "fs-5 text-truncate text-white";
            asideH5.addEventListener("click", event => {
              window.location.assign("./AlbumPage.html?albumId=" + art.album.id);
            });
            const asideName = document.createElement("a");
            asideName.innerText = art.artist.name;
            asideName.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
            asideName.href = "./artists.html?artistId=" + art.artist.id;

            asideImgContainer.append(asideImg);
            asideCardBody.append(asideH5, asideName);
            asideCard.append(asideImgContainer, asideCardBody);
            asideCol.append(asideCard);
            aside.append(asideCol);
          };
          asideAlbumCard(art);

          // ************************* crazione artista card aside bar **********************************
          const asideArtistCard = element => {
            const asideCol = this.document.createElement("div");
            asideCol.className = "col-12 border border-0";
            const asideCard = document.createElement("div");
            asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
            const asideImgContainer = document.createElement("div");
            const asideImg = document.createElement("img");
            asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
            asideImg.setAttribute("src", element.contributors[0].picture_big);
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
          asideArtistCard(art);
        });
      });
    })
    .catch(err => console.log(err));
};

const related = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id + "/top?limit=5", options)
    .then(resp => {
      if (resp.ok) return resp.json();
      else console.log(`Errore ${resp.status}`);
    })
    .then(realetedItem => {
      console.log(realetedItem);
    })
    .catch(err => console.log(err));
};

window.addEventListener("DOMContentLoaded", function () {
  createBanner();
  createSongList();
  handlelikedSongs();
  related();
  createCards();
});
