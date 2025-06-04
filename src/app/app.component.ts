import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import { AndroidFullScreen } from '@awesome-cordova-plugins/android-full-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform: Platform, private androidFullScreen: AndroidFullScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Esconde a barra de status em qualquer plataforma
      StatusBar.hide().catch(err => console.log('StatusBar error:', err));

      // Se for Android (e não estiver no navegador), ativa o modo imersivo
      if (this.platform.is('android') && !this.platform.is('mobileweb')) {
        this.androidFullScreen.immersiveMode()
          .then(() => console.log('✅ Modo imersivo ativado no Android'))
          .catch(err => console.error('❌ Erro ao ativar modo imersivo:', err));
      }
    });
  }
}
