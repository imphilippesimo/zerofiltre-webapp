import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [{ path: '', component: PortfolioComponent }, { path: 'portfolio/home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'portfolio/solution', loadChildren: () => import('./solution/solution.module').then(m => m.SolutionModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
