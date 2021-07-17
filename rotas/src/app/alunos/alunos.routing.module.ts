import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';



const alunosRoutes: Routes = [
    { path: '', component: AlunosComponent, 
        canActivateChild: [AlunosGuard],
        children:[
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }

    ]}
];

export const AlunosRountingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(alunosRoutes);

// export class AppRoutingModule {
//     static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
//   }
