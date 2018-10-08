import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgstyleComponent } from './diretiva-ngstyle.component';

describe('DiretivaNgstyleComponent', () => {
  let component: DiretivaNgstyleComponent;
  let fixture: ComponentFixture<DiretivaNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(`should  have as title 'apps works!'`,async(()=>{
  //   const fixture = TestBed.createComponent(DiretivaNgstyleComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('apps!');
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
