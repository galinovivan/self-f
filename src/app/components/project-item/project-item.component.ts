/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component } from '@angular/core';




@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})




export class ProjectItemComponent {
  @Input() projectName: string;
  @Input() projectSource: string;
  @Input() thumbnail: string;
}
