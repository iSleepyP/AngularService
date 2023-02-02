import { Injectable } from "@angular/core";
import { CounterServices } from "./counter.service";
 
@Injectable()//use for using service in service
export class UsersServices{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

   constructor(private counterService:CounterServices){}

    toInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }

    toActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementInactiveToActive();
    }

}