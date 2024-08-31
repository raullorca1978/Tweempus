import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/auth-guard';

const dashboardRoutes: Routes = [
    { path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardRoutingModule { }
