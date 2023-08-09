import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map-project';

  // OK so ideas for this project:
  // https://medium.com/geekculture/firebase-and-angular-connect-your-frontend-app-to-a-nosql-database-quickies-1-974c298316a9
  // try using the restcountries.com api endpoint
  // and load the info up that I will want to display
  // into a database - when you click on a country display
  // a pop-up showing the country-specific data
  // use firebase to host app
}
