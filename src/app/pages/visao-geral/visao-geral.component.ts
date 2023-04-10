import { Component, OnInit } from '@angular/core';
import { VisaoGeralService } from './visao-geral.service';
import { AppService } from 'src/app/app.service';
import { Usuario } from 'src/app/models/Usuario.model';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  constructor(private visaoGeralService: VisaoGeralService,
              public appService: AppService,
              private router: Router) {}

  ngOnInit(): void {
    this.getDados();
  }

  async getDados() {
    const usuarioLogado: Usuario = await lastValueFrom(this.visaoGeralService.getUsuarioLogado());
    if (!usuarioLogado) this.router.navigate(['/login']);
    this.appService.usuarioLogado = usuarioLogado;

    // Obter os dados para exibição
  }
  
}
