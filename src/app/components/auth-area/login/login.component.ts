import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialModel } from 'src/app/models/credintial.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public credential = new CredentialModel();

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    public async send() {
        try {
            await this.authService.login(this.credential)
            alert('welcome back')
            this.router.navigateByUrl("/home")
        } catch (err: any) {
            alert(err.message)
        }

    }

}
