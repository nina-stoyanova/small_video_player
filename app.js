document.addEventListener("DOMContentLoaded", function (eventInfo) {

    let video = document.getElementsByClassName("player");
    console.log(video)

    let buttonPlay = document.getElementById("btn-play");
    let buttonPause = document.getElementById("btn-pause");



    buttonPlay.addEventListener('click', (event) => {
        video[0].play();
    })

    buttonPause.addEventListener('click', (event) => {
        video[0].pause();
    })
















})

