import { Component, OnInit, inject } from '@angular/core';
import { Pensamento } from '../pensamento';
import { FormsModule } from '@angular/forms';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id:0,
    conteudo:'',
    autoria:'',
    modelo:''
  }

  private service = inject(PensamentoService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe({
      next: pensamento => this.pensamento = pensamento
    })
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe({
      next: _ => this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
