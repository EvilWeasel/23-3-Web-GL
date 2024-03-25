// Get Reference to HTML-Element from the DOM
// DOM => Document-Object-Modell
// DOM => Abstraction of HTML-Document
const clockElem = document.getElementById("clock");

clockElem.innerText = "Buxtehude";

function updateClock() {
    const date = new Date();
    clockElem.innerText = date.toLocaleTimeString();
}
// C# Thread.Sleep(1000) => 1 Sekunde Delay
setInterval(updateClock, 1000);


// Chuck Norris Jokes
const jokeElem = document.getElementById("joke");


fetch("https://api.chucknorris.io/jokes/random?category=dev").then(response => {
    return response.json();
}).then(jsonData => {
    jokeElem.innerText = jsonData.value;
});