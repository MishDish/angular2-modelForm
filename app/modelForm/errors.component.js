System.register(['angular2/core', './errors.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, errors_service_1;
    var ErrorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (errors_service_1_1) {
                errors_service_1 = errors_service_1_1;
            }],
        execute: function() {
            ErrorsComponent = (function () {
                function ErrorsComponent(service) {
                    this.messages = service.getMessages();
                }
                ErrorsComponent.prototype.mapOfErrors = function () {
                    var _this = this;
                    return Object.keys(this.errors).map(function (key) { return _this.messages[key]; }).filter(function (msg) { return !!msg; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ErrorsComponent.prototype, "errors", void 0);
                ErrorsComponent = __decorate([
                    core_1.Component({
                        selector: 'errors',
                        template: "\n        <div *ngIf = \"!!errors\">\n           <span class=\"messages\" *ngFor=\"#error of mapOfErrors()\" >{{ error }}</span>\n        </div>\n    ",
                        styles: ["\n        .messages{\n            display: block;\n            color : red;\n        }\n    "],
                        providers: [errors_service_1.ErrorsService]
                    }), 
                    __metadata('design:paramtypes', [errors_service_1.ErrorsService])
                ], ErrorsComponent);
                return ErrorsComponent;
            }());
            exports_1("ErrorsComponent", ErrorsComponent);
        }
    }
});
//# sourceMappingURL=errors.component.js.map