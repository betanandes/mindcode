import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-back-mode',
  templateUrl: './back-mode.page.html',
  styleUrls: ['./back-mode.page.scss'],
})
export class BackModePage {

  timeLeft: number = 15;
  interval: any;

  questions = [
    {
      question: 'Qual linguagem é comumente usada no back-end para lógica de servidor?',
      options: [
        { letter: 'A', text: 'Python' },
        { letter: 'B', text: 'HTML' },
        { letter: 'C', text: 'CSS' }
      ],
      correct: 'A'
    },
    {
      question: 'Qual desses bancos de dados é relacional?',
      options: [
        { letter: 'A', text: 'MongoDB' },
        { letter: 'B', text: 'MySQL' },
        { letter: 'C', text: 'Firebase' }
      ],
      correct: 'B'
    },
    {
      question: 'O que faz uma API RESTful?',
      options: [
        { letter: 'A', text: 'Cria interfaces gráficas' },
        { letter: 'B', text: 'Manipula dados entre cliente e servidor' },
        { letter: 'C', text: 'Controla a responsividade da página' }
      ],
      correct: 'B'
    },
    {
      question: 'O que é uma requisição HTTP do tipo POST?',
      options: [
        { letter: 'A', text: 'Usada para deletar dados' },
        { letter: 'B', text: 'Usada para enviar dados ao servidor' },
        { letter: 'C', text: 'Usada para buscar arquivos CSS' }
      ],
      correct: 'B'
    },
    {
      question: 'O que significa o status HTTP 500?',
      options: [
        { letter: 'A', text: 'Requisição com sucesso' },
        { letter: 'B', text: 'Erro interno do servidor' },
        { letter: 'C', text: 'Página não encontrada' }
      ],
      correct: 'B'
    }
  ];

  currentQuestionIndex = 0;
  selectedOption: string | null = null;

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    this.resetQuiz();
    this.startTimer();
  }

  startTimer() {
    this.clearTimer();
    this.timeLeft = 15;
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.handleTimeUp();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  handleTimeUp() {
    this.clearTimer();
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.startTimer();
    } else {
      this.finishQuiz();
    }
  }

  selectOption(letter: string) {
    if (this.selectedOption) return;

    this.selectedOption = letter;
    this.clearTimer();

    setTimeout(() => {
      this.selectedOption = null;
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.startTimer();
      } else {
        this.finishQuiz();
      }
    }, 1000);
  }

  resetQuiz() {
    this.clearTimer();
    this.currentQuestionIndex = 0;
    this.selectedOption = null;
    this.timeLeft = 15;
  }

  finishQuiz() {
    this.clearTimer();
    this.navCtrl.navigateForward('/points');
  }
}
