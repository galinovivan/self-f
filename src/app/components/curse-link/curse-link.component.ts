/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';




@Component({
  selector: 'app-curse-link',
  templateUrl: './curse-link.component.html',
  styleUrls: ['./curse-link.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})





export class CurseLinkComponent {
  @Input() label: string;
  @Input() linkHref: string;
  @Input() linkState;
  @Input() align : string = 'left';
}
