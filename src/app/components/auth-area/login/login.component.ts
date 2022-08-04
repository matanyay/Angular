import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialModel } from 'src/app/models/credintial.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotifyService } from 'src/app/services/notify/notify.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public credential = new CredentialModel();

    constructor(private authService: AuthService, private router: Router, private notifyService: NotifyService) { }

    ngOnInit(): void {
    }

    public async send() {
        try {
            await this.authService.login(this.credential)
            this.notifyService.success("welcome back")
            this.router.navigateByUrl("/home")
        } catch (err: any) {
            this.notifyService.error("error login")

        }

    }

}
