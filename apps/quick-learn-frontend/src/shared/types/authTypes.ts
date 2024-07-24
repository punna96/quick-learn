export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}