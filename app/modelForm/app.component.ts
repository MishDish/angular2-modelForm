import {Component, Output} from 'angular2/core';
import {DialogComponent} from './dialog.component';
import {FormComponent} from './form.component';

@Component({
    selector: 'my-app',
    template: `<h1>Model Form Dialog</h1>
               
               <button (click) ="butClick()"  class="btn btn-default">{{ nameButton }}</button>
               
               <dialogbox   (buttons)="hideDialog($event)" [status]="statusDialog">
                    <div class="form">)
                      <form (validation)="getErrors($event)">
                      </form>
                    </div>
               </dialogbox>
               <br>
              Form Data : {{ formData |  json }}
               <br>
               <br>
              Form Validation : {{ formValid |  json }}
                
    `,
    directives:[DialogComponent,FormComponent]
})
export class AppComponent { 
    statusDialog : boolean;
    nameButton : string = "Open";
    formData: {[key: string] : any};
    formValid  : boolean;
    
    hideDialog($event) : void{
        this.statusDialog = false;
    }
    butClick(){
        this.statusDialog = !this.statusDialog; 
        this.nameButton = (this.statusDialog) ? 'Close' : 'Open';
    }     
    getErrors($event){
       
       	this.formData = $event.formValues;
       	this.formValid = $event.formValid;
    }
}
