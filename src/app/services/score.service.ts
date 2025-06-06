import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score = 0;

  constructor() {}

  resetScore() {
    this.score = 0;
  }

  addPoints(points: number) {
    this.score += points;
  }

  getScore(): number {
    return this.score;
  }
}
