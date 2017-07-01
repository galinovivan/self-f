import { Component, OnInit, Input } from '@angular/core';
import { Skil } from '../../models/skil';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent implements OnInit {
  @Input() blockColor : string;
  @Input() sidebarTitle : string;
  @Input() skilsList : Skil[];
  constructor() { }

  ngOnInit() {
  }

}
