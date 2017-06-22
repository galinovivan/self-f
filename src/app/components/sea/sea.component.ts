/**
 * Created by 91178 on 21.06.2017.
 */
import { Component } from '@angular/core';
import { RIGHT, LEFT } from '../../consts/directions';




@Component({
  selector: 'app-sea',
  templateUrl: './sea.component.html',
  styleUrls: ['./sea.component.scss']
})


export class SeaComponent {
  readonly redFish : string = 'red';
  readonly blueFish : string = 'blue';
  readonly greenFish : string = 'green';
  readonly right = RIGHT;
  readonly left = LEFT;
}
