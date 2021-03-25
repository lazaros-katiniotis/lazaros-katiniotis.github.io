class ProjectCarousel extends Carousel {

    createItem(project, view) {
        const card = document.createElement("div"),
            link = document.createElement("a"),
            caption = document.createElement("div"),
            title = document.createElement("h3"),
            description = document.createElement("p"),
            language = document.createElement("p");
            
        card.style.backgroundImage = `url('${project.imgUrl}')`;
        link.setAttribute("href", project.homepage);
        link.setAttribute("target", '_blank');
        caption.classList.add('carousel-caption');
        card.classList.add('carousel-item', 'colored-background');
        if (view) {
            card.classList.add(view);
        }
    
        title.textContent = project.title;
        description.textContent = project.description;
        language.textContent = 'Language: ' + project.language;
        
        caption.appendChild(title);
        caption.appendChild(description);
        caption.appendChild(language);
    
        link.appendChild(caption);
            
        card.appendChild(link);
        cardsContainer.appendChild(card);
    }

}

const projectCarousel = new ProjectCarousel();

const swapToPreviousCardHandler = projectCarousel.swapToPreviousCard.bind(projectCarousel);
const swapToNextCardHandler = projectCarousel.swapToNextCard.bind(projectCarousel);

prev.addEventListener("click", swapToPreviousCardHandler, false);
prevCardPreview.addEventListener("click", swapToPreviousCardHandler, false);
next.addEventListener("click", swapToNextCardHandler, false);
nextCardPreview.addEventListener("click", swapToNextCardHandler, false);

createCarouselItems(projectCarousel);