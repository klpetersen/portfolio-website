import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  projects: Project[] = [{
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    pictures: ['../../assets/profile-pic.jpg', '../../assets/profile-pic.jpg', '../../assets/profile-pic.jpg'],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
}, {
  id: 1,
  name: 'Sample Angular App 2',
  summary: 'Test Description',
  description: '',
  projectLink: '',
  pictures: ['../../assets/profile-pic.jpg', '../../assets/profile-pic.jpg', '../../assets/profile-pic.jpg'],
  tags: [Tag.REACT, Tag.RUBY_ON_RAILS]
}, {
  id: 2,
  name: 'Sample Angular App 3',
  summary: 'Test Description',
  description: '',
  projectLink: '',
  pictures: ['../../assets/profile-pic.jpg', '../../assets/profile-pic.jpg', '../../assets/profile-pic.jpg'],
  tags: [Tag.JAVASCRIPT]
}];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id); 

    if ( project === undefined ) {
      throw new TypeError('There is no project that maches the id: ' + id);
    }

    return project;
  }
}
