import { AccountService } from '../src/accounts.service';
import {Account} from './api-interfaces';
import { AccountEntity } from './api-interfaces';
import { generateID } from '../utils';

const account_number = 7856932;
const account_balance= 2345;
const account_name = 'rathna';

export const Account_Details: Account= [{
    account_number: number,
    account_balance: number,
    account_name: string
},

];
export const Accounts: AccountEntity[] = generateID(Account_Details)