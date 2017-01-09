import $ from 'jquery';
import { ProjectsLeft, ProjectsRight } from './Projects.js';

console.log('hello')

const displayProjects = (ProjectsLeft, ProjectsRight) => {
  for(var title in ProjectsLeft) {
    if (ProjectsLeft.hasOwnProperty(title)) {
      $('.hp-portfolio-left').append(
          `<div class=${ProjectsLeft[title].title} id=${ProjectsLeft[title].id}>
              <a href=/project/${ProjectsLeft[title].title}>
              <img src=${ProjectsLeft[title].imgURL} alt=${ProjectsLeft[title].title}/>
              <h2>${ProjectsLeft[title].title}</h2>
              <h5>${ProjectsLeft[title].description}</h5>
            </a>
          </div>`
        );
    }
  }

  for(var title in ProjectsRight) {
    if (ProjectsRight.hasOwnProperty(title)) {
      $('.hp-portfolio-right').append(
        `<div class=${ProjectsRight[title].title} id=${ProjectsRight[title].id}>
            <a href=/project/${ProjectsRight[title].title}>
            <img src=${ProjectsRight[title].imgURL} alt=${ProjectsRight[title].title}/>
            <h2>${ProjectsRight[title].title}</h2>
            <h5>${ProjectsRight[title].description}</h5>
          </a>
        </div>`
        );
    }
  }
};

displayProjects(ProjectsLeft, ProjectsRight);
