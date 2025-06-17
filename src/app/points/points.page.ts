import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage {
  pontuacao: string = '0';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params['score']) {
        const novaPontuacao = Number(params['score']) || 0;
        const pontuacaoSalva = Number(localStorage.getItem('pontuacaoTotal')) || 0;
        const pontuacaoAtualizada = pontuacaoSalva + novaPontuacao;

        localStorage.setItem('pontuacaoTotal', pontuacaoAtualizada.toString());

        this.pontuacao = String(novaPontuacao);
      }
    });
  }

  goToMainScreen() {
    this.router.navigate(['/main-screen']);
  }
}
