import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoClosedListComponent } from './todo-closed-list.component';

describe('TodoClosedListComponent', () => {
  let component: TodoClosedListComponent;
  let fixture: ComponentFixture<TodoClosedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoClosedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoClosedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
