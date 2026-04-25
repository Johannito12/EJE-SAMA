//button CONNEXION in the nav bar
function navigateTo(path) {
    window.location.href = path;//redirects to the specific page
}
//diapo background
const backgrounds = [
    { bg: "url('./backgroundSection/gabimaru.jpg') center/cover no-repeat", text:"Garan no Gabimaru-Gabimaru"}, 
    { bg:"url('./backgroundSection/goku.jpg') center/cover no-repeat", text:"KA..ME..HA..ME..HAHAHA"},
    { bg:"url('./backgroundSection/demon.jpg') center/cover no-repeat", text:"MUZANNN !!!!"},
    { bg:"url('./backgroundSection/blue.jpg') center/cover no-repeat", text:"un nante sonzai shinai, un wa jibun de tsukuru modo da"},
    { bg:"url('./backgroundSection/gojo.jpg') center/cover no-repeat", text:"Ryōiki Tenkai...Muryōkū !"},
    { bg:"url('./backgroundSection/sukuna.jpg') center/cover no-repeat", text:"Ryōiki Tenkai...Fukuma Mizushi !"},
    { bg:"url('./backgroundSection/sung.jpg') center/cover no-repeat", text:"Okiro"},
    { bg:"url('./backgroundSection/izuku.jpg') center/cover no-repeat", text:"Genkai o koero, PLUS ULTRA !"},
    { bg:"url('./backgroundSection/kirua.jpg') center/cover no-repeat", text:"Korosu yo."},
    { bg:"url('./backgroundSection/madara.jpg') center/cover no-repeat", text:"Genjitsu wa jigoku da"},
];

let i = 0;//index of the current background
let typingTimeout = null;//temps d'attente
let eraseTimeout = null;//temps d'effacement

const welcomeSection = document.getElementById("welcome");//section welcome
//create text element
const textEl = document.createElement("p");
textEl.id = "slide-text";
welcomeSection.appendChild(textEl);//add the text in the welcome section

function typeText(text, callback) {
    let i = 0;//first index or background
    textEl.textContent = "";//clear the text
    textEl.style.opacity = "1";//make the text visible

    function type() {
        if (i < text.length) {
            textEl.textContent += text[i];//add the next character
            i++;
            typingTimeout = setTimeout(type, 60);//wait before typing the next character
        } else {
            eraseTimeout = setTimeout(() => eraseText(callback), 2000);//wait 1 secondbefore erasing the text
        }
    }
    type();
}

function eraseText(callback) {
    function erase() {
        if (textEl.textContent.length > 0) {
            textEl.textContent = textEl.textContent.slice(0, -1);//remove the last character
            eraseTimeout = setTimeout(erase, 40);//wait before erasing the next character
        } else {
            callback();
        }
    }
    erase();
}

function showSlide() {
    const isMobile = window.innerWidth <= 768;
    const attachment = isMobile ? "scroll" : "fixed";
    // change the background with transition
    welcomeSection.style.background = backgrounds[i].bg.replace("no-repeat", 'no-repeat');
    welcomeSection.style.backgroundAttachment = attachment;
    welcomeSection.style.backgroundSize = "cover";
    welcomeSection.style.backgroundPosition = "center center";
    // wait that the background was visible 
    setTimeout(() => {
        typeText(backgrounds[i].text, () => {
            i = (i + 1) % backgrounds.length;
            showSlide();//next slide   
        });
    }, 500);//wait for the background to be visible before typing the text
}
showSlide();//start the slideshow

// the searchBar
function filtre(inputId, sectionId) {
    const input = document.getElementById(inputId);
    //recuperation des cartes dans la section cible
    const section = document.getElementById(sectionId);
    const cartes = section.querySelectorAll(".carte-anime");

    input.addEventListener("input", function () {
        const recherche = input.value.toLowerCase().trim();
        cartes.forEach(function (carte) {
            const titre = carte.querySelector("h4").textContent.toLowerCase();
            if(titre.includes(recherche)) {
                carte.style.display = "block";
            } else {
                carte.style.display = "none";
            }
        });
    });
}

filtre("search-animes", "anime");
filtre("search-mangas", "manga");
