import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
    // { path: 'cursos', component: CursosComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);

// export class AppRoutingModule {
//     static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
//   }
