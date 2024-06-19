window.addEventListener("DOMContentLoaded", () => {
  fetch(urlMilkyChance, options2)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw `Errore ${resp.status} : ${resp.statusText} `;
      }
    })
    .then((songs) => {
      console.log("la canzone è", songs);
      const imgArtistaAlbum = document.getElementById("imgArtistaAlbum");
      const footerTitolo = document.getElementById("footerTitolo");
      const footerArtista = document.getElementById("footerArtista");

      const image = document.createElement("img");
      const h5 = document.createElement("h5");
      image.src = `${songs.data[0].album.cover_small}`;
      imgArtistaAlbum.appendChild(image);
      footerTitolo.appendChild(h5);
      imgArtistaAlbum.classList.add("me-2");

      h5.innerText = `${songs.data[0].title}`;
      footerArtista.innerText = `${songs.data[0].artist.name}`;
    })
    .catch((err) => alert(err));
});
