const params = new URLSearchParams(window.location.search);
const id = params.get("albumId");

let artistId = 0;

window.addEventListener("DOMContentLoaded", function () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + id, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c1be13bc83msh01ed86504ac789ap14b677jsn4a8378e3cb43",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Error fetching album data");
      }
    })
    .then((albumObj) => {
      console.log(albumObj);

      artistId = albumObj.artist.id;
      console.log(artistId);

      const date = albumObj.release_date;
      const newDate = new Date(date);
      const year = newDate.getFullYear();

      const imgCurrentAlbum = document.getElementById("albumImg");
      const titleAlbum = document.getElementById("albumTitle");
      const artistAlbum = document.getElementById("albumArtist");

      imgCurrentAlbum.src = albumObj.cover_big;
      titleAlbum.innerText = albumObj.title;
      artistAlbum.innerText = `${albumObj.artist.name} · ${year} · ${albumObj.nb_tracks} tracks`;

      const tracksTable = document.getElementById("tracksTable").querySelector("tbody");
      tracksTable.innerHTML = "";

      albumObj.tracks.data.forEach((track, index) => {
        const trackRow = document.createElement("tr");

        // Track number cell
        const trackNumberCell = document.createElement("th");
        trackNumberCell.scope = "row";
        trackNumberCell.innerText = index + 1;
        trackRow.appendChild(trackNumberCell);

        // Track title and artist cell
        const trackTitleCell = document.createElement("td");
        trackTitleCell.innerHTML = `${track.title}<br><span style="font-size: 0.9em; color: rgb(159, 159, 159);">${track.artist.name}</span>`;
        trackRow.appendChild(trackTitleCell);

        // Play count cell
        const playCountCell = document.createElement("td");
        playCountCell.innerText = track.rank;
        trackRow.appendChild(playCountCell);

        // Track duration cell
        const trackDurationCell = document.createElement("td");
        const minutes = Math.floor(track.duration / 60);
        let seconds = track.duration % 60;

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        trackDurationCell.innerText = `${minutes} : ${seconds}`;
        trackRow.appendChild(trackDurationCell);

        tracksTable.appendChild(trackRow);
      });

      return fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`);
    })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      }
    })
    .then((artistTop) => {
      const altriAlbums = document.getElementById("altriAlbums");
      altriAlbums.innerHTML = "";

      console.log(artistTop);

      /* const titleAlbumB = document.getElementById("titleAlbumBottom");
      titleAlbumB.innerText = "altri album di:" + artistTop.data.artist.name; */

      let albumTop = "";

      /* const titleAlbumB = document.getElementById("titleAlbumBottom");
      titleAlbumB.innerText = "Altri album di:" + albumTop.artist.name; */

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

        const buttonPlay = document.createElement("a");
        buttonPlay.type = "button";
        buttonPlay.style = "width: 50px; height: 50px";
        buttonPlay.className =
          "btn btn-success rounded-circle position-absolute bottom-0 end-0 me-2 mb-2 d-flex align-items-center justify-content-center d-none";
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
        titleAlbumBottom.className = "card-body text-start px-0 pb-0";
        titleAlbumBottom.innerText = albumTop.album.title;

        const artistAlbumBottom = albumTop.artist.name;

        divRelative.appendChild(coverImg);
        divRelative.appendChild(buttonPlay);
        cardAlbumTop.appendChild(divRelative);
        cardBodyAlbum.appendChild(titleAlbumBottom);
        cardBodyAlbum.append(artistAlbumBottom);
        cardAlbumTop.appendChild(cardBodyAlbum);
        colonna.append(cardAlbumTop);
        altriAlbums.appendChild(colonna);
      }
      const titleAlbumB = document.getElementById("titleAlbumBottom");
      titleAlbumB.innerText = "Altri album di  " + albumTop.artist.name;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });

  let scrolPage = 0;
  const theadTable = document.getElementById("theadTable");
  theadTable.classList.add("hidden");

  window.addEventListener("scroll", () => {
    scrolPage = window.scrollY;
    if (scrolPage >= 60) {
      theadTable.classList.remove("hidden");
    } else if (scrolPage < 60) {
      theadTable.classList.add("hidden");
    }
  });
});
