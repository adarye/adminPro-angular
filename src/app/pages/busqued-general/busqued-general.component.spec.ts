import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedGeneralComponent } from './busqued-general.component';

describe('BusquedGeneralComponent', () => {
  let component: BusquedGeneralComponent;
  let fixture: ComponentFixture<BusquedGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
