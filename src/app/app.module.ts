import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';

import { ProfileShimmerComponent } from './components/shimmer/profile-shimmer/profile-shimmer.component';
import { RepositoryShimmerComponent } from './components/shimmer/repository-shimmer/repository-shimmer.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { MainAppComponent } from './components/main-app.component';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    PaginationComponent,
    ProfileComponent,
    SearchComponent,
    ProfileShimmerComponent,
    RepositoryShimmerComponent,
    MainAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
