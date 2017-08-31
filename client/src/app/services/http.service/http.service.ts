import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw";
import { apiUrl } from '../../consts/api';
import { HttpInterface } from "./http.interface";



@Injectable()



export class HttpService implements HttpInterface {

  private alias : string;

  private SEPARATE : string = '/';
  /**
   * @param {Http} http
   */
  constructor(private http : Http) {};

  /**
   * @param queryParam
   * @returns {Observable<any>}
   */
  public getApiQuery(queryParam = '') : Observable<any> {
    console.log(`${this.alias}${queryParam}`);
    queryParam = this.injectSeparate(queryParam);
    return this.http.get(`${this.alias}${queryParam}`)
      .map((response : Response) => {
        return response.json();
      }).catch((error : any) => {
          return Observable.throw(error);
      })
    
  }

  /**
   * @param {Object} data
   * @param {any} queryParam
   * @returns {boolean}
   */
  public postApiQuery(data : Object, queryParam = null) : boolean {
    this.http.post(`${this.alias}${queryParam}`, data);
    return true;
  }


  /**
   * @param queryParam
   * @returns {boolean}
   */
  deleteApiQuery(queryParam) : boolean {
    this.http.delete(`${this.alias}${queryParam}`);
    return true;
  }

  /**
   * @param {string} alias
   */
  public setApiUrl(alias : string) : void {
      this.alias = `${apiUrl}${alias}`;
  }
  private injectSeparate(query: string): string {
      if (query != null && query != '') {
        query = this.SEPARATE + query;
      }
      return query; 
  }  
}
