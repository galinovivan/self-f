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
  @Input() src: string;
  @Input() width: string;
  @Input() className: string;
}
