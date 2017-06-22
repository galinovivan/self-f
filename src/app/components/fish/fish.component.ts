/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component } from '@angular/core';




@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})



export class FishComponent {
  @Input() direction;
  @Input() fishColor : string;
}
