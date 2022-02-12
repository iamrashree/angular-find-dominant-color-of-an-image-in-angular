import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesService } from './services/images.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FindDominantColorComponent } from './pages/find-dominant-color/find-dominant-color.component';
import { SearchComponent } from './pages/find-dominant-color/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    FindDominantColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
