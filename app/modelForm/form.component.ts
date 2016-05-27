import {Output, EventEmitter, Component} from 'angular2/core';
import { ControlArray, ControlGroup, Control, NgControl, NgControlGroup, Validators,FormBuilder} from 'angular2/common';
import {FormValidators} from './validation';
import {ErrorsComponent } from './errors.component';
import {ErrorsService} from './errors.service'; 
import {RadioButtonState} from 'angular2/common';

@Component({
    selector:'form',
    templateUrl:'app/modelForm/form.component.html',
    styles:[`
         
      .nameBlock{
          padding-left:100px;
      }
      .alert{
          color:red;
      }

    `],
    directives:[ErrorsComponent]
   
})
export class FormComponent{
    
     @Output() validation = new EventEmitter();
     
     form : ControlGroup;
     amenities : ControlArray;
     errorMessages :  {[key : string] : string };

     formValidator : {[key :string] : boolean} = {
         value : null,
         state : false
     };

     constructor(formBuilder:FormBuilder){
         
         this.form = formBuilder.group({
             
            title : ['', Validators.compose([
                     Validators.required,
                     FormValidators.cannotContainDoubledCharacters,
                     Validators.minLength(3),
                     Validators.maxLength(64)        
            ])] ,
            name : ['',Validators.compose([ 
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(64)  ]),
                    FormValidators.nameMustStartWithFirstLetter
                ],
            summary : ['', Validators.required],
                
            type :    ['',Validators.required],
            
            size: formBuilder.group({
                'Average car': [new RadioButtonState(true, 'Average car')],
                'Bike/motorcycle': [new RadioButtonState(false, 'Bike/motorcycle')],
                'Large vehicle/motorhome': [new RadioButtonState(false, 'Large vehicle/motorhome')]
            }) 
         },{ validator: FormValidators.checkNameAndTitle });
         
         this.inicializeCheckBox();
         
     }
     
      inicializeCheckBox() : void {
         this.amenities =  new ControlArray([],Validators.compose([FormValidators.checkBox]));
         this.values.forEach((value)=>{
             this.amenities.push(new Control(value));
         });
         this.form.addControl('Amenities',this.amenities);
      }
        
      sendData() : void {
         this.validation.emit({ 
              formValues : this.form.value, 
              formValid : this.form.valid 
            }) 
      }	
    
     
       onClickCheckbox(value) : void {
          value.selected= !value.selected;
          this.amenities.updateValueAndValidity();
          this.amenities.markAsTouched();
       } 
     
     
       selectValues : {[key:string] : any } = [
            {value : 'Electric charging', selected : false},
            {value : 'Overnight parking', selected : false},
            {value : '24/7 access', selected : false},
            {value : 'Lighted charging', selected : false},
            {value : 'Cctv', selected : false},
            {value : 'Security gate', selected : false},
            {value : 'Security guard', selected : false},
            {value : 'Security key', selected : false},
       ];
       
       formSelectTypes : {[key:string] : any} = [
           { id: 1, label: 'DriveAway1' }, 
           { id: 2, label: 'DriveAway2' },
           { id: 3, label: 'DriveAway3' }
        ] ;
    
       formRadioButtons : {[key:string] : any} = [
           { id: 1, label: 'Average car' }, 
           { id: 2, label: 'Bike/motorcycle' },
           { id: 3, label: 'Large vehicle/motorhome' }
        ];
     
       values : {[key:string] : any} = [
            {value : 'Electric charging', selected : false},
            {value : 'Overnight parking', selected : false},
            {value : '24/7 access', selected : false},
            {value : 'Lighted charging', selected : false},
            {value : 'Cctv', selected : false},
            {value : 'Security gate', selected : false},
            {value : 'Security guard', selected : false},
            {value : 'Security key', selected : false},
       ];
}