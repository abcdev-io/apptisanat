import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPanierComponent } from './details-panier.component';

describe('DetailsPanierComponent', () => {
  let component: DetailsPanierComponent;
  let fixture: ComponentFixture<DetailsPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
