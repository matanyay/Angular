import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalersComponent } from './wholesalers.component';

describe('WholesalersComponent', () => {
  let component: WholesalersComponent;
  let fixture: ComponentFixture<WholesalersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesalersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesalersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
