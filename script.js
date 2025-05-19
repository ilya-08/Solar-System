function hideCard() {
    document.querySelectorAll('.card').forEach(card => {
            card.classList.add('hidden');
    });
}

function showCard(planet) {
    const card = document.getElementById(planet);
    card.classList.remove('hidden');
}

const planets = document.querySelectorAll(".planet");

planets.forEach(planet => {
    planet.addEventListener('click', () => {
        showCard(planet.getAttribute('data-planet'));
    });
});

const cardBtns = document.querySelectorAll(".x");

cardBtns.forEach(btn => {
    btn.addEventListener("click", hideCard);
});

const sun = document.querySelector(".sun");

sun.addEventListener('click', () => showCard('sun'));
