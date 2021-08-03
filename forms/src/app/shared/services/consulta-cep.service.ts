import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private http: HttpClient
  ) { }

  public consultaCEP(cep: string): Observable<any>{

    cep = cep.replace(/\D/g,'');

    if(cep != ""){
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){

        return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
      }
    }

    return of({});
  }
}