const searchValue = new URLSearchParams(window.location.search).get("search");
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "163c72cf37msh7fb90cec4c02a73p1390b4jsn4594dd70494e",
    /* "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43", */
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const searchInput = document.getElementById("searchInput");
const form = document.getElementById("form");

const creaCards = searchObj => {
  searchArray = searchObj.data;
  searchArray.forEach(song => {
    const row = document.querySelector("#searchZone");

    const col = this.document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2   border border-0  ";

    const card = document.createElement("div");
    card.className = "btn card mb-4 border border-0 bg-darkness";

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
    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-start px-0 pb-0";
    const h5 = document.createElement("h5");
    h5.innerText = song.title;
    h5.className = "fs-5 text-truncate ";
    h5.addEventListener("click", event => {
      window.location.assign("./AlbumPage.html?albumId=" + song.album.id);
    });
    const artistName = document.createElement("p");
    artistName.className = "text-secondary";
    artistName.innerText = song.artist.name;
    artistName.addEventListener("click", event => {
      window.location.assign("./artists.html?artistId=" + song.artist.id);
    });
    imgContainer.append(img, btnPlay);
    cardBody.append(h5, artistName);
    card.append(imgContainer, cardBody);
    col.append(card);
    row.append(col);

    // aggiungo classsi a cards specifiche grazie al index col-lg-4 col-xl-3 col-xxl-2
    // switch (index) {
    //   case 1:
    //     col.classList.add("d-none", "d-md-block");
    //     break;
    //   case 2:
    //     col.classList.add("d-none", "d-lg-block");
    //     break;
    //   case 3:
    //     col.classList.add("d-none", "d-xl-block");
    //     break;
    //   case 4:
    //     col.classList.add("d-none", "d-xxl-block");
    //     break;
    //   case 5:
    //     col.classList.add("d-none", "d-xxl-block");
    //     break;
    // }
  });
};

window.addEventListener("DOMContentLoaded", function () {
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
