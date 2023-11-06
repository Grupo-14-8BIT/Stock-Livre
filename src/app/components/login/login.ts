export class Login {
    id?: number;
    email?: string;
    senha?: string;
    emailExists?: boolean;
}
export interface LoginResponse{
    id: number;
  email: string;
  senha: string;
}