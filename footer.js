window.addEventListener("DOMContentLoaded", () => {
  let index = 0;
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
      image.src = `${songs.data[index].album.cover_small}`;
      imgArtistaAlbum.appendChild(image);
      footerTitolo.appendChild(h5);
      imgArtistaAlbum.classList.add("me-2");

      h5.innerText = `${songs.data[index].title}`;
      footerArtista.innerText = `${songs.data[index].artist.name}`;
    })
    .catch((err) => alert(err));
});
