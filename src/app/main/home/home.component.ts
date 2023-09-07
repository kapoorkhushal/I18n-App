import { Component } from '@angular/core';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public user!: User;

  /**
   * defines a new instance
   */
  constructor() { 
    this.user = { };
  }

  /**
   * update details when form values change
   * @param userDetails
   */
  public updateFormDetails(userDetails : User) : void{
    this.user = userDetails;
  }
  
}
