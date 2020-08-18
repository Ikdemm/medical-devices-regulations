import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedDevicesComponent } from './med-devices.component';

describe('MedDevicesComponent', () => {
  let component: MedDevicesComponent;
  let fixture: ComponentFixture<MedDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
