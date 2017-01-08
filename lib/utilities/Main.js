import $ from 'jquery';
import { Projects } from './Projects.js';

$(document).ready;

// let Project = (title, description, image) => {
//   this.title = title;
//   this.description = description;
//   this.image = image;
// };
console.log(Projects);

const displayProjects = (Projects) => {
  for(var title in Projects) {
    if (Projects.hasOwnProperty(title)) {
      $('.hp-portfolio').prepend(
          `<div class=${Projects[title].title}></div>
          <h2>${Projects[title].title}</h2>
          <p>${Projects[title].description}</p>`
        );
    }
  }
};

displayProjects(Projects);
