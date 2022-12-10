import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorNoticiasComponent } from './contenedor-noticias.component';

describe('ContenedorNoticiasComponent', () => {
  let component: ContenedorNoticiasComponent;
  let fixture: ComponentFixture<ContenedorNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
