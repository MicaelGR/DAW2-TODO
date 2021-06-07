import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoStateComponent } from './todo-state.component';

describe('TodoStateComponent', () => {
  let component: TodoStateComponent;
  let fixture: ComponentFixture<TodoStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
