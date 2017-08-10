/**
 * Created by ivan on 19.06.17.
 */
import { Component } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent {
  frontendLinkLabel : string = 'frontend';
  frontendLinkHref : string = 'frontend-skils';
  backendLinkLabel : string = 'backend';
  backendLinkHref : string = 'backend-skils';
  bottomLinkAlign : string = 'right';
}
