addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("https://exclusive-temporal-screwdriver.glitch.me/")
    const songs = await response.json()

    let html = ""

    for (let song of songs) {
        html += '<li>' + song.title + ' - '  + song.artist + '</li>'
    }

    document.querySelector("#addedsong").innerHTML = html
})
