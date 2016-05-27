
import {Component,Input} from 'angular2/core';
import { ErrorsService } from './errors.service';

@Component({
    selector: 'errors',
    template: `
        <div *ngIf = "!!errors">
           <span class="messages" *ngFor="#error of mapOfErrors()" >{{ error }}</span>
        </div>
    `,
    styles:[`
        .messages{
            display: block;
            color : red;
        }
    `],
    providers : [ErrorsService]
    
  
})
export class ErrorsComponent {
    
    messages : {[key:string] : string};
    
    constructor(service : ErrorsService){
        this.messages = service.getMessages();
    }
    
    mapOfErrors () : string [] {  
        return Object.keys(this.errors).map(key=> this.messages[key]).filter(msg => !!msg);
    }
    
    @Input() errors : {[key : string] : any};
} 
