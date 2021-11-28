import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaListPageComponent } from './sistema-list-page.component';

describe('SistemaListPageComponent', () => {
  let component: SistemaListPageComponent;
  let fixture: ComponentFixture<SistemaListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
