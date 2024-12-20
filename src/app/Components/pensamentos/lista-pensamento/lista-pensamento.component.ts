import { PensamentoService } from './../pensamento.service';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { NgFor, NgIf } from '@angular/common';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-lista-pensamento',
  imports: [RouterLink, PensamentoComponent, NgFor, NgIf],
  templateUrl: './lista-pensamento.component.html',
  styleUrl: './lista-pensamento.component.css'
})
export class ListaPensamentoComponent implements OnInit{
  listaPensamentos: Pensamento[] = [];
  constructor(private service: PensamentoService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
