import { HttpService } from './http.service';
import { CrudeInterface } from "./crude.interface"
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { projectEntityAlias } from '../../consts/api';
import { Observable } from 'rxjs/Observable';



@Injectable()




export class ProjectService extends HttpService implements CrudeInterface {
    constructor(protected http : Http) {
        super(http, projectEntityAlias);
    };
    public getAll() : Observable<Project[]> {
      return this.getApiQuery();
    }
    public getById(id) : Observable<Project> {
      return this.getApiQuery(id);
    }
    public create(project : Project) : boolean {
      return true;
    }
    public update() : boolean {
      return true;
    }
    public remove(id) : boolean {
      return true;
    }
}
