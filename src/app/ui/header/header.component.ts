import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  @Input()
  public counter;

  @Output()
  public myDecrese: EventEmitter<void> = new EventEmitter();

  @Output()
  public myIncrease: any = new EventEmitter();


  @Output()
  public myICounterEvent: EventEmitter<number> = new EventEmitter();

  public genders = ['M', 'G'];

  public codes = [
    {id: 1, code: 'code1'},
    {id: 2, code: 'code2'},
  ];

  public inputFC: FormControl = new FormControl('');

  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    array: new FormArray([
      new FormControl('name'),
      new FormControl('name1'),
      new FormControl('name2s')
    ]),
  }, [myFormValidation] );

  public myFG: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    surname: ['', [Validators.required, Validators.minLength(1)]],
    users: this.fb.array([ ['dan'], ['nick'] ]),
    gender: [''],
    code: [''],

  });

  public constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.inputFC.setValidators([Validators.required, customValidate(1)]);
    // this.inputFC.setAsyncValidators(customAsyncValidate)

    this.inputFC.valueChanges.subscribe((data) => {
      console.log(this.inputFC.errors);

    });

    this.form.valueChanges.subscribe((data) => {
      console.log(',form', this.form.errors);
      console.log(',form', this.form.get('array'));


    });

    this.myFG.valueChanges.subscribe((data) => {
      console.log(',form', this.myFG.value);
    });
  }

  public decrease(): void {
    this.myDecrese.emit();
  }

  public increase(): void {
    this.myIncrease.emit();
  }

  myChange() {
    this.myICounterEvent.emit(12);
  }
}


function customAsyncValidate(control: AbstractControl): Observable<ValidationErrors | null> {
  console.log(control);
  const value: string = control.value;
  const res = value.length > 3 ? null : { myCustomError: 'error' };

  return of(res).pipe(
    delay(3000)
  );

}

function customValidate(mylength: number) {
  return function(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    return value.length > mylength ? null : { myCustomError: 'error' };
  };
}

function myFormValidation(fg: FormGroup) {
  const name: AbstractControl = fg.get('name');
  return name.value.length > 2 ? null : { myCustomError: 'error' };
}
