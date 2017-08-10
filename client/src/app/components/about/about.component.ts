import { Component, OnInit, Input } from '@angular/core';
import { WHITE, BLACK } from '../../consts/colors';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  frontendBlockColor = WHITE;
  backendBlockColor = BLACK;
  sidebarFrontTitle = 'frontend developer';
  sidebarBackTitle = 'backend developer';
  constructor() { }

  ngOnInit() {
  }

}
