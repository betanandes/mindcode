import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async login() {
    if (!this.email || !this.password) {
      this.presentToast('Preencha todos os campos!');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
      console.log('Usuário logado:', userCredential.user);
      this.presentToast('Login realizado com sucesso!');
      this.router.navigate(['/main-screen']);
    } catch (error: any) {
      console.error('Erro ao logar:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          this.presentToast('Usuário não encontrado. Verifique o e-mail.');
          break;
        case 'auth/wrong-password':
          this.presentToast('Senha incorreta.');
          break;
        case 'auth/invalid-email':
          this.presentToast('E-mail inválido.');
          break;
        default:
          this.presentToast('Erro ao logar. Tente novamente.');
      }
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      cssClass: 'custom-toast'
    });
    toast.present();
  }
}
