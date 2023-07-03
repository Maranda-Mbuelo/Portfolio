import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplyerService } from '../services/supplyer.service';
import { Project, ProjectImages } from '../types/project-Interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project | undefined;

  constructor(private supplyer: SupplyerService, private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id != null) {
        this.project = this.supplyer.myProjects.find(project => project.projectName === id);
      }
    });
  }

  isStringArray(images: string[] | ProjectImages[]): images is string[] {
    return Array.isArray(images);
  }

  isAlternateImageStructure(images: string[] | ProjectImages[]): images is ProjectImages[] {
    return !this.isStringArray(images);
  }
}
