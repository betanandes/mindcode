import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { ToastController } from '@ionic/angular'; // IMPORTANTE!

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: false
})
export class RegistrationPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';

  usernameError: string = '';
  emailError: string = '';
  passwordError: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController // AQUI TAMBÉM
  ) {}

  ngOnInit() {}

  validateForm(): boolean {
    this.usernameError = '';
    this.emailError = '';
    this.passwordError = '';
    let valid = true;

    if (!this.username) {
      this.usernameError = 'Campo obrigatório';
      valid = false;
    } else if (!/^[a-zA-Z0-9_]{3,}$/.test(this.username)) {
      this.usernameError = 'Use letras, números ou underline e mínimo 3 caracteres';
      valid = false;
    }

    if (!this.email) {
      this.emailError = 'Campo obrigatório';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.emailError = 'E-mail inválido';
      valid = false;
    }

    if (!this.password) {
      this.passwordError = 'Campo obrigatório';
      valid = false;
    } else if (this.password.length < 6) {
      this.passwordError = 'Mínimo 6 caracteres';
      valid = false;
    }

    return valid;
  }

  async showSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 2500,
      position: 'top',
      color: 'success',
      cssClass: 'custom-toast'
    });
    await toast.present();
  }

  async register() {
    if (!this.validateForm()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      console.log('Usuário registrado:', userCredential.user);

      await this.showSuccessToast();
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Erro ao registrar:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.emailError = 'Este e-mail já está em uso.';
          break;
        case 'auth/invalid-email':
          this.emailError = 'E-mail inválido.';
          break;
        default:
          const toast = await this.toastController.create({
            message: 'Erro ao registrar. Tente novamente.',
            duration: 2500,
            position: 'top',
            color: 'danger',
            cssClass: 'custom-toast'
          });
          await toast.present();
      }
    }
  }
}
