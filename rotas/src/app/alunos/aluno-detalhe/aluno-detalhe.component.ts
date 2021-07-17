import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno!: Aluno;
  inscricao: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService

  ) { }

  editarContato(){
    this.router.navigate(['/alunos',this.aluno.id,'editar']);
  }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any)=>{
    //     let id = params['id'];

    //     this.aluno = this.alunosService.getAluno(id);
    //   }
    // );

    console.log('ngOnInit: AlunoDetalheComponent');
    

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo Objeto Aluno do Resolver');
        this.aluno = info.aluno;
        
      }
    );
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

}
