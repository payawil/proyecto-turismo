import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisajesComponent } from './paisajes.component';

describe('PaisajesComponent', () => {
  let component: PaisajesComponent;
  let fixture: ComponentFixture<PaisajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
