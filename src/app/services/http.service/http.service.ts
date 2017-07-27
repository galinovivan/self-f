import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw";
import { apiUrl } from '../../consts/api';



export abstract class HttpService {
  protected http : Http;
  private entityAlias : string;

  /**
   * @param {Http} http
   * @param {string} entityAlias
   */
  constructor(http : Http, entityAlias : string) {
    this.http = http;
    this.entityAlias = entityAlias;
  };

  /**
   * @param {any} queryParam
   * @returns {Observable<any>}
   */
  protected getApiQuery(queryParam : any = null) : Observable<any> {
    return this.http.get(`${apiUrl}${this.entityAlias}${queryParam}`)
      .map((response : Response) => {
        return response.json().data;
      }).catch((error : any) => {
          return Observable.throw(error);
      })
  }
}
