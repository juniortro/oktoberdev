

let bonusButton = document.getElementById("bonus")
let footer = document.getElementById("footer")
let audio = document.getElementById("audio")

bonusButton.addEventListener("click", () => {
    footer.classList.add("show")
    footer.classList.remove("hidden")
    bonusButton.classList.add("hidden")
    audio.play()
    window.scrollTo(0, document.body.scrollHeight);
})


