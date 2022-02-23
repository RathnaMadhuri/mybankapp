import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  //createAccount(){
    //return this.fb.group({
      //size: ['small', Validators.required],
      //toppings: [[]],
    //});
  //}

  //addAccount(){
    //this.pizzas.push(this.createAccount());
    
  //}

  //removeAccount(index: number){
    //this.Accounts.removeAt(index);
    
  //}


  //togglePizza(index: number) {
    //this.activePizza = index;
  //}

  //calculateAcctBal(value: []): string{
    //const price = value.reduce((acc:number, next: Pizza)=> {
      //const price = this.prices[next.size];
      //return acctBal;

    //}, 0);
    //
  //}

}
