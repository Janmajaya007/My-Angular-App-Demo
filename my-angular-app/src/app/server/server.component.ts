import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
  
serverId: number=12;
status:String="offline";
serverStatus(){
    return this.status;
}

}