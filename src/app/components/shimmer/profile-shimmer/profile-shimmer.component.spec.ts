import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShimmerComponent } from './profile-shimmer.component';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

describe('ProfileShimmerComponent', () => {
  let component: ProfileShimmerComponent;
  let fixture: ComponentFixture<ProfileShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileShimmerComponent],
      imports:[NgxSkeletonLoaderComponent]
    });
    fixture = TestBed.createComponent(ProfileShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
