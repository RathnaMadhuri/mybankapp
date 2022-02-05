export type PizzaSize = 'small'|'medium'|'large'|'x-large'; 

export interface Account{
    name:;
    toppings:string[];
}

export interface PizzaEntity extends Account{
    id: string;
}