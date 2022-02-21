import {AuthEntity} from "../lib/api-interfaces";
import {USERS} from '../lib/auth';

export class AuthService{
    private readonly AuthDetails: AuthEntity[] = USERS;
    

    getAuthDetails():AuthEntity[]{
        return this.AuthDetails;

    }
    
}