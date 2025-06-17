import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../auth.service'; // ajuste caminho
import { User, updateProfile } from 'firebase/auth';
import { AlertController } from '@ionic/angular';
// import { auth } from '../../firebase';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.page.html',
  styleUrls: ['./config-page.page.scss'],
  standalone: false
})
export class ConfigPagePage implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  avatarUrl: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  isCustomImage: boolean = false;

  currentUser: User | null = null;

  username: string = '';
  about: string = '';

  constructor(private authService: AuthService, private alertCtrl: AlertController) {}


  ngOnInit() {
  this.currentUser = this.authService.getUser();

  // Carregar do Firebase (se estiver logado)
  if (this.currentUser) {
    this.avatarUrl = this.currentUser.photoURL || localStorage.getItem('fotoUsuario') || this.avatarUrl;
    this.username = this.currentUser.displayName || localStorage.getItem('nomeUsuario') || '';
  } else {
    // Carregar apenas do localStorage
    this.avatarUrl = localStorage.getItem('fotoUsuario') || this.avatarUrl;
    this.username = localStorage.getItem('nomeUsuario') || '';
  }

  this.about = localStorage.getItem('about') || '';
  this.isCustomImage = this.avatarUrl !== 'https://ionicframework.com/docs/img/demos/avatar.svg';
}


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = async (e: any) => {
        this.avatarUrl = e.target.result;
        this.isCustomImage = true;

        if (this.currentUser) {
          // Atualiza o avatar no Firebase Auth
          await updateProfile(this.currentUser, { photoURL: this.avatarUrl });
        }
      };

      reader.readAsDataURL(file);
    }
  }

  removePhoto(): void {
    this.avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';
    this.isCustomImage = false;
    this.fileInput.nativeElement.value = '';

    if (this.currentUser) {
      updateProfile(this.currentUser, { photoURL: null });
    }
  }

 async saveProfile() {
  if (this.currentUser) {
    try {
      await updateProfile(this.currentUser, {
        displayName: this.username,
        photoURL: this.avatarUrl
      });
    } catch (error) {
      console.error('Erro ao atualizar no Firebase:', error);
    }
  }

  // Salvar localmente
  localStorage.setItem('nomeUsuario', this.username);
  localStorage.setItem('fotoUsuario', this.avatarUrl);
  localStorage.setItem('about', this.about);


  this.showSuccessAlert();
}


async showSuccessAlert() {
  const alert = await this.alertCtrl.create({
    header: '✅ Sucesso!',
    message: 'Seu perfil foi atualizado com sucesso!',
    cssClass: 'custom-alert',
    buttons: ['OK'],
    mode: 'ios',
    animated: true
  });

  await alert.present();
}

}
