import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopmonentOneComponent } from './copmonent-one.component';

describe('CopmonentOneComponent', () => {
  let component: CopmonentOneComponent;
  let fixture: ComponentFixture<CopmonentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopmonentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopmonentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
