import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/find-dominant-color/search/search.component';

const routes: Routes = [
  { path: 'find-a-dominant-color', component: SearchComponent },
  { path: '*', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
