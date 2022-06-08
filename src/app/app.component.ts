import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdoptPc';
  currentUser!: User;
  fliter:any

  pc = [
    {
      name: 'PC1',
      description: 'PC1 description',
      image: 'https://www.pcpartpicker.com/wp-content/uploads/2017/10/ASUS-ROG-STRIX-GL503GE-GL503GE-15.jpg',
      price: '100',
      status: 'available'
    },
    {
      name: 'PC2',
      description: 'PC2 description',
      image: 'https://www.pcpartpicker.com/wp-content/uploads/2017/10/ASUS-ROG-STRIX-GL503GE-GL503GE-15.jpg',
      price: '200',
      status: 'available'
    },
    {
       name: 'PC3',
      description: 'PC3 description',
      image: 'https://www.pcpartpicker.com/wp-content/uploads/2017/10/ASUS-ROG-STRIX-GL503GE-GL503GE-15.jpg',
      price: '300',
      status: 'available'
    },
    {
      name: 'PC4',
      description: 'PC4 description',
      image: 'https://www.pcpartpicker.com/wp-content/uploads/2017/10/ASUS-ROG-STRIX-GL503GE-GL503GE-15.jpg',
      price: '400',
      status: 'available'
    },
  ]


  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
