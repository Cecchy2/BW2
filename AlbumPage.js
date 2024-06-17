const params = new URLSearchParams(window.location.search);

const id = params.get("....id");

//ci estrarra' il valore corrispondente alla chiave che avremo dato

//al caricamento della pagina chiediamo al server  di darci i dati della risorsa con id che triviamo nell'HTTP
window.addEventListener("DOMContentLoaded", function () {
  this.fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore nella fetch");
      }
    })
    .then((albumObj) => {
      console.log(albumObj);
      const imgCurrentAlbum = document.getElementById("albumImg");
      const titleAlbum = document.getElementById("albumTitle");
      const artistAlbum = document.getElementById("albumArtist");
      imgCurrentAlbum.src = albumObj.cover;
      titleAlbum.innerText = albumObj.title;
      artistAlbum.innerText = albumObj.artist.name;
    })
    .catch((err) => console.log(err));
});
