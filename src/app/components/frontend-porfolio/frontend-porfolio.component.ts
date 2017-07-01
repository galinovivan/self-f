import { Component, OnInit } from '@angular/core';
import { WHITE } from '../../consts/colors';
import { Skil } from '../../models/skil';

@Component({
  selector: 'app-frontend-porfolio',
  templateUrl: './frontend-porfolio.component.html',
  styleUrls: ['./frontend-porfolio.component.scss']
})
export class FrontendPorfolioComponent implements OnInit {
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
  }];
  constructor() { }

  ngOnInit() {
  }

}
