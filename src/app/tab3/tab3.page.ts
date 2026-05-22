import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

import { ProdutoService } from '../services/produto.services';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class Tab3Page implements OnInit {

  produtos: any[] = [];

  mostrar = false;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {

    this.produtoService.getProdutos()
      .subscribe((res: any[]) => {

        this.produtos = res;

      });

  }

  toggleProdutos() {

    this.mostrar = !this.mostrar;

  }

}