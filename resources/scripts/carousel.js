const prev = document.getElementById('prev');
const next = document.getElementById('next');
const shortcuts = document.getElementById('cards-swap-shortcuts');
const prevCardPreview = document.getElementById('prev-preview');
const nextCardPreview = document.getElementById('next-preview');

function swapToPreviousCard() {
    const currentCard = cardsContainer.querySelector('.carousel-item.view-item');
    const prevCard = getPreviousCard(currentCard);
    const nextCard = getNextCard(currentCard);

    nextCard.classList.remove("next-item");

    currentCard.classList.remove("view-item");
    currentCard.classList.add("next-item");

    prevCard.classList.remove("prev-item");
    prevCard.classList.add("view-item");

    getPreviousCard(prevCard).classList.add("prev-item");
}

function swapToNextCard() {
    const currentCard = cardsContainer.querySelector('.carousel-item.view-item');
    const prevCard = getPreviousCard(currentCard);
    const nextCard = getNextCard(currentCard);

    prevCard.classList.remove("prev-item");

    currentCard.classList.remove("view-item");
    currentCard.classList.add("prev-item");

    nextCard.classList.remove("next-item");
    nextCard.classList.add("view-item");

    getNextCard(nextCard).classList.add("next-item");
}

function getPreviousCard(card) {
    return card.previousElementSibling
    ? card.previousElementSibling
    : cardsContainer.lastElementChild;
}

function getNextCard(card) {
    return card.nextElementSibling
    ? card.nextElementSibling
    : cardsContainer.firstElementChild;
}

prev.addEventListener("click", swapToPreviousCard);
prevCardPreview.addEventListener("click", swapToPreviousCard);

next.addEventListener("click", swapToNextCard);
nextCardPreview.addEventListener("click", swapToNextCard);


