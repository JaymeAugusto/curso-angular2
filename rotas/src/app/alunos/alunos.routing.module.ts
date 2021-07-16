import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';



const alunosRoutes: Routes = [
    { path: 'alunos', component: AlunosComponent, children:[
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent }
    ]}
];

export const AlunosRountingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(alunosRoutes);

// export class AppRoutingModule {
//     static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
//   }
