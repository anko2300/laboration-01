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

function displayCourses(courseList) { // Funktion som skriver ut kurser i tabellen

    const table = document.getElementById("courseTable");
    table.innerHTML = ""; // Tömmer tabellen innan nya kurser läggs till 

    courseList.forEach(course => {

        const row = document.createElement("tr");

        // Gör en rad för kurskod, namn och progression
        row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.coursename}</td>
        <td>${course.progression}</td>
        `;
        table.appendChild(row);

    });
}
loadCourses(); // Hämtar kurserna och visar dom när sidan laddas 
