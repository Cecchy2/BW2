const params = new URLSearchParams(window.location.search);
const id = params.get("albumId");

window.addEventListener("DOMContentLoaded", function () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + id, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "163c72cf37msh7fb90cec4c02a73p1390b4jsn4594dd70494e",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore nella fetch");
      }
    })
    .then((albumObj) => {
      const date = albumObj.release_date;
      const newDate = new Date(date);
      const year = newDate.getFullYear();

      const imgCurrentAlbum = document.getElementById("albumImg");
      const titleAlbum = document.getElementById("albumTitle");
      const artistAlbum = document.getElementById("albumArtist");

      imgCurrentAlbum.src = albumObj.cover;
      titleAlbum.innerText = albumObj.title;
      artistAlbum.innerText = `${albumObj.artist.name} ${year} ${albumObj.nb_tracks} brani`;

      const tracksTable = document.getElementById("tracksTable").querySelector("tbody");
      tracksTable.innerHTML = "";

      albumObj.tracks.data.forEach((track, index) => {
        const trackRow = document.createElement("tr");

        // Numero Cella
        const trackNumberCell = document.createElement("th");
        trackNumberCell.scope = "row";
        trackNumberCell.innerText = index + 1;
        trackRow.appendChild(trackNumberCell);

        // Titolo e Artista
        const trackTitleCell = document.createElement("td");
        trackTitleCell.innerHTML = `${track.title}<br><span style="font-size: 0.9em; color: rgb(159, 159, 159);">${track.artist.name}</span>`;
        trackRow.appendChild(trackTitleCell);

        // Riproduzioni
        const riproduzioni = document.createElement("td");
        riproduzioni.innerText = track.rank;
        trackRow.appendChild(riproduzioni);

        // Durata
        const trackDurationCell = document.createElement("td");
        const minutes = Math.floor(track.duration / 60);
        const seconds = track.duration % 60;
        trackDurationCell.innerText = `${minutes}:${seconds}`;
        trackRow.appendChild(trackDurationCell);

        trackRow.addEventListener("click", (event) => {
          console.log(event);
        });

        trackRow.style.cursor = "pointer";

        tracksTable.appendChild(trackRow);
      });
    })
    .catch((err) => console.log(err));
});
