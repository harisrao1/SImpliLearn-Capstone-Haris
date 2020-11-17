import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpageComponent } from './userpage.component';

describe('UserpageComponent', () => {
  let component: UserpageComponent;
  let fixture: ComponentFixture<UserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserpageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'node-express-angular'`, () => {
    const fixture = TestBed.createComponent(UserpageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('node-express-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UserpageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('node-express-angular app is running!');
  });
});
