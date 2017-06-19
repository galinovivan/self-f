/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component } from '@angular/core';




@Component({
  selector: 'app-curse-link',
  templateUrl: './curse-link.component.html',
  styleUrls: ['./curse-link.component.scss']
})





export class CurseLinkComponent {
  @Input() visible: boolean;
}
