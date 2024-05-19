const chapters = [
    [
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/chat.jpg",
                aspectRatio: "375 / 667"
            },
            description: "Weet je nog hoe ik je in het begin perongelijk 3 dagen skipte... Ik ben wel echt ongeloofelijk blij wat hieruit is gekomen."
        },
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/eerste_date.jpg",
                aspectRatio: "1539 / 2048"
            },
            description: "Onze eerste date, de dag waarop de discussie over de (water)vogels ontstond en waarop je mijn haar gestijld had net als dat van jou.<br><br>Daarnaast natuurlijk onze eerste kus<3"
        },
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/eerst_bij_mij.jpg",
                aspectRatio: "3 / 4"
            },
            description: "De eerste keer dat je bij mij thuis was"
        },
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/park_1.jpg",
                aspectRatio: "375 / 667"
            },
            description: "De dagen dat we samen in het park zaten..."
        },
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/park_2.jpg",
                aspectRatio: "36 / 61"
            },
            description: "De dagen dat we samen in het park zaten..."
        },
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/park_3.jpg",
                aspectRatio: "725 / 1291"
            },
            description: "De dagen dat we samen in het park zaten..."
        },
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/park_4.jpg",
                aspectRatio: "9 / 16"
            },
            description: "De dagen dat we samen in het park zaten..."
        },
        {
            title: "Hoe het begon",
            image: {
                src: "assets/01_begin/eerste_nummer.jpg",
                aspectRatio: "1 / 1"
            },
            description: "Het eerste nummer wat ik voor je gezongen heb was Viva La Vida, ik weet nog dat ik best zenuwachtig was toen ik begon maar dat werd al snel minder toen ik zag hoe blij je was."
        }
    ],

    [
        {
            title: "",
            image: {
                src: "assets/kis.gif",
                aspectRatio: "1 / 1"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/park_1.jpg",
                aspectRatio: "375 / 667"
            },
            description: "Deze foto is al heel lang eem vam mijn favorieten, hij was gemaakt op 13 juni 2023 (denk ik 🙃). Toen hadden we 2 weken. We lagen samen op de berg naar muziek te luisteren en ik weet nog heel goed dat ik steeds terug keek en dacht aan hoe mooi je bent."
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/park_3.jpg",
                aspectRatio: "725 / 1334"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/park_2.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/bowlen.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/glowgolf.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/kermis.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/vapiano.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/rik.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/carnaval.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        },
        {
            title: "Onze momenten samen",
            image: {
                src: "assets/02_momenten/efteling.jpg",
                aspectRatio: "375 / 667"
            },
            description: ""
        }
    ],

    [
        {
            title: "",
            image: {
                src: "assets/love.gif",
                aspectRatio: "5 / 4"
            },
            description: ""
        },
        {
            title: "Hoe blij je me maakt",
            image: {
                src: "",
                aspectRatio: ""
            },
            description: ""
        },
        {
            title: "Hoe blij je me maakt",
            image: {
                src: "",
                aspectRatio: ""
            },
            description: ""
        },
        {
            title: "Hoe blij je me maakt",
            image: {
                src: "",
                aspectRatio: ""
            },
            description: ""
        },
        {
            title: "Hoe blij je me maakt",
            image: {
                src: "",
                aspectRatio: ""
            },
            description: ""
        },
        {
            title: "Hoe blij je me maakt",
            image: {
                src: "",
                aspectRatio: ""
            },
            description: ""
        }
    ]
];

var chapter = 0;
var i = 0;

function initialPicture() {
    document.getElementById("photo").src = chapters[chapter][i].image.src;
    document.getElementById("photo-wrapper").style.aspectRatio = chapters[chapter][i].image.aspectRatio;
    
    document.getElementById("title").innerHTML = chapters[chapter][i].title;
    document.getElementById("description").innerHTML = chapters[chapter][i].description;
}

function nextPicture() {
    if (i >= (chapters[chapter].length - 1)) {
        chapter++;
        i = 0;
    } else {
        i++;
    }


    document.getElementById("photo").src = chapters[chapter][i].image.src;
    document.getElementById("photo-wrapper").style.aspectRatio = chapters[chapter][i].image.aspectRatio;
    
    document.getElementById("title").innerHTML = chapters[chapter][i].title;
    document.getElementById("description").innerHTML = chapters[chapter][i].description;
}

function previousPicture() {
    if (i === 0) {
        if (chapter === 0) {
            return;
        } else {
            chapter--;
            i = chapters[chapter].length - 1;
        }
    } else {
        i--;
    }
    
    document.getElementById("photo").src = chapters[chapter][i].image.src;
    document.getElementById("photo-wrapper").style.aspectRatio = chapters[chapter][i].image.aspectRatio;
    
    document.getElementById("title").innerHTML = chapters[chapter][i].title;
    document.getElementById("description").innerHTML = chapters[chapter][i].description;
}