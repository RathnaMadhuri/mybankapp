import { AuthService } from '../src/auth.service';
import {Auth} from './api-interfaces';
import { AuthEntity } from './api-interfaces';

import { generateID } from '../utils';


export const AuthDetails : Auth[] = [{    //pizzapresets
    username: 'rathna',
    password:'rathna'
}];


export const USERS: AuthEntity[] = generateID(AuthDetails)