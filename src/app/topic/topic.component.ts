import {Component, Input, OnInit} from '@angular/core';
import {QaComponent, QAModel} from "../qa/qa.component";
import {FormControl} from "@angular/forms";

export class TopicModel {
  id: number;
  name: String;
  qaList: Array<QAModel>;

  constructor(id: number) {
    this.id = id;
    this.name = 'Le nom de ton topic ici';
    this.qaList = [new QAModel(0)];
  }

  addQA(){}
  removeQA(id: number) {}

}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input()
  model: TopicModel = new TopicModel(0);

  constructor() {}

  ngOnInit(): void {

  }

  addQA(){}
  removeQA(){}

  getInputValue($event: Event): string {
    return getValue($event);
  }

  updateModelName($event: Event) {
    this.model.name = this.getInputValue($event);
  }
}

function getValue($event: Event): string {
  return ($event.target as HTMLInputElement).value;
}
