import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaFormPageComponent } from './sistema-form-page.component';

describe('SistemaFormPageComponent', () => {
  let component: SistemaFormPageComponent;
  let fixture: ComponentFixture<SistemaFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
