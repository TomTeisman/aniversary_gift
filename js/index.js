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
        description: "De eerste keer dat je bij mij thuis was"
    },
    {
        image: {
            src: "assets/01_begin/park_1.jpg",
            aspectRatio: "375 / 667"
        },
        description: "De dagen dat we samen in het park zaten..."
    },
    {
        image: {
            src: "assets/01_begin/park_2.jpg",
            aspectRatio: "36 / 61"
        },
        description: "De dagen dat we samen in het park zaten..."
    },
    {
        image: {
            src: "assets/01_begin/park_3.jpg",
            aspectRatio: "725 / 1291"
        },
        description: "De dagen dat we samen in het park zaten..."
    },
    {
        image: {
            src: "assets/01_begin/park_4.jpg",
            aspectRatio: "9 / 16"
        },
        description: "De dagen dat we samen in het park zaten..."
    },
];

var i = 0;

function initialPicture() {
    document.getElementById("photo").src = assets[i].image.src;
    document.getElementById("photo-wrapper").style.aspectRatio = assets[i].image.aspectRatio;
    
    document.getElementById("description").innerHTML = assets[i].description;
}

function nextPicture() {
    if (i >= (assets.length - 1)) {
        return;
    }

    i++;

    document.getElementById("photo").src = assets[i].image.src;
    document.getElementById("photo-wrapper").style.aspectRatio = assets[i].image.aspectRatio;
    
    document.getElementById("description").innerHTML = assets[i].description;
}

function previousPicture() {
    if (i === 0) {
        return;
    }

    i--;

    document.getElementById("photo").src = assets[i].image.src;
    document.getElementById("photo-wrapper").style.aspectRatio = assets[i].image.aspectRatio;

    document.getElementById("description").innerHTML = assets[i].description;
}