import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 serverName="Janmajaya";
  serverStatus="The server is offline";
  allowServer= false;
constructor(){
setTimeout(() => {
    this.allowServer=true;
},2000);
}

  ngOnInit(): void {
  }

  onServerMessage(){
    return this.serverStatus="Server get started! the server name is "+this.serverName;
  }
  updateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value; 
  }

}
