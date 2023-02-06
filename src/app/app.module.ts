import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HerosComponent } from './components/heros/heros/heros.component';
import { AutofocusDirective } from './directives/autofocus/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HighlightDirective,
    AutofocusDirective,
    HerosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
