import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressivePictureComponent } from './progressive-picture.component';

describe('ProgressivePictureComponent', () => {
  let component: ProgressivePictureComponent;
  let fixture: ComponentFixture<ProgressivePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressivePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressivePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
