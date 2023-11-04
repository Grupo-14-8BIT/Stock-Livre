export class Login {
    id?: number;
    email?: string;
    senha?: string;
  
}
export interface LoginResponse{
    id: number;
  email: string;
  senha: string;
}