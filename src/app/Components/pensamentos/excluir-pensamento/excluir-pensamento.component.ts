import { Component, inject, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit {
  private pensamentoService = inject(PensamentoService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }


  ngOnInit(): void {
    const  id = this.route.snapshot.paramMap.get('id')
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe({
      next: pensamento => this.pensamento = pensamento
    })
  }

  excluirPensamento(){
      this.pensamentoService.excluir(this.pensamento.id).subscribe({
        next: _ => this.router.navigate(['/listarPensamento'])
      })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
