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

      const tracksTable = document.getElementById("tracksTable").querySelector("tbody");
      albumObj.tracks.data.forEach((track) => {
        const trackRow = document.createElement("tr");

        const trackNameCell = document.createElement("td");
        trackNameCell.innerText = track.title;

        const trackDurationCell = document.createElement("td");
        const minutes = Math.floor(track.duration / 60);
        const seconds = track.duration % 60;
        trackDurationCell.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        const trackPlaysCell = document.createElement("td");
        trackPlaysCell.innerText = track.rank;
        trackRow.appendChild(trackNameCell);
        trackRow.appendChild(trackDurationCell);
        trackRow.appendChild(trackPlaysCell);

        tracksTable.appendChild(trackRow);
      });
    })
    .catch((err) => console.log(err));
});
