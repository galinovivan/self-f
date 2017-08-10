/**
 * Created by ivan on 19.06.17.
 */
import { Component, Input } from '@angular/core';
import { Skil } from '../../models/skil';




@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})



export class SkilsComponent {
  @Input() skilsList : Skil[];
}
