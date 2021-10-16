import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { list } from '../interfaces/data.model';
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
        const resp = Object.entries(data);  
        this.guardarDatos(resp);
        
        return resp;
      })
    );

  }

  async guardarDatos(respuesta: any): Promise<void> {
    await this.storage.set('data', respuesta);    
  }
  
  async getDatos(): Promise<list[]> {
    const resp = await this.storage.get('data');
    console.log("serv", resp);
    return resp
  }  

}
