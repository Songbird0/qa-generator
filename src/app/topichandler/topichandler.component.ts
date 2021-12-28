import { Component, OnInit } from '@angular/core';
import {TopicModel} from "../topic/topic.component";

@Component({
  selector: 'app-topichandler',
  templateUrl: './topichandler.component.html',
  styleUrls: ['./topichandler.component.css']
})
export class TopichandlerComponent implements OnInit {

  topicModelList: Array<TopicModel> = [new TopicModel(0)];

  constructor() { }

  ngOnInit(): void {
  }

  addTopic() {
    let listLength = this.topicModelList.length;
    this.topicModelList.push(new TopicModel(listLength));
  }

  removeTopic(id: number){}

}
