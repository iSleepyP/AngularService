import { Injectable } from "@angular/core";
import { UsersServices } from "./users.services";
import { CounterServices } from "./counter.service";

@Injectable()
export class ClearService{

constructor(private usersService:UsersServices,private counterService:CounterServices){}

    toClearAll(){
        this.usersService.activeUsers = ['Max', 'Anna'];
        this.usersService.inactiveUsers = ['Chris', 'Manu'];
        this.counterService.activeToInactiveCounter=0;
        this.counterService.inactiveToActiveCounter=0;
        
    }
}