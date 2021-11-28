import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFormPageComponent } from './perfil-form-page.component';

describe('PerfilFormPageComponent', () => {
  let component: PerfilFormPageComponent;
  let fixture: ComponentFixture<PerfilFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
