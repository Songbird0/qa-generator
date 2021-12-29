import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  @Input('qa-model')
  model!: QAModel;

  constructor() { }

  ngOnInit(): void {
  }

  onQuestionContentUpdate($event: Event): void {
    if (this.model) {
      this.model.question = QaComponent.getInputValue($event);
    }
    else {
      throw Error(`Unreachable exception: this.model is ${this.model}`);
    }
  }
  onAnswerContentUpdate($event: Event): void {
    if (this.model) {
      this.model.answer = QaComponent.getInputValue($event);
    }
    else {
      throw Error(`Unreachable exception: this.model is ${this.model}`);
    }
  }

  private static getInputValue($event: Event): string {
    return ($event.target as HTMLInputElement).value;
  }

}

export class QAModel {
  id: number;
  question: string;
  answer: string;

  constructor(id: number) {
    this.id = id;
    this.question = 'question';
    this.answer = 'reponse';
  }
}

