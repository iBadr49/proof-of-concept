// Express uit de nodemodules map
import express from "express";

// Maak een nieuwe express app aan
const app = express();
const json = "https://raw.githubusercontent.com/iBadr49/proof-of-concept/main/json/beau-ter-ham.json"

//  Stel in hoe we express gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");

// Gebruik maken van de "public" map
app.use(express.static("public"));

// afhandeling van formulieren
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Maak een route voor de pagina's
app.get("/", (request, response) => {
    fetchJson(json).then((data) => {
        response.render("index", { data: data });
        // console.log(data)
      });
});


// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 4242)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

async function fetchJson(urls) {
    return await fetch(json)
      .then((response) => response.json())
      .catch((error) => error);
  }