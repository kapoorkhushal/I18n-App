import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class BusinessModule { }
