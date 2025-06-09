import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  trilhaSelecionada: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.trilhaSelecionada = params['trilha'] || '';
    });
  }

  comecarTrilha() {
    if (this.trilhaSelecionada) {
      this.router.navigate(['/' + this.trilhaSelecionada]);
    } else {
      // fallback: voltar pra tela principal se não tiver trilha
      this.router.navigate(['/main-screen']);
    }
  }
}
