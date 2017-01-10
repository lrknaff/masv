import $ from 'jquery';
import { ProjectsLeft, ProjectsRight } from './HpProjects.js';

const params = window.location.pathname.split("/")[2];
// const project = obj[params];

const displayProject = (ProjectsLeft, ProjectsRight) => {
  const params = window.location.pathname.split("/")[2];
  if (ProjectsLeft[params]) {
    $('.project').append(
        `<div>
          <h2>${ProjectsLeft[params].title}</h2>
          <h5>${ProjectsLeft[params].descriptionLong}</h5>
        </div>`
      );
  } else if (ProjectsRight[params]) {
    $('.project').append(
        `<div>
          <h2>${ProjectsRight[params].title}</h2>
          <h5>${ProjectsRight[params].descriptionLong}</h5>
        </div>`
    );
  } else {
    $('.project').append(
      `<div>
          That Project Does not exist
      </div>`
    );
  }
};

displayProject(ProjectsLeft, ProjectsRight);
