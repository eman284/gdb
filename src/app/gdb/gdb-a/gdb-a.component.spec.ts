import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdbAComponent } from './gdb-a.component';

describe('GdbAComponent', () => {
  let component: GdbAComponent;
  let fixture: ComponentFixture<GdbAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdbAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdbAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
