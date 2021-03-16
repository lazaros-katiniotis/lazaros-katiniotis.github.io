const carousel_items = [];
let carousel_index = 0;
const project_images = new Map();
project_images['RouteApplication'] = './resources/projects/routeapplication.png';
project_images['Steves Lab'] = './resources/projects/steves_lab.png';

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
      this.img_url = project_images[title];
      if (!this.img_url) {
        this.img_url = './resources/projects/no_img.png';
      }
    }

    printProject() {
        console.log(`title: ${this.title}`);
        console.log(`description: ${this.description}`);
        console.log(`url: ${this.url}`);
        console.log(`homepage: ${this.homepage}`);
        console.log(`language: ${this.language}`);
        console.log(`img_url: ${this.img_url}`);
    }
}

function repoNameToTitle(name) {
    return name.replace('_', ' ');
}

const carousel = document.getElementById('projects-carousel');

const createCarouselItems = async () => {
    await getProjects()
    .then(projects => {
        projects.forEach(project => {
            const item = new Project(repoNameToTitle(project.name), project.description, project.html_url, project.homepage, project.language);
            carousel_items.push(item);
            //item.printProject();
        });
    });

    let i = 0;
    if (carousel_items.length === 1) {
        createItem(carousel_items[i++], "view-item");
    }
    else if (carousel_items.length === 2) {
        createItem(carousel_items[i++], "prev-item");
        createItem(carousel_items[i++], "view-item");
        carousel_index = 1;
    }
    else if (carousel_items.length === 3) {
        createItem(carousel_items[i++], "prev-item");
        createItem(carousel_items[i++], "view-item");
        createItem(carousel_items[i++], "next-item");
        carousel_index = 2;
    }
    createItem(carousel_items[2]);
    for (i; i < carousel_items.length; i++) {
        createItem(carousel_items[i]);
    }
}

function createItem(project, view) {
    const card = document.createElement("div"),
        link = document.createElement("a"),
        caption = document.createElement("div"),
        title = document.createElement("h3"),
        description = document.createElement("p"),
        language = document.createElement("p");
        
    card.style.backgroundImage = `url('${project.img_url}')`;
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
    carousel.appendChild(card);
}

createCarouselItems();