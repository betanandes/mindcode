import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.page.html',
  styleUrls: ['./config-page.page.scss'],
  standalone: false
})
export class ConfigPagePage implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  avatarUrl: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';

  constructor() { }

  ngOnInit() { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result; // Atualiza a imagem do avatar
      };

      reader.readAsDataURL(file);
    }
  }
}
