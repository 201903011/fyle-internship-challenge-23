import { Component } from '@angular/core';

@Component({
  selector: 'app-repository-shimmer',
  templateUrl: './repository-shimmer.component.html',
})
export class RepositoryShimmerComponent {
  bgColor = '#c9c9c9';
  skeletonTheme = {
    'background-color': this.bgColor,
    height: '100%',
    width: '100%',
    'border-radius': '20px',
  };
  skeletonThemeCircle = {
    'background-color': this.bgColor,
    height: '200px  ',
    width: '200px',
    'border-radius': '50%',
  };
  animation = "progress-dark"
 
}
