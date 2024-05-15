const assets = [
    {
        image: {
            src: "assets/01_begin/chat.jpg",
            aspectRatio: "375 / 667"
        },
        description: "Weet je nog hoe ik je in het begin perongelijk 3 dagen skipte...<br>Ik ben wel echt ongeloofelijk blij wat hieruit is gekomen."
    },
    {
        image: {
            src: "assets/01_begin/eerste_date.jpg",
            aspectRatio: "1539 / 2048"
        },
        description: "Onze eerste date"
    },
    {
        image: {
            src: "assets/01_begin/eerst_bij_mij.jpg",
            aspectRatio: "3 / 4"
        },
        description: ""
    }
];

var i = 0;

function nextPicture() {
    document.getElementById("photo").src = assets[i].image.src;
    document.getElementById("photo-wrapper").style.aspectRatio = assets[i].image.aspectRatio;
    
    document.getElementById("description").innerHTML = assets[i].description;
    i++;
}

function previousPicture() {
    i--;
    document.getElementById("photo").src = assets[i].img_src;
}