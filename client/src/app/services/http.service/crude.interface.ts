import { Observable } from 'rxjs/Observable';

export interface CrudeInterface {
  /**
   * @returns {Observable<Object[]>}
   */
   getAll() : Observable<Object[]>;

  /**
   * @param id
   * @returns {Observable<Object>}
   */
   getById(id) : Observable<Object>;

  /**
   * @param data
   * @returns {boolean}
   */
   create(data) : boolean;

  /**
   * @param id
   * @returns {boolean}
   */
   update(id) : boolean;

  /**
   * @param id
   * @returns {boolean}
   */
   remove(id) : boolean;
}
