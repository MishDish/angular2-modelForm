export class ErrorsService{
    
    getErrors() : {[key:string] : any} {
        return {
               invalid:  true, 
               required: true,
               format : true       
             }              
        
    }
    getMessages():  {[key:string] : string } {
        return {
               invalid:  "Please provide a valid value", 
               required: "Please provide a value",
               format:   "Field is not formatted properly!",
               nameMustStartWithFirstLetter : "Name must starts with letter 'a' !",
               cannotContainDoubledCharacters: "Title cannot contain any double charachers !",
               invalidForm :"You must write different values for name and title",
               minlength : "The Value Can at least 3 ",
               maxlength : "This value can not be  more then 64 characters",
               titleAndName : "Title and name must be different! ",
               mustBeSelectedOneCheckbox : "At least one value must be choosen ! "

            } 
   }
}