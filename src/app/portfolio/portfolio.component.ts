import { Component, OnInit } from '@angular/core';
import { SupplyerService } from '../services/supplyer.service';
import { Project, ProjectImages } from '../types/project-Interface';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private supplyer: SupplyerService) {}

  myParagraph1: string = 'I\'ve done several projects using various languages and frameworks.\
                          Check them out below! <br> <h5>Click on the images to see/get more\
                          information about the project. <br><br> \
                          Note: SingleProject Info Component Is still a work in progress </h5>';
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = this.supplyer.myProjects;
  }

  changeBackground() {
    const elements = document.querySelectorAll<HTMLElement>('.wrapper h1, .card h2, .card p');

    elements.forEach((element) => {
      element.classList.toggle('white-color');
    });
  }

  passProject(project: string){
    // this.projectComponent.getProject(project);
    // 
    
  }

  getProjectImage(project: Project): string {
    if (typeof project.projectImages[0] === 'string') {
      return project.projectImages[0] as string;
    } else {
      const projectImages = project.projectImages[0] as ProjectImages;
      return projectImages.image1;
    }
  }
  
  
}
