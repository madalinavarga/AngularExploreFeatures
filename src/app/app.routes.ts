import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '**', component: HomeComponent, canActivate:[authGuard] }
];
