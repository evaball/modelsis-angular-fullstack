import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeProductComponent } from './create-type-product.component';

describe('CreateTypeProductComponent', () => {
  let component: CreateTypeProductComponent;
  let fixture: ComponentFixture<CreateTypeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
