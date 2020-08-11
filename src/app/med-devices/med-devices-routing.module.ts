import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedHomeComponent } from './med-home/med-home.component';

const medDevicesRoutes = [
    { path: '', component: MedHomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(medDevicesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MedDevicesRoutingModule {}