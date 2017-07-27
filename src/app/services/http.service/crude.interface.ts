import { Observable } from 'rxjs/Observable';

export interface CrudeInterface {
   getAll() : Observable<Object[]>;
   getById(id) : Observable<Object>;
   create(data) : boolean;
   update(id) : boolean;
   remove(id) : boolean;
}
