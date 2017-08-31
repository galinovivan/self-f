import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../../../models/project';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],

})
export class PortfolioComponent implements OnInit {
  @Input() projectList : Project[];

  constructor(private router : Router) { };


  ngOnInit() {
  }
  onSelect(project : Project) {
    this.router.navigate(['project', project._id]);
  }

}
