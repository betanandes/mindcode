import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  fadeOut = false;

  constructor(private router: Router) {}

  ionViewDidEnter() {
    // Espera 1 segundo e inicia fade-out
    setTimeout(() => {
      this.fadeOut = true;
      
      // Depois de 800ms, redireciona
      setTimeout(() => {
        this.router.navigateByUrl('/login-options');
      }, 800);
    }, 1500); // Espera inicial de 1.5s na logo
  }
}