import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IUser, User } from './user.model'

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private userUrl = '/api/users';

    user : boolean = false;



    constructor(private http: Http) { }

    //Get users/** 
     get(): Promise<Array<IUser>> {
         return this.http.get(this.userUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.error); 
    } 

    //Register USer
    create(user : User): Promise<IUser>{
        return this.http.post(this.userUrl,user)
        .toPromise()
        .then(response => response.json())
        .catch(this.error)
    }



    

    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }

}