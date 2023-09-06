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
    this.user = {
      firstName: "Khushal",
      lastName: "Kapoor",
      email: "khushalkapoor0097@gmail.com",
      contactNumber: 8130189011
    };
  }
  
}
