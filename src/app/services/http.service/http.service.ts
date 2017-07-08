/**
 * Created by ivan on 20.06.17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Project } from '../../models/project';




@Injectable()




export class HttpService {
  constructor(private http: Http) {};
  public getProject() : Project[] {
   return [
     {
      id: 1,
      name: "mmm",
      source: "sds",
      image: "sds",
      description: "s",
      category: 'frontend'
    }
   ]
  }
  public getProjectByCategory(category : string) : Project[] {
      if (category = 'frontend') {
        return [
     {
      id: 1,
      name: "mmm",
      source: "sds",
      image: "sds",
      description: "s",
      category: 'frontend'
       }
    ]
  }
  return [
     {
      id: 1,
      name: "mmm",
      source: "sds",
      image: "sds",
      description: "s",
      category: 'backend'
    }
   ]
  }
}
