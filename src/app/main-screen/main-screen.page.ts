import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  pontuacaoTotal: number = 0;

  constructor() {}

  ngOnInit() {
    this.carregarPontuacao();
  }

  ionViewWillEnter() {
    this.carregarPontuacao();
  }

  carregarPontuacao() {
    const pontuacao = localStorage.getItem('pontuacaoTotal');
    this.pontuacaoTotal = pontuacao ? Number(pontuacao) : 0;
  }
}
