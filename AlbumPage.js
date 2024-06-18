const params = new URLSearchParams(window.location.search);

const id = params.get("....id");

window.addEventListener("DOMContentLoaded", function () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/44941731", {
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
      console.log(date);
      const newDate = new Date(date);
      console.log(newDate);

      const year = newDate.getFullYear();
      console.log(year);

      console.log(albumObj);
      const imgCurrentAlbum = document.getElementById("albumImg");
      const titleAlbum = document.getElementById("albumTitle");
      const artistAlbum = document.getElementById("albumArtist");
      imgCurrentAlbum.src = albumObj.cover;
      titleAlbum.innerText = albumObj.title;
      artistAlbum.innerText = albumObj.artist.name + " " + year + " " + albumObj.nb_tracks + " brani,";

      const tracksTable = document.getElementById("tracksTable").querySelector("tbody");
      tracksTable.innerHTML = "";
      albumObj.tracks.data.forEach((track, index) => {
        const trackRow = document.createElement("tr");

        // Numero Cella
        const trackNumberCell = document.createElement("th");
        trackNumberCell.scope = "row";
        trackNumberCell.innerText = index + 1;
        trackRow.appendChild(trackNumberCell);

        // Titolo
        const trackTitleCell = document.createElement("td");
        trackTitleCell.innerText = track.title;
        trackRow.appendChild(trackTitleCell);

        // Track Play
        const trackPlaysCell = document.createElement("td");
        trackPlaysCell.innerText = track.rank;
        trackRow.appendChild(trackPlaysCell);

        // Durata
        const trackDurationCell = document.createElement("td");
        const minutes = Math.floor(track.duration / 60);
        const seconds = track.duration % 60;
        trackDurationCell.innerText = `${minutes}:${seconds}`;
        trackRow.appendChild(trackDurationCell);

        tracksTable.appendChild(trackRow);
      });
    })
    .catch((err) => console.log(err));
});
