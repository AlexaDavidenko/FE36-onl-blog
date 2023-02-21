import {Status} from '../util/Status.enum';

export interface IUserState {
    userName: string;
    isAuthenticated: boolean;
    status: Status;
    loginStatus: Status;
    accessToken: string;
    refreshToken: string;
}