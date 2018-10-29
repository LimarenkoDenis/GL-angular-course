// tslint:disable-next-line:max-line-length
import { FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-concact-us',
  templateUrl: './concact-us.component.html',
  styleUrls: ['./concact-us.component.css']
})
export class ConcactUsComponent implements OnInit {

  public name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)], [asyncMaxLength(5)]);

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)], [asyncMaxLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  }, [match]);

  public myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], [asyncMaxLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    users: this._fb.array([
      this._fb.control('denis'),
      this._fb.control('nick'),
    ])
  },  { validator: [ match ] });

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.name.valueChanges.subscribe((data: string) => {
      console.log('value', data);
      console.log(this.name);


    });


    this.form.valueChanges.subscribe((data: string) => {
      console.log('value', data);
      console.log(this.form);


    });



    // this.name.setAsyncValidators(asyncMaxLength(5));
    // this.name.clearAsyncValidators();

    // this.name.

  }


  submit(value: any ) {
    console.log(value);
  }

  public submitWithBtn(): void {
    console.log(this.form.value);

  }
}

function maxLength(data: number): ValidatorFn {
  return function(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    return value.length > data ? { myMaxError: 'error' } : null;
  };
}

function match(formGroup: FormGroup): ValidationErrors | null {
  const name: AbstractControl = formGroup.get('name');
  const email: AbstractControl = formGroup.get('email');

  // console.log('match', data);

  return name.value === email.value ? null : { mathc: 'name and email not mathcing' };
}

function asyncMaxLength(data: number): AsyncValidatorFn {
  return function(control: AbstractControl): Observable<ValidationErrors | null> {
    const value: string = control.value;
    const res = value.length > data ? { myMaxError: 'error' } : null;
    // this.service.validate(value) - http -
    return of(res).pipe(
      delay(3000)
    );
  };
}
