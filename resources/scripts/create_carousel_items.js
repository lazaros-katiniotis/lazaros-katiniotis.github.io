const carouselItems = [];
const projectImages = new Map();
projectImages['RouteApplication'] = './resources/projects/routeapplication.png';
projectImages['Steves Lab'] = './resources/projects/steves_lab.png';

class Project {
    constructor(title, description, url, homepage, language) {
      this.title = title;
      this.description = description;
      this.url = url;
      if (homepage) {
        this.homepage = homepage;
      }
      else {
        this.homepage = this.url;
      }
      this.language = language;
      this.imgUrl = projectImages[title];
      if (!this.imgUrl) {
        this.imgUrl = './resources/projects/no_img.png';
      }
    }

    printProject() {
        console.log(`title: ${this.title}`);
        console.log(`description: ${this.description}`);
        console.log(`url: ${this.url}`);
        console.log(`homepage: ${this.homepage}`);
        console.log(`language: ${this.language}`);
        console.log(`imgUrl: ${this.imgUrl}`);
    }
}

function repoNameToTitle(name) {
    return name.replace('_', ' ');
}

const cardsContainer = document.getElementById('cards-container');

const createCarouselItems = async () => {
    await getProjects()
    .then(projects => {
        projects.forEach(project => {
            const item = new Project(repoNameToTitle(project.name), project.description, project.html_url, project.homepage, project.language);
            carouselItems.push(item);
        });
    });

    let i = 0;
    if (carouselItems.length === 1) {
        createItem(carouselItems[i++], "view-item");
    }
    else if (carouselItems.length === 2) {
        createItem(carouselItems[i++], "prev-item");
        createItem(carouselItems[i++], "view-item");
    }
    else if (carouselItems.length === 3) {
        createItem(carouselItems[i++], "prev-item");
        createItem(carouselItems[i++], "view-item");
        createItem(carouselItems[i++], "next-item");
    }

    for (i; i < carouselItems.length; i++) {
        createItem(carouselItems[i]);
    }
}

function createItem(project, view) {
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

createCarouselItems();