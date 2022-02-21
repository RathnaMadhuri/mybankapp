import { Injectable } from "@angular/core";
import {AuthEntity} from 'api/lib/api-interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';


interface AuthResponse{
    msg: string;
    users: AuthEntity[];

}

@Injectable({
    providedIn: 'root',
})

export class PizzasService{
    constructor(private http: HttpClient){ }
    getAuthDetails(): Observable<AuthEntity[]>{
        return this.http
        .get<AuthResponse>('/api/users')
        .pipe(map((data) => data.users));
    }
}