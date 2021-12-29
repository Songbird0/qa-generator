import {Component, Input, OnInit} from '@angular/core';
import {QAModel} from "../qa/qa.component";

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

  addQA(){
    let listSize = this.model.qaList.length;
    this.model.qaList.push(new QAModel(listSize));
  }
  removeQA(id: number){
    let oldList = this.model.qaList;
    this.model.qaList = oldList.filter(qa => qa.id !== id);
  }

  getInputValue($event: Event): string {
    return ($event.target as HTMLInputElement).value;
  }

  updateModelName($event: Event) {
    this.model.name = this.getInputValue($event);
  }
}
