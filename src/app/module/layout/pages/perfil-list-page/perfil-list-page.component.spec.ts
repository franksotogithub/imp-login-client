import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilListPageComponent } from './perfil-list-page.component';

describe('PerfilListPageComponent', () => {
  let component: PerfilListPageComponent;
  let fixture: ComponentFixture<PerfilListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
