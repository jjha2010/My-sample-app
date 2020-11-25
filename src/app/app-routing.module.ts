import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: AppComponent},
  {path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
