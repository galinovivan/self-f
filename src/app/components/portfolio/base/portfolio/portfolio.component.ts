import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../../../models/project';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  
})
export class PortfolioComponent implements OnInit {

  constructor(private router : Router) { };
  @Input() projectList : Project[];

  ngOnInit() {
  }
  onSelect(project : Project) {
    this.router.navigate(['project', project.id]);
  }

}
