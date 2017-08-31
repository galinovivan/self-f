/**
 * Created by ivan on 19.06.17.
 */
import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import "rxjs/add/operator/switchMap";

import { ProjectService } from '../../../services/http.service/project.service';
import { Project } from '../../../models/project';
import { WHITE } from'../../../consts/colors';




@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss'],
  providers : [ProjectService]
})





export class ProjectSingleComponent implements OnInit {
  project : Project;
  blockColor: string = WHITE;
  constructor(private router : Router,
     private route : ActivatedRoute, 
     private service : ProjectService ) {};
  ngOnInit() {
    this.route.paramMap
      .switchMap((params : ParamMap) => 
        this.service.getById(params.get('_id'))
      )
        .subscribe((project : Project) => this.project = project);
  }
}
