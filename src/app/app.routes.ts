import { Routes } from '@angular/router';
import { CriarPensamentosComponent } from './Components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListaPensamentoComponent } from './Components/pensamentos/lista-pensamento/lista-pensamento.component';
import { ExcluirPensamentoComponent } from './Components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './Components/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
    {path: '', redirectTo: 'listarPensamento', pathMatch: 'full'},
    {path: 'criarPensamento', component: CriarPensamentosComponent},
    {path: 'listarPensamento', component: ListaPensamentoComponent},
    {path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent},
    {path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent}
];
