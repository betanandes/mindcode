import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-front-mode',
  templateUrl: './front-mode.page.html',
  styleUrls: ['./front-mode.page.scss'],
})
export class FrontModePage {
  timeLeft: number = 15;
  interval: any;
  score: number = 0;
  currentQuestionIndex = 0;
  selectedOption: string | null = null;

  questions = [
    {
      question: 'Qual linguagem é usada para estruturar o conteúdo de uma página web?',
      options: [
        { letter: 'A', text: 'CSS' },
        { letter: 'B', text: 'HTML' },
        { letter: 'C', text: 'PHP' }
      ],
      correct: 'B'
    },
    {
      question: 'Para mudar a cor do texto em uma página, usamos qual linguagem?',
      options: [
        { letter: 'A', text: 'HTML' },
        { letter: 'B', text: 'CSS' },
        { letter: 'C', text: 'SQL' }
      ],
      correct: 'B'
    },
    {
      question: 'Qual desses frameworks/libraries é usado para criar interfaces com componentes reutilizáveis?',
      options: [
        { letter: 'A', text: 'Flask' },
        { letter: 'B', text: 'React' },
        { letter: 'C', text: 'MongoDB' }
      ],
      correct: 'B'
    },
    {
      question: 'No contexto de Single Page Applications (SPAs), qual técnica permite atualizar partes da página sem recarregar tudo?',
      options: [
        { letter: 'A', text: 'AJAX' },
        { letter: 'B', text: 'FTP' },
        { letter: 'C', text: 'JSON' }
      ],
      correct: 'A'
    },
    {
      question: 'O que é o "Virtual DOM" usado pelo React?',
      options: [
        { letter: 'A', text: 'Uma versão local do navegador' },
        { letter: 'B', text: 'Uma representação leve do DOM na memória' },
        { letter: 'C', text: 'Um servidor auxiliar que executa scripts' }
      ],
      correct: 'B'
    }
  ];

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

    // Verifica se acertou
    if (letter === this.currentQuestion.correct) {
      this.score += 10;
    }

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
    this.score = 0;
  }

  finishQuiz() {
    this.clearTimer();
    this.navCtrl.navigateForward('/points', {
      queryParams: { score: this.score }
    });
  }
}
