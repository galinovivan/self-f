import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';



export abstract class HttpService {
  protected http : Http;
  constructor(http : Http) {
    this.http = http;
  };  
   abstract getAll();
   abstract getById(id : number);
   getApiQuery(apiUrl : string) : Observable<any> {
        return this.http.get(apiUrl)
        .map((resp: Response) => {
            let dataList = resp.json();
            console.log(resp.json());
            if (dataList instanceof Array) {
               let dataObjects : Object[] = [];

            for (let index in dataList) {
                let dataObject : Object = dataList[index];
                dataObjects.push(dataObject);
                console.log(dataObjects);
            }
            return dataObjects;
        }
        return dataList;
        })
   }
}
