import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { HttpService } from '../../../services/http.service/http.service';
import { WHITE } from'../../../consts/colors';

@Component({
  selector: 'app-frontend-portfolio',
  templateUrl: './frontend-portfolio.component.html',
  styleUrls: ['./frontend-portfolio.component.scss'],
  providers: [HttpService]
})
export class FrontendPortfolioComponent implements OnInit {
public projects : Project[];
public blockColor = WHITE;
public sidebarTitle = 'frontend developer';
  constructor(private httpService : HttpService) {};
  ngOnInit() {
    this.projects = this.httpService.getProjectByCategory('frontend');
  }

}
