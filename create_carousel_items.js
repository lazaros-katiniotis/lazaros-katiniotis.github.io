const carousel_items = [];
const project_images = new Map();
project_images['RouteApplication'] = './resources/projects/routeapplication.png';
project_images['Steves Lab'] = './resources/projects/steves_lab.png';

class Project {
    constructor(title, description, url, homepage, language) {
      this.title = title;
      this.description = description;
      this.url = url;
      this.homepage = homepage;
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
    createItem(carousel_items[1]);
}

function createItem(project) {
    const card = document.createElement("div"),
        link = document.createElement("a"),
        //image = document.createElement("img"),
        caption = document.createElement("div"),
        title = document.createElement("h3"),
        description = document.createElement("p"),
        language = document.createElement("p");
    
    //console.log(project);
    
    card.style.backgroundImage = `url('${project.img_url}')`;
    //image.setAttribute("src", project.img_url);
    link.setAttribute("href", project.homepage);
    link.setAttribute("target", '_blank');
    caption.classList.add('carousel-caption');
    card.classList.add('carousel-item', 'colored-background');

    title.textContent = project.title;
    description.textContent = project.description;
    language.textContent = project.language;
    
    caption.appendChild(title);
    caption.appendChild(description);
    caption.appendChild(language);

    link.appendChild(caption);
        
    //card.appendChild(image);
    card.appendChild(link);
    
    carousel.appendChild(card);
}

createCarouselItems();