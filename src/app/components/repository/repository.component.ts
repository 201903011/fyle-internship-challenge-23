import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
})
export class RepositoryComponent {
  @Input() repos: any[] = [];
}
