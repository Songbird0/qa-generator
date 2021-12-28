import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

