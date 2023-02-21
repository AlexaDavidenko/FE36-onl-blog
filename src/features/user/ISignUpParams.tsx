import {ILoginParams} from './ILoginParams';

export interface ISignUpParams extends ILoginParams {
    username: string;
}
