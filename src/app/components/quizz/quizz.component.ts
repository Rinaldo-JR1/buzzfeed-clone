import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz-questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  title: string = '';

  question: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;
      this.question = quizz_questions.questions;
      this.questionSelected = this.question[this.questionIndex];
      this.questionIndex = 0;
      this.questionMaxIndex = this.question.length;
      console.log(this.questionIndex);
      console.log(this.questionMaxIndex);
    }
  }
  choice(value: string) {
    this.answers.push(value);
    console.log(this.answers);
    this.nextStep()
  }
  async nextStep() {
    this.questionIndex++;
    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.question[this.questionIndex];
    } else {
      this.finished = true
    }
  }
}
