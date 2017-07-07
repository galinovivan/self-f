import { Component, OnInit } from '@angular/core';
import { WHITE } from '../../consts/colors';
import { Skil } from '../../models/skil';

@Component({
  selector: 'app-frontend-skils',
  templateUrl: './frontend-skils.component.html',
  styleUrls: ['./frontend-skils.component.scss']
})
export class FrontendSkilsComponent implements OnInit {
  blockColor = WHITE;
  sidebarTitle = 'frontend developer';
  skilsList : Skil[] = [{
    title: 'css'
  },
  {
    title: 'html'
  },
  {
    title: 'js'  
  },
  {
    title: 'angular 4'
  }];
  constructor() { }

  ngOnInit() {
  }

}
