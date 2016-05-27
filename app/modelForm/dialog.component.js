System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DialogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DialogComponent = (function () {
                function DialogComponent() {
                    this.isHidden = false;
                    this.buttons = new core_1.EventEmitter();
                    this.status = false;
                    this.buttonValues = {
                        ok: 'ok',
                        cancel: 'cancel',
                        close: 'close'
                    };
                }
                DialogComponent.prototype.onClick = function (buttonValue) {
                    this.buttons.emit({ name: buttonValue });
                    this.status = false;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DialogComponent.prototype, "buttons", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], DialogComponent.prototype, "status", void 0);
                DialogComponent = __decorate([
                    core_1.Component({
                        selector: 'dialogbox',
                        template: "\n    \n         <div class=\"dialogbox\" *ngIf=\"status\">\n          <i (click)=\"onClick(buttonValues.close)\" class=\"glyphicon glyphicon-remove pull-right close\"></i>   \n           <div class=\"body-dialog\">\n               <ng-content select=\".form\"></ng-content>\n           </div>\n               <button (click)=\"onClick(buttonValues.ok)\"  class=\"btn btn-default \">{{ buttonValues.ok}}</button>\n               <button (click)=\"onClick(buttonValues.cancel)\" class=\"btn btn-default \">{{ buttonValues.cancel}}</button>    \n          </div>    \n         \n    ",
                        styles: [
                            "\n       .dialogbox{\n          margin :10px; \n          border : 5px solid gray;\n          padding: 10px; \n       }\n       .body-dialog{\n           padding-top:10px;\n           min-height:50px;\n       }\n      "
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], DialogComponent);
                return DialogComponent;
            }());
            exports_1("DialogComponent", DialogComponent);
        }
    }
});
//# sourceMappingURL=dialog.component.js.map