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
import { CustomIfDirective } from './directives/custom-if/custom-if.directive';
import { PipeBuiltinsComponent } from './components/pipe-builtins/pipe-builtins.component';
import { CssComponent } from './components/css/css.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HighlightDirective,
    AutofocusDirective,
    HerosComponent,
    CustomIfDirective,
    PipeBuiltinsComponent,
    CssComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
