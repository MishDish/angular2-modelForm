System.register(['angular2/core', 'angular2/common', './validation', './errors.component'], function(exports_1, context_1) {
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
    var core_1, common_1, validation_1, errors_component_1, common_2;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (validation_1_1) {
                validation_1 = validation_1_1;
            },
            function (errors_component_1_1) {
                errors_component_1 = errors_component_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(formBuilder) {
                    this.validation = new core_1.EventEmitter();
                    this.formValidator = {
                        value: null,
                        state: false
                    };
                    this.selectValues = [
                        { value: 'Electric charging', selected: false },
                        { value: 'Overnight parking', selected: false },
                        { value: '24/7 access', selected: false },
                        { value: 'Lighted charging', selected: false },
                        { value: 'Cctv', selected: false },
                        { value: 'Security gate', selected: false },
                        { value: 'Security guard', selected: false },
                        { value: 'Security key', selected: false },
                    ];
                    this.formSelectTypes = [
                        { id: 1, label: 'DriveAway1' },
                        { id: 2, label: 'DriveAway2' },
                        { id: 3, label: 'DriveAway3' }
                    ];
                    this.formRadioButtons = [
                        { id: 1, label: 'Average car' },
                        { id: 2, label: 'Bike/motorcycle' },
                        { id: 3, label: 'Large vehicle/motorhome' }
                    ];
                    this.values = [
                        { value: 'Electric charging', selected: false },
                        { value: 'Overnight parking', selected: false },
                        { value: '24/7 access', selected: false },
                        { value: 'Lighted charging', selected: false },
                        { value: 'Cctv', selected: false },
                        { value: 'Security gate', selected: false },
                        { value: 'Security guard', selected: false },
                        { value: 'Security key', selected: false },
                    ];
                    this.form = formBuilder.group({
                        title: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                validation_1.FormValidators.cannotContainDoubledCharacters,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(64)
                            ])],
                        name: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(64)]),
                            validation_1.FormValidators.nameMustStartWithFirstLetter
                        ],
                        summary: ['', common_1.Validators.required],
                        type: ['', common_1.Validators.required],
                        size: formBuilder.group({
                            'Average car': [new common_2.RadioButtonState(true, 'Average car')],
                            'Bike/motorcycle': [new common_2.RadioButtonState(false, 'Bike/motorcycle')],
                            'Large vehicle/motorhome': [new common_2.RadioButtonState(false, 'Large vehicle/motorhome')]
                        })
                    }, { validator: validation_1.FormValidators.checkNameAndTitle });
                    this.inicializeCheckBox();
                }
                FormComponent.prototype.inicializeCheckBox = function () {
                    var _this = this;
                    this.amenities = new common_1.ControlArray([], common_1.Validators.compose([validation_1.FormValidators.checkBox]));
                    this.values.forEach(function (value) {
                        _this.amenities.push(new common_1.Control(value));
                    });
                    this.form.addControl('Amenities', this.amenities);
                };
                FormComponent.prototype.sendData = function () {
                    this.validation.emit({
                        formValues: this.form.value,
                        formValid: this.form.valid
                    });
                };
                FormComponent.prototype.onClickCheckbox = function (value) {
                    value.selected = !value.selected;
                    this.amenities.updateValueAndValidity();
                    this.amenities.markAsTouched();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FormComponent.prototype, "validation", void 0);
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'form',
                        templateUrl: 'app/modelForm/form.component.html',
                        styles: ["\n         \n      .nameBlock{\n          padding-left:100px;\n      }\n      .alert{\n          color:red;\n      }\n\n    "],
                        directives: [errors_component_1.ErrorsComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map