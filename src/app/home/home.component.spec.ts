import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize displayText as an empty string', () => {
    expect(component.displayText).toBe('');
  });

  it('should display the full text after typing completes', fakeAsync(() => {
    const totalTypingTime = component.fullText.length * component.typingSpeed;
    component.ngOnInit();
    tick(totalTypingTime + 10);
    fixture.detectChanges();
    expect(component.displayText).toBe(component.fullText);
  }));

  it('should gradually build displayText over time', fakeAsync(() => {
    const halfTime = Math.floor(component.fullText.length / 2) * component.typingSpeed;
    component.ngOnInit();
    tick(halfTime);
    fixture.detectChanges();
    expect(component.displayText.length).toBeLessThan(component.fullText.length);
    expect(component.displayText).not.toBe('');
  }));
});
