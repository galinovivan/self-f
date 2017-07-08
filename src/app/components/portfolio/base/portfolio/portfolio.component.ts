import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../../models/project';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  @Input() projectList : Project[];

  ngOnInit() {
  }

}
