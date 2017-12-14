import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      streetAddress: '',
      unit: '',
      city: '',
      state: '',
      lucky: ''
  }

  display: boolean = false;

  onSubmit() {
    console.log('Submit Clicked!');
    console.log(this.user);
    this.display = true
    this.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        streetAddress: '',
        unit: '',
        city: '',
        state: '',
        lucky: ''
    }
  }
}
