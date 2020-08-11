import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedHomeComponent } from './med-home/med-home.component';
import { MedDevicesRoutingModule } from './med-devices-routing.module';


@NgModule({
  declarations: [MedHomeComponent],
  imports: [
    CommonModule,
    MedDevicesRoutingModule
  ]
})

export class MedDevicesModule { }
