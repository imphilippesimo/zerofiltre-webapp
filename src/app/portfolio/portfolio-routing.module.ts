import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'portfolio/home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'portfolio/solution', loadChildren: () => import('./solution/solution.module').then(m => m.SolutionModule) },
  { path: 'portfolio/specimen', loadChildren: () => import('./specimen/specimen.module').then(m => m.SpecimenModule) },
  { path: 'portfolio/contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
