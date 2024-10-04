import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUlComponent } from './dropdown-ul.component';

describe('DropdownUlComponent', () => {
  let component: DropdownUlComponent;
  let fixture: ComponentFixture<DropdownUlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownUlComponent]
    });
    fixture = TestBed.createComponent(DropdownUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
