import { HttpService } from './http.service';
import { CrudeInterface } from "./crude.interface"
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { projectEntityAlias } from '../../consts/api';
import { Observable } from 'rxjs/Observable';



@Injectable()




export class ProjectService extends HttpService implements CrudeInterface {
  /**
   * @param {Http} http
   */
    constructor(protected http : Http) {
        super(http, projectEntityAlias);
    };

  /**
   * @returns {Observable<Project[]>}
   */
  public getAll() : Observable<Project[]> {
      return this.getApiQuery();
    };

  /**
   * @param id
   * @returns {Observable<Project>}
   */
    public getById(id) : Observable<Project> {
      return this.getApiQuery(id);
    };

  /**
   * @param {Project} project
   * @returns {boolean}
   */
    public create(project : Project) : boolean {
      return true;
    };

  /**
   *
   * @returns {boolean}
   */
  public update() : boolean {
      return true;
    };

  /**
   * @param id
   * @returns {boolean}
   */
    public remove(id) : boolean {
      return true;
    };
}
