import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryShimmerComponent } from './repository-shimmer.component';

describe('RepositoryShimmerComponent', () => {
  let component: RepositoryShimmerComponent;
  let fixture: ComponentFixture<RepositoryShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryShimmerComponent]
    });
    fixture = TestBed.createComponent(RepositoryShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
