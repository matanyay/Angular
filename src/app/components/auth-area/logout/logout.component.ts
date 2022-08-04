import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-logout',
    template: "",
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.authService.logout();
        alert("bye bye...")
        this.router.navigateByUrl("/home")
    }

}
