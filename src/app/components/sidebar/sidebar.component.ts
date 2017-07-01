/**
 * Created by ivan on 19.06.17.
 */
import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})



export class SidebarComponent {
  @Input() title;
}
