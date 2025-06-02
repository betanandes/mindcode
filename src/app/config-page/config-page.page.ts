import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../auth.service'; // ajuste caminho
import { User, updateProfile } from 'firebase/auth';
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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();

    if (this.currentUser) {
      // Se tiver foto, carrega
      this.avatarUrl = this.currentUser.photoURL || this.avatarUrl;
      this.username = this.currentUser.displayName || '';

      // Você pode carregar o "sobre você" de algum banco, aqui vamos usar localStorage como exemplo
      const aboutStorage = localStorage.getItem('about');
      this.about = aboutStorage || '';

      this.isCustomImage = !!this.currentUser.photoURL;
    }
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
    if (!this.currentUser) return;

    try {
      await updateProfile(this.currentUser, {
        displayName: this.username,
      });

      // Salvar "Sobre você" no localStorage (ou Firestore, se tiver)
      localStorage.setItem('about', this.about);

      alert('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar perfil', error);
      alert('Erro ao salvar o perfil. Tente novamente.');
    }
  }
}
