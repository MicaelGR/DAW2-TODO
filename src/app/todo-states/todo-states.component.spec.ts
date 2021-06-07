import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoStatesComponent } from './todo-states.component';

describe('TodoStatesComponent', () => {
  let component: TodoStatesComponent;
  let fixture: ComponentFixture<TodoStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
