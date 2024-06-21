const params = new URLSearchParams(window.location.search);
const id = params.get("albumId");

let averageColor = "";

let artistId = 0;

window.addEventListener("DOMContentLoaded", function () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + id, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Error fetching album data");
      }
    })
    .then(albumObj => {
      console.log(albumObj);
      /////EVENTO PLAYBTN SU ALLBUMPAGE

      const btnPlayAlbum = document.getElementById("playBtn");
      btnPlayAlbum.addEventListener("click", event => {
        console.log("Button clicked");
        console.log(albumObj);
        const indexPazzo = Math.floor(Math.random() * 20);

        const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
        const footerTitolo = document.getElementById("footerTitolo");
        const footerArtista = document.getElementById("footerArtista");
        const image = document.createElement("img");
        const h5 = document.createElement("h5");
        if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
          imgArtistaAlbum.innerHTML = "";
          footerTitolo.innerHTML = "";
          footerArtista.innerHTML = "";
          image.src = albumObj.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = albumObj.tracks.data[indexPazzo].title;
          h5.className = "text-truncate";
          h5.style.maxWidth = "250px";
          footerArtista.innerText = albumObj.artist.name;
        } else {
          image.src = albumObj.cover_small;
          imgArtistaAlbum.appendChild(image);
          footerTitolo.appendChild(h5);
          imgArtistaAlbum.classList.add("me-2");
          h5.innerText = albumObj.tracks.data[indexPazzo].title;
          h5.className = "text-truncate";
          h5.style.maxWidth = "250px";
          footerArtista.innerText = albumObj.artist.name;
        }
        // ********************** creazione album card aside bar****************************************
        const aside = document.getElementById("asideContainer");
        aside.innerHTML = "";
        const asideAlbumCard = albumObj => {
          const asideCol = document.createElement("div");
          asideCol.className = "col-12 border border-0";
          const asideCard = document.createElement("div");
          asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
          const asideImgContainer = document.createElement("div");
          const asideImg = document.createElement("img");
          asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
          asideImg.setAttribute("src", albumObj.cover_big);
          asideImg.addEventListener("click", event => {
            window.location.assign("./AlbumPage.html?albumId=" + albumObj.id);
          });
          const asideCardBody = document.createElement("div");
          asideCardBody.className = "card-body text-start px-0 pb-0";
          const asideH5 = document.createElement("h5");
          asideH5.innerText = albumObj.title;
          asideH5.className = "fs-5 text-truncate text-white";
          asideH5.addEventListener("click", event => {
            window.location.assign("./AlbumPage.html?albumId=" + albumObj.id);
          });
          const asideName = document.createElement("a");
          asideName.innerText = albumObj.artist.name;
          asideName.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
          asideName.href = "./artists.html?artistId=" + albumObj.artist.id;

          asideImgContainer.append(asideImg);
          asideCardBody.append(asideH5, asideName);
          asideCard.append(asideImgContainer, asideCardBody);
          asideCol.append(asideCard);
          aside.append(asideCol);
        };
        asideAlbumCard(albumObj);

        // ************************* crazione artista card aside bar **********************************
        const asideArtistCard = albumObj => {
          const asideCol = this.document.createElement("div");
          asideCol.className = "col-12 border border-0";
          const asideCard = document.createElement("div");
          asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
          const asideImgContainer = document.createElement("div");
          const asideImg = document.createElement("img");
          asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
          asideImg.setAttribute("src", albumObj.artist.picture_big);
          asideImg.addEventListener("click", event => {
            window.location.assign("./artists.html?artistId=" + albumObj.artist.id);
          });
          const asideCardBody = document.createElement("div");
          asideCardBody.className = "card-body text-start px-0 pb-0";
          const asideH5 = document.createElement("h5");
          asideH5.innerText = albumObj.artist.name;
          asideH5.className = "fs-5 text-truncate text-white";
          asideH5.addEventListener("click", event => {
            window.location.assign("./artists.html?artistId=" + albumObj.artist.id);
          });
          const asideGenres = document.createElement("a");
          asideGenres.innerText = albumObj.genres.data[0].name;
          asideGenres.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";

          asideImgContainer.append(asideImg);
          asideCardBody.append(asideH5, asideGenres);
          asideCard.append(asideImgContainer, asideCardBody);
          asideCol.append(asideCard);
          aside.append(asideCol);
        };
        asideArtistCard(albumObj);
      });
      //////FINE EVENTO

      artistId = albumObj.artist.id;
      console.log(artistId);

      const date = albumObj.release_date;
      const newDate = new Date(date);
      const year = newDate.getFullYear();

      const imgCurrentAlbum = document.getElementById("albumImg");
      const titleAlbum = document.getElementById("albumTitle");
      const artistAlbum = document.getElementById("albumArtist");

      /* crossOrigin impostato ad Anonymous */
      imgCurrentAlbum.crossOrigin = "Anonymous";

      imgCurrentAlbum.src = albumObj.cover_big;
      titleAlbum.innerText = albumObj.title;
      artistAlbum.innerText = `${albumObj.artist.name} · ${year} · ${albumObj.nb_tracks} tracks`;

      imgCurrentAlbum.src = albumObj.cover_big;
      titleAlbum.innerText = albumObj.title;
      artistAlbum.innerText = `${albumObj.artist.name} · ${year} · ${albumObj.nb_tracks} tracks`;

      imgCurrentAlbum.onload = function () {
        const colorThief = new ColorThief();
        const dominantColor = colorThief.getColor(imgCurrentAlbum);
        console.log(`Dominant Color: rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`);
        const mainElement = document.getElementById("main");
        mainElement.style.backgroundColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;

        averageColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
      };

      imgCurrentAlbum.onerror = function () {
        console.error("Error loading the album image.");
      };

      const tracksTable = document.getElementById("tracksTable").querySelector("tbody");
      tracksTable.innerHTML = "";

      albumObj.tracks.data.forEach((track, index) => {
        const trackRow = document.createElement("tr");

        // Numero Track
        const trackNumberCell = document.createElement("th");
        trackNumberCell.scope = "row";
        trackNumberCell.innerText = index + 1;
        trackRow.appendChild(trackNumberCell);

        // Track
        const trackTitleCell = document.createElement("td");
        trackTitleCell.className = "w-50 text-truncate";
        trackTitleCell.innerHTML = `${track.title}<br><span style="font-size: 0.9em; color: rgb(159, 159, 159);">${track.artist.name}</span>`;
        trackRow.appendChild(trackTitleCell);

        // Riproduz.
        const playCountCell = document.createElement("td");
        playCountCell.innerText = track.rank;
        trackRow.appendChild(playCountCell);
        playCountCell.className = "d-none d-xxl-table-cell";

        // Durata
        const trackDurationCell = document.createElement("td");
        const minutes = Math.floor(track.duration / 60);
        let seconds = track.duration % 60;
        trackDurationCell.className = "d-none d-lg-table-cell";

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        trackDurationCell.innerText = `${minutes} : ${seconds}`;
        trackRow.appendChild(trackDurationCell);

        tracksTable.appendChild(trackRow);
        ////EVENTO CLICK SULLA RIGA DELLA TABELLA
        trackRow.addEventListener("click", event => {
          console.log("Button clicked");
          console.log(albumObj);

          const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
          const footerTitolo = document.getElementById("footerTitolo");
          const footerArtista = document.getElementById("footerArtista");
          const image = document.createElement("img");
          const h5 = document.createElement("h5");
          if (imgArtistaAlbum.firstChild && imgArtistaAlbum.firstChild.src) {
            imgArtistaAlbum.innerHTML = "";
            footerTitolo.innerHTML = "";
            footerArtista.innerHTML = "";
            image.src = albumObj.cover_small;
            imgArtistaAlbum.appendChild(image);
            footerTitolo.appendChild(h5);
            imgArtistaAlbum.classList.add("me-2");
            h5.innerText = track.title;
            h5.className = "text-truncate";
            h5.style.maxWidth = "250px";
            footerArtista.innerText = track.artist.name;
          } else {
            image.src = albumObj.cover_small;
            imgArtistaAlbum.appendChild(image);
            footerTitolo.appendChild(h5);
            imgArtistaAlbum.classList.add("me-2");
            h5.innerText = track.title;
            h5.className = "text-truncate";
            h5.style.maxWidth = "250px";
            footerArtista.innerText = track.artist.name;
          }
          // ********************** creazione album card aside bar****************************************
          const aside = document.getElementById("asideContainer");
          aside.innerHTML = "";
          const asideAlbumCard = albumObj => {
            const asideCol = document.createElement("div");
            asideCol.className = "col-12 border border-0";
            const asideCard = document.createElement("div");
            asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
            const asideImgContainer = document.createElement("div");
            const asideImg = document.createElement("img");
            asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
            asideImg.setAttribute("src", albumObj.cover_big);
            asideImg.addEventListener("click", event => {
              window.location.assign("./AlbumPage.html?albumId=" + albumObj.id);
            });
            const asideCardBody = document.createElement("div");
            asideCardBody.className = "card-body text-start px-0 pb-0";
            const asideH5 = document.createElement("h5");
            asideH5.innerText = albumObj.title;
            asideH5.className = "fs-5 text-truncate text-white";
            asideH5.addEventListener("click", event => {
              window.location.assign("./AlbumPage.html?albumId=" + albumObj.id);
            });
            const asideName = document.createElement("a");
            asideName.innerText = albumObj.artist.name;
            asideName.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";
            asideName.href = "./artists.html?artistId=" + albumObj.artist.id;

            asideImgContainer.append(asideImg);
            asideCardBody.append(asideH5, asideName);
            asideCard.append(asideImgContainer, asideCardBody);
            asideCol.append(asideCard);
            aside.append(asideCol);
          };
          asideAlbumCard(albumObj);

          // ************************* crazione artista card aside bar **********************************
          const asideArtistCard = albumObj => {
            const asideCol = this.document.createElement("div");
            asideCol.className = "col-12 border border-0";
            const asideCard = document.createElement("div");
            asideCard.className = "btn card mb-4 border border-0 bg-darkness contenitoreCard ";
            const asideImgContainer = document.createElement("div");
            const asideImg = document.createElement("img");
            asideImg.className = "bd-placeholder-img card-img-top object-fit-cover ";
            asideImg.setAttribute("src", albumObj.artist.picture_big);
            asideImg.addEventListener("click", event => {
              window.location.assign("./artists.html?artistId=" + albumObj.artist.id);
            });
            const asideCardBody = document.createElement("div");
            asideCardBody.className = "card-body text-start px-0 pb-0";
            const asideH5 = document.createElement("h5");
            asideH5.innerText = albumObj.artist.name;
            asideH5.className = "fs-5 text-truncate text-white";
            asideH5.addEventListener("click", event => {
              window.location.assign("./artists.html?artistId=" + albumObj.artist.id);
            });
            const asideGenres = document.createElement("a");
            asideGenres.innerText = albumObj.genres.data[0].name;
            asideGenres.className = "link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover text-secondary fw-bold";

            asideImgContainer.append(asideImg);
            asideCardBody.append(asideH5, asideGenres);
            asideCard.append(asideImgContainer, asideCardBody);
            asideCol.append(asideCard);
            aside.append(asideCol);
          };
          asideArtistCard(albumObj);
        });
      });

      return fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`);
    })
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      }
    })
    .then(artistTop => {
      const altriAlbums = document.getElementById("altriAlbums");
      altriAlbums.innerHTML = "";

      console.log(artistTop);

      let albumTop = "";

      for (let i = 0; i < 4; i++) {
        albumTop = artistTop.data[i];
        console.log(albumTop);

        const colonna = document.createElement("div");
        colonna.className = "col-12 col-sm-6 col-xl-3";

        const cardAlbumTop = document.createElement("div");
        cardAlbumTop.className = "btn btn-secondary card mb-4 border border-0 bg-darkness ";

        const divRelative = document.createElement("div");
        divRelative.className = "position-relative";

        const coverImg = document.createElement("img");
        coverImg.className = "bd-placeholder-img card-img-top object-fit-cover img-responsive";
        coverImg.src = albumTop.album.cover_big;

        /* creo funzione eventlistener al click che mi rimanda all'album */
        coverImg.addEventListener("click", event => {
          console.log(event);
          const album_Id = albumTop.album.id;
          /* ?albumId= */
          console.log(album_Id);
          window.location.assign("./AlbumPage.html?albumId=" + album_Id);
        });

        const buttonPlay = document.createElement("a");
        buttonPlay.type = "button";
        buttonPlay.style = "width: 50px; height: 50px";
        buttonPlay.className = "btn btn-success rounded-circle position-absolute bottom-0 end-0 me-2 mb-2 d-flex align-items-center justify-content-center d-none";
        buttonPlay.id = "btnPlay";
        buttonPlay.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="black"
        class="bi bi-play-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"
        ></path></svg
    >`;
        const cardBodyAlbum = document.createElement("div");
        cardBodyAlbum.className = "card-body text-start px-0 pb-0";

        const titleAlbumBottom = document.createElement("h5");
        titleAlbumBottom.className = "card-body text-start px-0 pb-0 text-truncate";
        titleAlbumBottom.innerText = albumTop.album.title;
        console.log(albumTop.album.title);

        const anchor = document.createElement("a");
        anchor.innerText = albumTop.artist.name;
        anchor.setAttribute("id", "ancora");

        /* creo funzione eventlistener al click che mi rimanda all'artista */
        anchor.addEventListener("click", event => {
          console.log(event);
          console.log(albumTop.artist.id);
          const artist_id = albumTop.artist.id;
          window.location.assign("artists.html?artistId=" + artist_id);
        });

        divRelative.appendChild(coverImg);
        divRelative.appendChild(buttonPlay);
        cardAlbumTop.appendChild(divRelative);
        cardBodyAlbum.appendChild(titleAlbumBottom);
        cardBodyAlbum.appendChild(anchor);
        cardAlbumTop.appendChild(cardBodyAlbum);
        colonna.append(cardAlbumTop);
        altriAlbums.appendChild(colonna);
      }
      const titleAlbumB = document.getElementById("titleAlbumBottom");
      titleAlbumB.innerText = "Altri album di  " + albumTop.artist.name;
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });

  const scrollPage = document.getElementById("scrollThead");
  const hiddenThead = document.getElementById("hiddenThead");

  constplayBtn2 = document.getElementById("playBtn2");
  const navB = document.getElementById("coloredNavbar");

  scrollPage.addEventListener("scroll", function (event) {
    if (scrollPage.scrollTop > 475) {
      /* const bottonePlay = document.getElementById("playBtn"); */
      console.log(event);
      hiddenThead.classList.remove("hidden");
      hiddenThead.classList.add("visible");
      navB.style.backgroundColor = averageColor;

      playBtn2.classList.add("visible");
      playBtn2.classList.remove("hidden");
    } else {
      navB.style.backgroundColor = 0;

      hiddenThead.classList.remove("visible");
      hiddenThead.classList.add("hidden");

      playBtn2.classList.remove("visible");
      playBtn2.classList.add("hidden");
    }
  });
});
