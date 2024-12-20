import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./Components/cabecalho/cabecalho.component";
import { RodapeComponent } from "./Components/rodape/rodape.component";
import { CriarPensamentosComponent } from "./Components/pensamentos/criar-pensamentos/criar-pensamentos.component";
import { FormsModule } from '@angular/forms';
import { ListaPensamentoComponent } from "./Components/pensamentos/lista-pensamento/lista-pensamento.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoteca';
}
