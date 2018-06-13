import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    value:any;
    constructor(private _fb: FormBuilder) { }
    
    ngOnInit() {
        this.myForm = this._fb.group({
            fields: this._fb.array([
                this.initFields()
            ])
        });
    }

    initFields() {
        return this._fb.group({
            street: ['', Validators.required],
            randoms: this._fb.array([
                this._fb.group({
                    street1: ['', Validators.required],
                    postcode1: ['']
                })
            ])
        });
    }

    addField() {
        const control = <FormArray>this.myForm.controls['fields'];
        control.push(this.initFields());
    }

    removeField(i: number) {
        const control = <FormArray>this.myForm.controls['fields'];
        control.removeAt(i);
    }
    
}