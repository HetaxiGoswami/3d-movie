import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group8Component } from './group-8.component';

describe('Group8Component', () => {
  let component: Group8Component;
  let fixture: ComponentFixture<Group8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Group8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Group8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
