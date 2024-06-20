const curretTime = document.getElementById("currentTime");
const totalDuration = document.getElementById("totalDuration");
///funzione per compilare il lettore
/* const coverTitoloArtista = (datiOggetto) => {
  const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
  const footerTitolo = document.getElementById("footerTitolo");
  const footerArtista = document.getElementById("footerArtista");
  const image = document.createElement("img");
  const titoloh5 = document.createElement("h5");
  imgArtistaAlbum.classList.add("me-2");
  imgArtistaAlbum.appendChild(image);
  footerTitolo.appendChild(titoloh5);
  if (imgArtistaAlbum) {
    imgArtistaAlbum.innerHTML = "";
    footerTitolo.innerHTML = "";
    footerArtista.innerHTML = "";
    image.src = `${datiOggetto.cover_small}`;
    titoloh5.innerText = `${datiOggetto.title}`;
    footerArtista.innerText = `${datiOggetto.artist.name}`;
  } else {
    image.src = `${datiOggetto.cover_small}`;
    titoloh5.innerText = `${datiOggetto.title}`;
    footerArtista.innerText = `${datiOggetto.artist.name}`;
  }
}; */
