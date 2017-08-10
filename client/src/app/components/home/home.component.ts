/**
 * Created by ivan on 19.06.17.
 */
import { Component } from '@angular/core';
import { WHITE, BLACK } from '../../consts/colors';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})


export class HomeComponent {
  frontendBlockColor = WHITE;
  backendBlockColor = BLACK;
}
