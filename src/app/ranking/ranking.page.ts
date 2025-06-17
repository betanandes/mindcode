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

      this.ranking = [
    {
      displayName: 'LunaShadow',
      photoURL: 'assets/img/user10.jpeg',
      score: 1220,
    },
    { displayName: 'BlazeBelle', photoURL: 'assets/img/user4.jpeg', score: 950 },
    { displayName: 'PixelVixen', photoURL: 'assets/img/user2.jpeg', score: 920 },
    { displayName: 'NovaQueen', photoURL: 'assets/img/user3.jpeg', score: 890 },
    { displayName: 'ArcadeEmpress', photoURL: 'assets/img/user5.jpeg', score: 870 },
    { displayName: 'CyberSiren', photoURL: 'assets/img/user1.jpeg', score: 850 },
    { displayName: 'Valkyra', photoURL: 'assets/img/user6.jpeg', score: 830 },
    { displayName: 'PixelPixie', photoURL: 'assets/img/user7.jpeg', score: 810 },
    { displayName: 'RogueRose', photoURL: 'assets/img/user8.jpeg', score: 790 },
  ];
  }
}
