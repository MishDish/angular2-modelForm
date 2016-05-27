System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormValidators;
    return {
        setters:[],
        execute: function() {
            FormValidators = (function () {
                function FormValidators() {
                }
                FormValidators.cannotContainDoubledCharacters = function (control) {
                    var match = /([a-z])\1/i;
                    if (match.test(control.value) === true)
                        return { cannotContainDoubledCharacters: { value: control.value } };
                    return null;
                };
                FormValidators.nameMustStartWithFirstLetter = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value.charAt(0) !== "a")
                                resolve({ nameMustStartWithFirstLetter: { value: control.value } });
                            else
                                resolve(null);
                        }, 100);
                    });
                };
                FormValidators.checkNameAndTitle = function (control) {
                    if (control.find("name").value === control.find("title").value)
                        return { titleAndName: { title: control.find("title").value }, name: control.find("name").value };
                    return null;
                };
                FormValidators.checkBox = function (amaneties) {
                    var valid = false;
                    amaneties.controls.map(function (control) {
                        if (control.value.selected)
                            valid = true;
                    });
                    if (!valid)
                        return { mustBeSelectedOneCheckbox: amaneties.value };
                    return null;
                };
                return FormValidators;
            }());
            exports_1("FormValidators", FormValidators);
        }
    }
});
//# sourceMappingURL=validation.js.map