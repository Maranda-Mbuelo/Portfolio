import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPicturesComponent } from './my-pictures.component';

describe('MyPicturesComponent', () => {
  let component: MyPicturesComponent;
  let fixture: ComponentFixture<MyPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPicturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
