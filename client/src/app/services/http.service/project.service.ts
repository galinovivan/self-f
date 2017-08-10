import { HttpService } from './http.service';
import { CrudeInterface } from "./crude.interface"
import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { projectEntityAlias } from '../../consts/api';
import { Observable } from 'rxjs/Observable';



@Injectable()




export class ProjectService implements CrudeInterface {

  /**
   * @param {HttpService} httpService
   */
    constructor(private httpService : HttpService) {
      this.httpService.setApiUrl(projectEntityAlias);
  };

  /**
   * @returns {Observable<Project[]>}
   */
  public getAll() : Observable<Project[]> {
      return this.httpService.getApiQuery();
    };

  /**
   * @param id
   * @returns {Observable<Project>}
   */
    public getById(id) : Observable<Project> {
      return this.httpService.getApiQuery(id);
    };

  /**
   * @param {Project} project
   * @returns {boolean}
   */
    public create(project : Project) : boolean {
        return this.httpService.postApiQuery(project);
    };

  /**
   * @param id
   * @returns {boolean}
   */
  public update(id) : boolean {
      return this.httpService.postApiQuery(id);
    };

  /**
   * @param id
   * @returns {boolean}
   */
    public remove(id) : boolean {
      return this.httpService.deleteApiQuery(id);
    };
}
