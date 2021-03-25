const prev = document.getElementById('prev');
const next = document.getElementById('next');
const shortcuts = document.getElementById('cards-swap-shortcuts');
const prevCardPreview = document.getElementById('prev-preview');
const nextCardPreview = document.getElementById('next-preview');

const carouselItems = [];
const cardsContainer = document.getElementById('cards-container');

const createCarouselItems = async (carousel) => {
    await getProjects()
    .then(projects => {
        projects.forEach(project => {
            const item = new Project(project.name, project.description, project.html_url, project.homepage, project.language);
            carouselItems.push(item);
        });
    });

    let i = 0;
    if (carouselItems.length === 1) {
        carousel.createItem(carouselItems[i++], "view-item");
    }
    else if (carouselItems.length === 2) {
        carousel.createItem(carouselItems[i++], "prev-item");
        carousel.createItem(carouselItems[i++], "view-item");
    }
    else if (carouselItems.length === 3) {
        carousel.createItem(carouselItems[i++], "prev-item");
        carousel.createItem(carouselItems[i++], "view-item");
        carousel.createItem(carouselItems[i++], "next-item");
    }

    for (i; i < carouselItems.length; i++) {
        carousel.createItem(carouselItems[i]);
    }
}

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
