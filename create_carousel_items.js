const carousel_items = [];

class Project {
    constructor(title, description, url, homepage, language) {
      this.title = title;
      this.description = description;
      this.url = url;
      this.homepage = homepage;
      this.language = language;
    }
}

function repoNameToTitle(name) {
    return name.replace('_', ' ');
}

getProjects().then(projects => {
    projects.forEach(project => {
        const item = new Project(repoNameToTitle(project.name), project.description, project.html_url, project.homepage, project.language);
        carousel_items.push(item);
        console.log(item);
    });
});






