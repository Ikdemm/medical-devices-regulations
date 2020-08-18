import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedDevicesComponent } from './med-devices/med-devices.component';
import { TrademarkComponent } from './trademark/trademark.component';


const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'medical-devices',
        component: MedDevicesComponent
    },
    {
        path: 'trademark',
        component: TrademarkComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
