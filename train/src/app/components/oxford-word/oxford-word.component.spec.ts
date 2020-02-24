import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OxfordWordComponent} from './oxford-word.component';

describe('OxfordWordComponent', () => {
  let component: OxfordWordComponent;
  let fixture: ComponentFixture<OxfordWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OxfordWordComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxfordWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
