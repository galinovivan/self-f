import { HttpService } from './http.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { apiUrl } from '../../consts/api';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';



@Injectable()




export class ProjectService extends HttpService {
    private entityAlias : string = '/projects/';
    constructor(protected http : Http) {
        super(http);
    };
    public getAll() : Observable<Project[]> {
        return this.getApiQuery(`${apiUrl}${this.entityAlias}`);
    }
   public getById(id : number) : Observable<Project> {
        return this.getApiQuery(`${apiUrl}${this.entityAlias}${id}`);
   }

   public getByCategory(cat: string) : Observable<Project[]> {
        return this.getApiQuery(`${apiUrl}${this.entityAlias}${cat}`);
   }

    
}