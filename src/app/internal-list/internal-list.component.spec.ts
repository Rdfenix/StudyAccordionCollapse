import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalListComponent } from './internal-list.component';

describe('InternalListComponent', () => {
  let component: InternalListComponent;
  let fixture: ComponentFixture<InternalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
