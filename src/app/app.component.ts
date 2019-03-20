import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './interfaces/user.interface';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent implements OnInit {
    myVar = 'Hola Mundo';
    saludo = 'Hola Max como estás?';
    users: User[] = [];

    constructor( private userService: UserService ) {}

    ngOnInit() {
        this.getUsers();
    }

    isEven( number: number ): boolean {
        return number % 2 === 0;
    }

    getUsers() {
        this.userService.getAll().subscribe( users => {
            console.log( users );
            this.users = users;
        } );
    }
}
