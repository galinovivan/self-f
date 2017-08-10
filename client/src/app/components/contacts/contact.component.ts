import { Component, OnInit } from '@angular/core';
import { WHITE } from '../../consts/colors';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
white : string = WHITE;
  constructor() { }

  ngOnInit() {
  }

}
