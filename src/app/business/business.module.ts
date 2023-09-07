import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormComponent,
    DetailsComponent
  ],
  exports: [
    FormComponent,
    DetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class BusinessModule { }
