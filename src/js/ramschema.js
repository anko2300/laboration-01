"use strict"; 

let courses = []; // Array för att lagra kurserna

async function loadCourses() { // Funktion som hämtar JSON-data

    try {
        // fetch-anrop till JSON-filen
        const response = await fetch("https://webbutveckling.miun.se/files/ramschema.json");

        // Konverterar svar till objekt
        courses = await response.json();

        console.log(courses);

        // Datan skickas den till funktionen som visar kurserna
        displayCourses(courses);

    } catch (error) {

        console.error("Fel vid hämtning:", error);
    }
}