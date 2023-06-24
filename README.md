> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# iO | Portfolio
<!-- Geef je project een titel en schrijf in één zin wat het is -->
![image](https://github.com/iBadr49/proof-of-concept/assets/112857932/f4cc0881-985c-4c7f-b883-475b6cc76c6f)


## 📚 Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
iO wilde graag een mooie en unieke cv-webpagina waar hiring managers van bedrijven gemakkelijk via URL een front-ontwikkelaar cv kunnen bekijken

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
De highring manager, de eindgebruiker kan gemakkelijk de cv van een front-ontwikkelaar bekijken via een URL. De cv-pagina bevat leuke animaties en kan worden doorlopen door te scrollen.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

Mijn cv-webpagina bevat verschillende animaties, ik heb een typeWriter effect de ``` h1 ``` van mijn pagina gevoegd, vond het een leuke animatie om te implementer. Hiervoor heb ik ``` Html ``` ``` Css ``` ``` JavaScript ``` gebruik van gemaakt.

- HTML
```ejs
        <!------------------------------------ HOME -->
        <section class="home" id="home">
            <div class="home-data">
                <h1 class="home-title">
                    Hoi,<br />Ik ben <span class="home-title-color">Beau</span> <br>
                    <span id="typewriter" class="typewriter"></span>
                </h1>
```
- JAVASCRIPT

```JS
// -------------------------- TypeWriter
const text = "Frontend Master"; // Tekst die getypt moet worden
const delay = 100; // Vertraging tussen elke letter (in milliseconden)

const typewriter = document.getElementById('typewriter');
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, delay);
  } else {
    setTimeout(erase, 2000); // Wacht 2 seconden voordat de tekst wordt gewist
  }
}

function erase() {
  if (index >= 0) {
    typewriter.textContent = text.substring(0, index);
    index--;
    setTimeout(erase, delay);
  } else {
    index = 0;
    setTimeout(type, delay); // Begin opnieuw met typen
  }
}

window.addEventListener('load', type);
```

- CSS

```css
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  margin: -5px;
  letter-spacing: 0.15em;
}

.typewriter::after {
  content: "|"; /* Knipperende cursor */
  display: inline-block;
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

#typewriter {
  font-family: "poppins", sans-serif;
}
```

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
In dit project is gebruik gemaakt van : ``` Node ``` ``` Express ``` ``` EJS ```
Voor het installeren van node gebruikte ik het commando npm init om node te initialiseren. Volgens deze modules kunnen geinstalleerd worden doormiddel van: ``` npm install ```, ``` express ``` , ``` ejs ```

Om de applicatie te laten werken, voer dan het volgende commando uit: ``` npm start ```

## Bronnen

- [MDN](https://developer.mozilla.org/en-US/)
- [CSS Tricks](https://css-tricks.com/)
- [Dribbble](https://dribbble.com/)
- [Colooors](https://coolors.co/)
- [codepen](https://codepen.io/)
- [Cyclic](https://app.cyclic.sh/#/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
