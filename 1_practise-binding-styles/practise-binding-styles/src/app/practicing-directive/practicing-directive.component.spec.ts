import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingDirectiveComponent } from './practicing-directive.component';

describe('PracticingDirectiveComponent', () => {
  let component: PracticingDirectiveComponent;
  let fixture: ComponentFixture<PracticingDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticingDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
