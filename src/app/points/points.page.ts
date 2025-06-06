import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage {
  pontuacao: string = '0';  // inicializa com '0' ao invés de '000'

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params['score']) {
        // Garante que pontuacao seja string e formata se quiser (ex: sempre 2 dígitos)
        this.pontuacao = String(params['score']);
      }
    });
  }

  goToMainScreen() {
    this.router.navigate(['/main-screen']);
  }
}
