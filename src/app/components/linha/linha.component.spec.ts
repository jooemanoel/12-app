import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaComponent } from './linha.component';

describe('LinhaComponent', () => {
  let component: LinhaComponent;
  let fixture: ComponentFixture<LinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinhaComponent]
    });
    fixture = TestBed.createComponent(LinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
