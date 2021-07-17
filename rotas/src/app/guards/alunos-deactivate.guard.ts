import { IformCanDectivate } from './iform-candeactivate';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformCanDectivate> {

    canDeactivate(
        component: IformCanDectivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('guarda de desativação');

        // return component.podeMudarRota();

        return component.podeDesativar();
    }
}