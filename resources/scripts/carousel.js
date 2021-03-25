const prev = document.getElementById('prev');
const next = document.getElementById('next');
const shortcuts = document.getElementById('cards-swap-shortcuts');
const prevCardPreview = document.getElementById('prev-preview');
const nextCardPreview = document.getElementById('next-preview');

const carouselItems = [];
const cardsContainer = document.getElementById('cards-container');

class Carousel {

    getPreviousCard(card) {
        return card.previousElementSibling
        ? card.previousElementSibling
        : cardsContainer.lastElementChild;
    }
    
    getNextCard(card) {
        return card.nextElementSibling
        ? card.nextElementSibling
        : cardsContainer.firstElementChild;
    }

    swapToPreviousCard() {
        const currentCard = cardsContainer.querySelector('.carousel-item.view-item');
        const prevCard = this.getPreviousCard(currentCard);
        const nextCard = this.getNextCard(currentCard);
    
        nextCard.classList.remove("next-item");
    
        currentCard.classList.remove("view-item");
        currentCard.classList.add("next-item");
    
        prevCard.classList.remove("prev-item");
        prevCard.classList.add("view-item");
    
        this.getPreviousCard(prevCard).classList.add("prev-item");
    }
    
    swapToNextCard() {
        const currentCard = cardsContainer.querySelector('.carousel-item.view-item');
        const prevCard = this.getPreviousCard(currentCard);
        const nextCard = this.getNextCard(currentCard);
    
        prevCard.classList.remove("prev-item");
    
        currentCard.classList.remove("view-item");
        currentCard.classList.add("prev-item");
    
        nextCard.classList.remove("next-item");
        nextCard.classList.add("view-item");
    
        this.getNextCard(nextCard).classList.add("next-item");
    }

    createItem(project, view) {
        const card = document.createElement("div");
        cardsContainer.appendChild(card);
    }
}
