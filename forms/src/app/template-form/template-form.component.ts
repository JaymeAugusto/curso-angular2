import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario : any = {
    nome: null,
    email: null
  }

  onSubmit(form: any){
    console.log(form);

    // console.log(this.usuario);
    
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return { 
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any){
    cep = cep.target.value;
    
    cep = cep.replace(/\D/g,'');

    if(cep != ""){
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(dados => { console.log(dados); });
      }
    }
    
  }

}
