import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormPageComponent } from './usuario-form-page.component';

describe('UsuarioFormPageComponent', () => {
  let component: UsuarioFormPageComponent;
  let fixture: ComponentFixture<UsuarioFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
