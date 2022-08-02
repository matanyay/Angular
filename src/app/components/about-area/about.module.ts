import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ColorsService } from 'src/app/services/colors/colors.service';



@NgModule({
  declarations: [
    AboutComponent,
    AddressComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AboutComponent],
  providers:[ColorsService]
})
export class AboutModule { }
