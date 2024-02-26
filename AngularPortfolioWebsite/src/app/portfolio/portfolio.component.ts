import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
 
  constructor( private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle("Kayla Petersen - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects(); 
  }
}
