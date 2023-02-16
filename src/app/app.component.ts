import { Component } from '@angular/core';
import { GoogleApiService } from './service/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';

  constructor(private readonly googleApi: GoogleApiService) {


  }

  isLoggedIn() {
    return this.googleApi.isLoggedIn();
  }
}
