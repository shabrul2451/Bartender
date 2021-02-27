import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeropostComponent } from './heropost.component';

describe('HeropostComponent', () => {
  let component: HeropostComponent;
  let fixture: ComponentFixture<HeropostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeropostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeropostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
