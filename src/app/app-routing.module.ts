import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about/about.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { CssComponent } from './components/css/css.component';
import { HerosComponent } from './components/heros/heros/heros.component';
import { HomeComponent } from './components/home/home/home.component';
import { PipeBuiltinsComponent } from './components/pipe-builtins/pipe-builtins.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'heros',
    component: HerosComponent
  },
  {
    path: 'pipes',
    component: PipeBuiltinsComponent
  },
  {
    path: 'css',
    component: CssComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
