import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopichandlerComponent } from './topichandler.component';

describe('TopichandlerComponent', () => {
  let component: TopichandlerComponent;
  let fixture: ComponentFixture<TopichandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopichandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopichandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
