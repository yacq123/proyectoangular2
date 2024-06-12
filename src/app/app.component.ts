import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { MenuComponent } from './pagina/menu/menu.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ContactosComponent } from './pagina2/contactos/contactos.component';
import { FooterComponent } from './pagina2/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule, MenuComponent, InicioComponent,ContactosComponent,FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoa1';
}
