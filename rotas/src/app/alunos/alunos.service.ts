import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'Jayme Augusto', email: 'aluno01@email.com'},
    { id: 2, nome: 'Fabíola Prudente', email: 'aluno02@email.com'},
    { id: 3, nome: 'Regiane Madeira', email: 'aluno03@email.com'},
    { id: 4, nome: 'Osvaldo Fidelis', email: 'aluno04@email.com'},
    { id: 5, nome: 'Otávio Augusto', email: 'aluno05@email.com'},
    { id: 6, nome: 'Gabriel Prudente', email: 'aluno06@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
