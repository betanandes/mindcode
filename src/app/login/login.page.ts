import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  async login() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
      console.log('Usuário logado:', userCredential.user);
      alert('Login realizado com sucesso!');
      this.router.navigate(['/main-screen']); // ou a tela inicial do app
    } catch (error: any) {
      console.error('Erro ao logar:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          alert('Usuário não encontrado. Verifique o e-mail.');
          break;
        case 'auth/wrong-password':
          alert('Senha incorreta.');
          break;
        case 'auth/invalid-email':
          alert('E-mail inválido.');
          break;
        default:
          alert('Erro ao logar. Tente novamente.');
      }
    }
  }

}
