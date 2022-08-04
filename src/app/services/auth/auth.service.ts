import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { AuthActionType, authStore } from 'src/app/redux/auth-state';
import { CredentialModel } from 'src/app/models/credintial.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    public async register(user: UserModel): Promise<void>{
        const token = await firstValueFrom(this.http.post<string>(environment.registerUrl, user))
        authStore.dispatch({type: AuthActionType.Register, payload: token})
    }

    
    public async login(credential: CredentialModel): Promise<void>{
        const token = await firstValueFrom(this.http.post<string>(environment.loginUrl, credential))
        authStore.dispatch({type: AuthActionType.Login, payload: token})
    }

    
    public logout():void{
        authStore.dispatch({type: AuthActionType.Logout})
    }
}
