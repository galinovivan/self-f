/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component } from '@angular/core';



@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})


export class PortfolioSectionComponent {
  @Input() sectionStyle: string;
}
