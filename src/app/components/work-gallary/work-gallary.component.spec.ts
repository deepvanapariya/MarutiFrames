import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGallaryComponent } from './work-gallary.component';

describe('WorkGallaryComponent', () => {
  let component: WorkGallaryComponent;
  let fixture: ComponentFixture<WorkGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkGallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
