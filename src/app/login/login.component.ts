import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Auth} from 'api/lib/api-interfaces';
import { map, startWith } from 'rxjs';

type AuthTypes = {
  
    username: string,
    password:string,
    
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  [x: string]: any;
  activeUser= 0;
  
  
  
  bankForm= this.fb.group({
    authDetails: this.fb.array([]),
      

  });

  get authDetails(): FormArray {
    return this.bankForm.get('authDetails') as FormArray;
  } 

  

  

  constructor(private fb: FormBuilder) {}

  //fulfill the requirements of addAccount() in account.component.html create a function, named it createAccount
  onSubmit(event: any) {
    console.log(event);
    const { authDetails: any } = this.bankForm.value;
    console.log(this.authDetails);
    this['getAuthDetails'](this.authDetails);
    
    
  }
   
}