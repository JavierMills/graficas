import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { User } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  public Url: string = 'http://localhost:3000/grafica'

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(): Observable<User> {
  return this.http.get<User>(this.Url);
  }

  getUsuariosRedesSocialesDonaData(){
    return this.getUsuariosRedesSociales().pipe(
      delay(1500),
      map( respuesta => {
        const labels = Object.keys(respuesta);
      const values = Object.values(respuesta);
        return {
          labels,values
        }
      })
    )
  }
}
