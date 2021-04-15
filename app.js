document.addEventListener("DOMContentLoaded", function (eventInfo) {

    let video = document.getElementsByClassName("player");
    console.log(video)

    let buttonPlay = document.getElementsByClassName("btn-play");
    let buttonPause = document.getElementsByClassName("btn-pause");



    buttonPlay[0].addEventListener('click', (event) => {
        video[0].play();
    })

    buttonPause[0].addEventListener('click', (event) => {
        video[0].pause();
    })
















})