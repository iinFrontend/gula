import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GulaComponent } from './gula.component';

describe('GulaComponent', () => {
  let component: GulaComponent;
  let fixture: ComponentFixture<GulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GulaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GulaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
