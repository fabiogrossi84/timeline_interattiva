var autoPlayEnabled = true; // Variabile per controllare lo stato dell'autoplay

var timelineSwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // Cambia in 'horizontal' se vuoi lo scorrimento orizzontale
    loop: true, // Attiva il loop infinito
    speed: 1000, // Velocità di transizione in millisecondi
    autoplay: {
        delay: 3000, // Tempo di attesa tra una slide e l'altra (3 secondi)
        disableOnInteraction: false // Continua anche dopo l'interazione dell'utente
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
            return '<span class="' + className + '">' + year + '</span>';
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            direction: 'horizontal'
        }
    }
});


// Funzione per aprire il popup e fermare lo scorrimento delle slide
function openPopup(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    if (autoPlayEnabled) {
        timelineSwiper.autoplay.stop(); // Ferma lo scorrimento quando un popup si apre
    }
}

// Funzione per chiudere il popup e riavviare lo scorrimento se era attivo
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    if (autoPlayEnabled) {
        timelineSwiper.autoplay.start(); // Riavvia lo scorrimento quando il popup si chiude
    }
}


function updateAutoplayButtonText() {
    var buttons = document.querySelectorAll("#toggleAutoplayBtn"); // Seleziona tutti i pulsanti nelle slide
    buttons.forEach(button => {
        button.innerText = autoPlayEnabled ? "Ferma Slide" : "Avvia Slide"; // Imposta il testo corretto all'avvio
    });
}

function updateAutoplayButtonText() {
    var buttons = document.querySelectorAll(".toggle-autoplay-btn"); // Seleziona tutti i pulsanti autoplay
    buttons.forEach(button => {
        button.innerText = autoPlayEnabled ? "Ferma Slide" : "Avvia Slide"; // Imposta il testo corretto all'avvio
    });
}

function toggleAutoplay() {
    autoPlayEnabled = !autoPlayEnabled;

    if (autoPlayEnabled) {
        timelineSwiper.autoplay.start();
    } else {
        timelineSwiper.autoplay.stop();
    }

    updateAutoplayButtonText(); // Aggiorna il testo del pulsante in tutte le slide
}

// Imposta il testo del pulsante all'avvio della pagina
document.addEventListener("DOMContentLoaded", updateAutoplayButtonText);



