export class Login {
    id?: number;
    username?: string;
    password?: string;

}
export interface LoginResponse{
    id: number;
    username: string;
    password: string;
}