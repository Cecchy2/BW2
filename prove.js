const creaAlbum = album => {
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
