export interface ILogin {
    Username: string;
    Password: string;
}

export interface ILoginResponse {
    token: string;
    userId: string;
}

export interface IRegistration {
    FirstName: string;
    LastName: string;
    Username: string;
    Password: string;
    Email: string;
}

export interface IRegistrationResponse {
    Id: number;
    Username: string;
}