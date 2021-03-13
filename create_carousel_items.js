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

getProjects()
.then(projects => {
    projects.forEach(project => {
        const item = new Project(repoNameToTitle(project.name), project.description, project.html_url, project.homepage, project.language);
        carousel_items.push(item);
        item.printProject();
    });
});








