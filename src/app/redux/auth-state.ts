import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import { UserModel } from "../models/user.model";

export class AuthState {
    public user: UserModel = null;
    public token: string = null;

}

// 2. Products Action Type
export enum AuthActionType {
    Register,
    Login,
    Logout
}

// 3. 
export interface AuthAction {
    type: AuthActionType;
    payload?: string;

}

// 4.
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState };

    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload;
            const container: { user: UserModel } = jwtDecode(newState.token)
            newState.user = container.user;
            break;
        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;

            break;

        default:
            break;
    }

    return newState;
}

// 5. Products store
export const authStore = createStore(authReducer)