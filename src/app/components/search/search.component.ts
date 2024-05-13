import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() searchResult = new EventEmitter<any>();

  username: string = '';

  emitSearchResult(): void {
    this.searchResult.emit({
      username: this.username,
    });
  }
}
