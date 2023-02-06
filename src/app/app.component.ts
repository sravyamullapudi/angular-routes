import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routes';

  headerOptions: any[] = [
    {
      name: 'Home',
      path: 'home'
    },
    {
      name: 'About',
      path: 'about'
    },
    {
      name: 'Contact',
      path: 'contact'
    },
    {
      name: 'Heros',
      path: 'heros'
    }
  ]
}
