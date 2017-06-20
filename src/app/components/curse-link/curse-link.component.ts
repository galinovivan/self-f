/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { style } from '@angular/core/src/animation/dsl';




@Component({
  selector: 'app-curse-link',
  templateUrl: './curse-link.component.html',
  styleUrls: ['./curse-link.component.scss']
})





export class CurseLinkComponent {
  @Input() visible: boolean;
  @Input() label: string;
  @Input() linkHref: string;
  constructor(private animationBuilder: AnimationBuilder) {};
}
