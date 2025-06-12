import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  // 🧠 Lista dos usuários no ranking
  ranking: any[] = [];

  constructor() {}

  ngOnInit() {
    // Aqui você vai puxar os dados do Firebase depois
    this.ranking = [
      {
        displayName: 'Top 1',
        photoURL: 'assets/imgs/top1.png',
        score: 1000,
      },
      {
        displayName: 'Usuário 2',
        photoURL: 'assets/imgs/user2.png',
        score: 900,
      },
      {
        displayName: 'Usuário 3',
        photoURL: 'assets/imgs/user3.png',
        score: 900,
      },
      // ... até 10
    ];
  }
}
