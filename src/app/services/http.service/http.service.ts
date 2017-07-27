import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { apiUrl } from '../../consts/api';



export abstract class HttpService {
  protected http : Http;
  private entityAlias : string;
  constructor(http : Http, entityAlias : string) {
    this.http = http;
    this.entityAlias = entityAlias;
  };
  protected getApiQuery(queryParam = null) : Observable<any> {
    return this.http.get(`${apiUrl}${this.entityAlias}${queryParam}`)
      .map((response : Response) => {
        return response.json().data;
      })
  }
}
