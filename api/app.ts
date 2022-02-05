import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {AccountService} from './src/accounts.service';

const app= express();
const PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cookieParser());
const AccountService = new AccountService();

app.get('/api/accounts',(req,res) =>{
    const accounts = AccountService.getCreatedAccounts();
    res.send({
        msg: 'Account Found',
        accounts,
    });
        });
app.get('/api/accounts/details',(req,res) =>{
    const accounts = AccountService.getAccountDetails();
    res.send({
        msg: 'Found Account types',
        accounts,
        });
            
});
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});

