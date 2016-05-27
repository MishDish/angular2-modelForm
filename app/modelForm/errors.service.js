System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ErrorsService;
    return {
        setters:[],
        execute: function() {
            ErrorsService = (function () {
                function ErrorsService() {
                }
                ErrorsService.prototype.getErrors = function () {
                    return {
                        invalid: true,
                        required: true,
                        format: true
                    };
                };
                ErrorsService.prototype.getMessages = function () {
                    return {
                        invalid: "Please provide a valid value",
                        required: "Please provide a value",
                        format: "Field is not formatted properly!",
                        nameMustStartWithFirstLetter: "Name must starts with letter 'a' !",
                        cannotContainDoubledCharacters: "Title cannot contain any double charachers !",
                        invalidForm: "You must write different values for name and title",
                        minlength: "The Value Can at least 3 ",
                        maxlength: "This value can not be  more then 64 characters",
                        titleAndName: "Title and name must be different! ",
                        mustBeSelectedOneCheckbox: "At least one value must be choosen ! "
                    };
                };
                return ErrorsService;
            }());
            exports_1("ErrorsService", ErrorsService);
        }
    }
});
//# sourceMappingURL=errors.service.js.map