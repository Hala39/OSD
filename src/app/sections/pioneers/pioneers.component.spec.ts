import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneersComponent } from './pioneers.component';

describe('PioneersComponent', () => {
  let component: PioneersComponent;
  let fixture: ComponentFixture<PioneersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PioneersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PioneersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
