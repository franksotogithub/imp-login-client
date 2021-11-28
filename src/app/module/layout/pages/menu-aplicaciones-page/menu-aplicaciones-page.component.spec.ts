import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAplicacionesPageComponent } from './menu-aplicaciones-page.component';

describe('MenuAplicacionesPageComponent', () => {
  let component: MenuAplicacionesPageComponent;
  let fixture: ComponentFixture<MenuAplicacionesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAplicacionesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAplicacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
