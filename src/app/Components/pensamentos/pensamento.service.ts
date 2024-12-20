import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
 private readonly API = 'http://localhost:3000/pensamentos'
  private http = inject(HttpClient)

  listar(){
    return this.http.get<Pensamento[]>('http://localhost:3000/pensamentos')
  }

  criar(pensamento: Pensamento){
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluir(id:number){
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id:number){
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

   editar(pensamento: Pensamento){
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
   }
}
