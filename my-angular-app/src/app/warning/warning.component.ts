import { Component } from "@angular/core";


@Component({
    selector:'app-Warning',
    template: `
        <p class="text-danger">Message= {{ConnectionStatus()}}</p>
    `
})
export class WarningComponent{

    message= "The connection failed try again"
    ConnectionStatus(){
        return this.message;
    }
}