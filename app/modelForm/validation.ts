import { Control, ControlGroup, ControlArray } from 'angular2/common';  


export class FormValidators{
    
    static cannotContainDoubledCharacters(control : Control){
        
        let match = /([a-z])\1/i;
        if(match.test(control.value) === true)
             return { cannotContainDoubledCharacters : {value : control.value} }
        return null;     
    }
    
    static nameMustStartWithFirstLetter(control:Control){
        return new Promise((resolve, reject) =>{
            setTimeout(function(){
               if(control.value.charAt(0) !== "a")
                  resolve({ nameMustStartWithFirstLetter : {value : control.value}})
                else
                  resolve(null)      
            },100) 
        });  
    
    }
  static checkNameAndTitle(control : Control){
      if(control.find("name").value === control.find("title").value)
                 return {titleAndName : {title: control.find("title").value}, name : control.find("name").value};
               
         return null;
         
  }
     static checkBox(amaneties : ControlGroup){
         let valid : boolean = false;
         
         amaneties.controls.map((control)=>{
                 if(control.value.selected)
                    valid = true;
             });
             
        if(!valid)
             return { mustBeSelectedOneCheckbox : amaneties.value }
        return null;   
         
     }
}