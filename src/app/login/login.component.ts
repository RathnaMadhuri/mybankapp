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
  activeUser= 0;
  
  
  
  loginForm = this.fb.group({
    p: this.fb.array([this.createPizza()])
      

  });

  get pizzas(): FormArray {
    return this.loginForm.get('pizzas') as FormArray;
  } 

  total$ = this.pizzas.valueChanges.pipe(
    startWith(this.calculateTotal(this.pizzas.value)),
    map(() => this.calculateTotal(this.pizzas.value))
  );

  

  constructor(private fb: FormBuilder) {}

  //fulfill the requirements of addPizza() in pizza-app.component.html create a function, named it createPizza
  
   
}