import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './pagina/menu/menu.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ContactosComponent } from './pagina2/contactos/contactos.component';
import { FooterComponent } from './pagina2/footer/footer.component';

export const routes: Routes = [
    {
        path: 'menu',component: MenuComponent
    },
    {
        path: 'inicio', component: InicioComponent
    },
    {
        path: 'contactos', component: ContactosComponent
    },
    {
        path: 'footer', component: FooterComponent
    }
];
