import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routes';
  showMenu: boolean = false;
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
    },
    {
      name: 'Pipes',
      path: 'pipes'
    },
    {
      name: 'CSS',
      path: 'css'
    }
  ]

  onMenu() {
    this.showMenu = !this.showMenu;
  }
}
