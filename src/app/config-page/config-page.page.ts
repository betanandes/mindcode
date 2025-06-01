import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.page.html',
  styleUrls: ['./config-page.page.scss'],
  standalone: false
})
export class ConfigPagePage implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  // URL da imagem do avatar (padrão do Ionic)
  avatarUrl: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';

  // Flag para saber se o usuário escolheu uma imagem personalizada
  isCustomImage: boolean = false;

  constructor() { }

  ngOnInit() { }

  // Quando o usuário seleciona uma imagem
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
        this.isCustomImage = true; // Marca que o avatar foi alterado
      };

      reader.readAsDataURL(file);
    }
  }

  // Quando o usuário clica em "Remover foto"
  removePhoto(): void {
    this.avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg'; // Volta ao padrão
    this.isCustomImage = false;
    this.fileInput.nativeElement.value = ''; // Limpa o input para permitir nova seleção
  }
}
