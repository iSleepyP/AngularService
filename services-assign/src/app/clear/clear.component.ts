import { Component } from '@angular/core';
import { UsersServices } from '../users.services';
import { ClearService } from '../clear.service';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css']
})
export class ClearComponent {
  constructor(private clearService:ClearService){}  
  
  clearAll(){
      this.clearService.toClearAll();
      
    }
}
