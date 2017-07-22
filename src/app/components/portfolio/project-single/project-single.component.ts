/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component } from '@angular/core';




@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss']
})





export class ProjectSingleComponent {
  @Input() id: number;
  constructor() {};
}
