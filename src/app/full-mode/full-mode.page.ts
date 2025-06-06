import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-full-mode',
  templateUrl: './full-mode.page.html',
  styleUrls: ['./full-mode.page.scss'],
})
export class FullModePage {

  timeLeft: number = 15;
  interval: any;
  score: number = 0;
  currentQuestionIndex = 0;
  selectedOption: string | null = null;

  questions = [
    {
      question: 'O que um(a) dev full-stack precisa saber?',
      options: [
        { letter: 'A', text: 'Só front-end' },
        { letter: 'B', text: 'Front-end e back-end' },
        { letter: 'C', text: 'Apenas banco de dados' }
      ],
      correct: 'B'
    },
    {
      question: 'Qual ferramenta é usada para versionar código, essencial para projetos full-stack?',
      options: [
        { letter: 'A', text: 'Git ' },
        { letter: 'B', text: 'Docker' },
        { letter: 'C', text: 'Canva' }
      ],
      correct: 'A'
    },
    {
      question: 'Qual dessas stacks é considerada full-stack?',
      options: [
        { letter: 'A', text: 'HTML + CSS' },
        { letter: 'B', text: 'MERN (MongoDB, Express, React, Node)' },
        { letter: 'C', text: 'SQL + PHP' }
      ],
      correct: 'B'
    },
    {
      question: 'No fluxo full-stack, qual é o papel do ORM (Object Relational Mapping)?',
      options: [
        { letter: 'A', text: 'Aumentar performance do front-end' },
        { letter: 'B', text: 'Traduzir objetos em queries SQL' },
        { letter: 'C', text: 'Criar rotas em APIs' }
      ],
      correct: 'B'
    },
    {
      question: 'Qual o benefício de usar arquitetura MVC em projetos full-stack?',
      options: [
        { letter: 'A', text: ' Evita a repetição de código HTML' },
        { letter: 'B', text: 'Organiza melhor o código separando responsabilidades' },
        { letter: 'C', text: 'Facilita a importação de bibliotecas' }
      ],
      correct: 'B'
    }
  ];

  constructor(private navCtrl: NavController) {}

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

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

    // Lógica de pontuação
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
