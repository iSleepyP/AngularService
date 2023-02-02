import { Component } from '@angular/core';
import { UsersServices } from './users.services';
import { ClearService } from './clear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersServices , ClearService]
})
export class AppComponent {
  
  
}
