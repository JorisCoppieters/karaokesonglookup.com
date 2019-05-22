import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });
