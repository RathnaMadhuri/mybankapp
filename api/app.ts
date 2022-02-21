import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { AuthService } from './src/auth.service';


const app= express();
const PORT = process.env.PORT || 4000;
const logLevel = process.env.Log_Level || 'dev';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', () =>{
    console.log('Connection Successful');
});
const authService = new AuthService();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cookieParser());


app.get('/api/users',(req,res) =>{
    const users = authService.getAuthDetails();
    res.send({
        msg: 'Authentication success',
        users,
    });
        });
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});

