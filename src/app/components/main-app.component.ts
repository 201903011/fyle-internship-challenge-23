import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
})
export class MainAppComponent {
 
  @ViewChild('searchResultSection', { static: false })
  searchResultSection: ElementRef | null = null;

  username: string = '';

  repos: any[] = [];
  totalRepoCount: number = 0;
  currentPage: number = 1;
  perPage: number = 10;
  isValidUser: boolean = false;
  searchClicked: boolean = false;
  searchedUser: User | undefined;

  private resetState(): void {
    this.repos = [];
    this.totalRepoCount = 0;
    this.currentPage = 1;
    this.isValidUser = false;
    this.searchedUser = undefined;
  }

  loadingRepo: boolean = false;
  loadingUser: boolean = false;

  itemsPerPageOptions: number[] = [10, 15, 25, 50, 100];

  constructor(private githubService: ApiService) {}

  private resultCache: { [key: string]: any[] } = {};

  private isDataInCache(
    username: string,
    page: number,
    perPage: number
  ): boolean {
    const key = `${username}_${page}_${perPage}`;
    return this.resultCache.hasOwnProperty(key);
  }

  private getDataFromCache(
    username: string,
    page: number,
    perPage: number
  ): any {
    const key = `${username}_${page}_${perPage}`;
    return this.resultCache[key];
  }

  // Method to store data in the cache
  private setDataInCache(
    username: string,
    page: number,
    perPage: number,
    data: any
  ): void {
    const key = `${username}_${page}_${perPage}`;
    this.resultCache[key] = data;
  }


  searchUser(result: any): void {
    this.username = result.username;
    if (this.username.length) {
      this.searchClicked = true;
      this.resetState();
      this.searchUserDetails();
      this.searchUserRepositories();
    } else {
      window.alert('enter valid name');
    }
  }

  searchUserDetails(): void {
    this.loadingUser = true;
    this.githubService.getUser(this.username).subscribe({
      next: (user: User) => {
        this.totalRepoCount = user.public_repos;
        this.searchedUser = user;
        this.isValidUser = true;
        this.loadingUser = false;
      },
      error: (error) => {
        this.isValidUser = false;
        this.loadingUser = false;
        console.error('Error loading user details:', error);
        this.handleError('Error loading user details. Please try again.');
      },
    });
  }


  searchUserRepositories(): void {
    if (this.isDataInCache(this.username, this.currentPage, this.perPage)) {
      this.repos = this.getDataFromCache(
        this.username,
        this.currentPage,
        this.perPage
      );
      this.loadingRepo = false;
      this.scrollToSearchResult();
    } else {
      this.loadingRepo = true;
      this.githubService
        .getUserRepos(this.username, this.currentPage, this.perPage)
        .subscribe({
          next: (repos) => {
            this.repos = repos;
            this.loadingRepo = false;
            this.scrollToSearchResult();

            this.setDataInCache(
              this.username,
              this.currentPage,
              this.perPage,
              repos
            );
          },
          error: (error) => {
            this.repos = [];
            this.isValidUser = false;
            this.loadingRepo = false;
            this.scrollToSearchResult();
            console.error('Error loading repositories:', error);
            this.handleError('Error loading repositories. Please try again.');
          },
        });
    }
  }

  private handleError(errorMessage: string): void {
    console.log(errorMessage);
  }

  private scrollToSearchResult(): void {
    if (this.searchResultSection && this.searchResultSection.nativeElement) {
      this.searchResultSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  updateItemsPerPage(itemsPerPage: number): void {
    this.perPage = itemsPerPage;
    this.currentPage = 1;
    this.searchUserRepositories();
  }

  updateCurrentPage(page: number): void {
    this.currentPage = page;
    this.searchUserRepositories();
  }
}
