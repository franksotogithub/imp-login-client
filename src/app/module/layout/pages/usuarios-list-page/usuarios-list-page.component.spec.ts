import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListPageComponent } from './usuarios-list-page.component';

describe('UsuariosListPageComponent', () => {
  let component: UsuariosListPageComponent;
  let fixture: ComponentFixture<UsuariosListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
