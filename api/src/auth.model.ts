import {Schema, model} from 'mongoose';
import {Auth} from '../lib/api-interfaces';


const AuthSchema = new Schema<Auth>({

    username: String,
    password: String

});
export const Users = model('Users', AuthSchema);