import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'createInvestment', loadComponent:()=>import('./create-investment-detail/create-investment-detail.component').then(m=>m.CreateInvestmentDetailComponent) },
    {path: 'error', loadComponent:()=>import('./error-component/error-component.component').then(m=>m.ErrorComponentComponent)},
    {path: 'page-not-found', loadComponent:()=>import('./page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path:'**', redirectTo:'/page-not-found'}
  ];
