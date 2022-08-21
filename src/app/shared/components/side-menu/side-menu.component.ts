import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  routes: MenuItem[] = [
    {
      url: '/basic',
      name: 'Basic',
    },
    {
      url: '/dynamic',
      name: 'Dynamic',
    },
    {
      url: '/switches',
      name: 'Switches',
    },
  ];
}
