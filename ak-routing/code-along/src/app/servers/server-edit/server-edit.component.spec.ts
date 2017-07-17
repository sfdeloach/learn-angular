import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEditComponent } from './server-edit.component';

describe('ServerEditComponent', () => {
  let component: ServerEditComponent;
  let fixture: ComponentFixture<ServerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
