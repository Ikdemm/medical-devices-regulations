import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
        path:  '',
        component: HomeComponent,
        children : [
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {
                path: 'home',
                loadChildren: () => import('./home.module').then(mod => mod.HomeModule),
            },
            {
                path: 'medical-devices',
                loadChildren: () => import('../med-devices/med-devices.module').then(mod => mod.MedDevicesModule),
            },
            {
                path: 'trademark',
                loadChildren: () => import('../trademark/trademark.module').then(mod => mod.TrademarkModule),
            }
        ]
    },
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {}