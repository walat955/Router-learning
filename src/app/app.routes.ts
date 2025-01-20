import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponentComponent } from './user-component/user-component.component';

export const routes: Routes = [
    {
        path: 'dudu',
        component:HomeComponentComponent,
        title: 'App Home Page',

    },
    {
        path:'user',
        component:UserComponentComponent,
        title: 'User Home Page',
    }
];
