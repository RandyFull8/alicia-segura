function ask(response) {
    if (response === 'yes') {
        alert("¡Genial, lo sabia XD! ¡En verdad que me gustaria intentarlo😁!, Puedo y dare lo mejor de mi:)");
    } else if (response === 'no') {
        const noButton = document.getElementById("noButton");
        noButton.style.position = "absolute";
        noButton.style.left = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth)) + "px";
        noButton.style.top = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight)) + "px";
    }
}
