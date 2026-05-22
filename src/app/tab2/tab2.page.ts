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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
export class Tab2Page implements OnInit {

  produtos: any[] = [];

  indice = 0;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {

    this.produtoService.getProdutos()
      .subscribe((res: any[]) => {

        this.produtos = res;

      });

  }

  proximo() {

    if (this.indice < this.produtos.length - 1) {
      this.indice++;
    }

  }

  anterior() {

    if (this.indice > 0) {
      this.indice--;
    }

  }

}