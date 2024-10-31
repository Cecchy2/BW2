# Spotify Clone 🎶

Clone di **Spotify** creato con **JavaScript** per la logica, **Bootstrap** e **Sass** per lo stile e la personalizzazione.

## Descrizione del Progetto

Questo progetto riproduce alcune funzionalità principali dell’interfaccia utente di Spotify, con pagine dinamiche per album e artisti. Il clone permette di esplorare album, artisti, brani e include un player visivo nella parte inferiore dello schermo. Il progetto è completamente **responsive** e adatto alla visualizzazione mobile.

---

## Funzionalità Principali

### 1. Homepage

- Mostra una serie di album a scelta.
- Design fedele all’interfaccia di Spotify.

### 2. Album Page

- Cliccando su un album dalla homepage, l'utente viene reindirizzato a una pagina singola (`album.html`) che si popola dinamicamente con i dettagli dell'album.
- **API Endpoint**: `https://striveschool-api.herokuapp.com/api/deezer/album/{id}`

### 3. Artist Page

- Cliccando sul nome di un artista, si accede alla pagina dedicata dell'artista (`artist.html`), popolata dinamicamente con i dati dell’artista e le sue tracce principali.
- **API Endpoint**: `https://striveschool-api.herokuapp.com/api/deezer/artist/{id}`
- **Tracklist dell'artista**: `https://striveschool-api.herokuapp.com/api/deezer/artist/{id}/top?limit=50`
- **Album dell'artista**: `https://striveschool-api.herokuapp.com/api/deezer/artist/{id}/albums`

### 4. Player

- Cliccando su una traccia, i dettagli vengono mostrati nel player in basso.
- Funzione di play/pausa opzionale.

### 5. Ricerca

- Funzione di ricerca per album, artisti o tracce.
- **API Endpoint**: `https://striveschool-api.herokuapp.com/api/deezer/search?q={query}`

---

## Struttura e Organizzazione del Progetto

### Tecnologie Utilizzate

- **JavaScript** per la logica di interazione
- **Bootstrap** e **Sass** per lo stile e la personalizzazione
- **API Deezer** per la gestione dei dati di album e artisti

### Organizzazione dei File

- **CSS**: Organizzato in modo modulare per supportare la riutilizzabilità delle classi.
- **JavaScript**: Diviso per componenti, con funzioni dedicate per ogni pagina.
- **HTML**: Pagine principali per `index.html` (homepage), `album.html` (pagina album) e `artist.html` (pagina artista).

### Workflow

- Utilizzato **Trello** per la gestione dei task e la divisione del lavoro.
- Iniziato con componenti e parti comuni per una struttura modulare.
- Utilizzo di **commit e merge frequenti** per un miglior controllo versione.

---

## Requisiti e Setup

1. **Clonazione della Repository**  
   Clona il progetto dal seguente link:

   ```bash
   git clone https://github.com/Cecchy2/BW2.git

   ```

2. **Compilazione SASS**
   Dopo aver clonato la repository, esegui

```bash
npm install
```

per installare le dipendenze e premi Watch Sass per avviare la compilazione automatica del CSS.

## Contributi

**Creato con passione dal team** commit frequenti e un’attenta gestione dei task tramite Trello.
