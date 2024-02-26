import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects: Project[] = [{
      id: 0,
      name: 'Sample Angular App',
      summary: 'Test Description',
      description: '',
      projectLink: '',
      pictures: [''],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
  }, {
    id: 1,
    name: 'Sample Angular App 2',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    pictures: [''],
    tags: [Tag.REACT, Tag.RUBY_ON_RAILS]
  }, {
    id: 2,
    name: 'Sample Angular App 3',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    pictures: [''],
    tags: [Tag.JAVASCRIPT]
  }];
 
  constructor( private titleService: Title) {
    this.titleService.setTitle("Kayla Petersen - Portfolio");
  }
}
