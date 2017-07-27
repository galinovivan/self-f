import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/http.service/project.service';
import { WHITE } from'../../../consts/colors';

@Component({
  selector: 'app-frontend-portfolio',
  templateUrl: './frontend-portfolio.component.html',
  styleUrls: ['./frontend-portfolio.component.scss'],
  providers: [ProjectService]
})
export class FrontendPortfolioComponent implements OnInit {
public projects : Project[];
public error : any;
public blockColor = WHITE;
public sidebarTitle = 'frontend developer';
  constructor(private projectService : ProjectService) {};
  ngOnInit() {
    this.projectService.getAll().subscribe((data) => {
      this.projects = data;
    }, (error) => {
      this.error = error;
      console.log(error);
    })
  }

}
