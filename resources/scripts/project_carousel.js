
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

const carouselItems = [];

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
    else if (carouselItems.length >= 3) {
        carousel.createItem(carouselItems[i++], "prev-item");
        carousel.createItem(carouselItems[i++], "view-item");
        carousel.createItem(carouselItems[i++], "next-item");
        for (i; i < carouselItems.length; i++) {
            carousel.createItem(carouselItems[i]);
        }
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