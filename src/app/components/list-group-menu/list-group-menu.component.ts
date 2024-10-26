import { Component } from '@angular/core';
import { MenuEntry } from '../../shared/interfaces/menu-entry';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuEntry[] = [
    {text: "Movie Datatable ", routerLink: "app-movie-datatable"},
    {text: "Component Output", routerLink: "app-component-output"},
    {text: "Reactive Form", routerLink: "app-reactive-forms"}
  ]
}
