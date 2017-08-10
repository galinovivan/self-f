import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  @Input() sidebarTitle;
  @Input() blockColor;
  constructor() { }

  ngOnInit() {
  }

}
