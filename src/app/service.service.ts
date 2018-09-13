import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {

  constructor(private _http:Http) { }
  getJsonData(url:string){
    return this._http.get(url).map((res:Response) => res.json())
  }

}

