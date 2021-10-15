import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { StoragesService } from './storages.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private storage: StoragesService
  ) { }

  getData(nit: String): Observable<any> {
    return this.http.get(
      `https://prueba-api-c3f85-default-rtdb.firebaseio.com/db-setar/datos.json?orderBy="nit"&equalTo="${nit}"`
    ).pipe(
      map((data: HttpResponse<any>) => {
        console.log("=============");        
        console.log(data);
        const resp = Object.entries(data)
        console.log(resp);        
        console.log("=============");        
        this.guardarDatos(resp)
        
        return resp
      })
    );

  }

  async guardarDatos(respuesta: any): Promise<void> {
    await this.storage.set('data', respuesta);    
  } 

}
