// Code for the homepage
import { ComputerGame } from "./puter.js"

// Await the dom content to load
await new Promise((resolve, reject) => {document.addEventListener("DOMContentLoaded", resolve)})

// button
const button = document.getElementById("button")
const audio = new Audio("/assets/audio/uuugh uugh.mp3")
button.addEventListener("mousedown", () => {
    audio.currentTime = 0
    audio.play()
})

// Setup the computer game
const canvas = document.getElementById("puter")
const puter = new ComputerGame(canvas)
await puter.init()

// Runs every frame
function update(time) {
    puter.update(time)
    requestAnimationFrame(update)
}

update(0)