import { AccountService } from '../src/accounts.service';
import {Account} from './api-interfaces';
import { AccountEntity } from './api-interfaces';
import { generateID } from '../utils';

const account_number = 7856932;
const account_balance= 2345;
const account_name = rathna;

export const Account_Details: Account= [{
    account_number: 'small',
    account_balance: [],
    account_name:
},

];
export const Accounts: AccountEntity[] = generateID(Account_Details)