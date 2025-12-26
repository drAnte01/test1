
//Service/formService.ts
import type { ILogin, IRegistration, ILoginResponse, IRegistrationResponse } from "../Interface/FormInterface";




const BA_URL = "ovdje ce biti url od backenda"

export const Login = async (data: ILogin): Promise<ILoginResponse> => {
    const response = await fetch(BA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok)
        throw new Error("Error while sending informations...");
    const result: ILoginResponse = await response.json();
    return result;
}

export const Registration = async (data: IRegistration): Promise<IRegistrationResponse> => {
    const response = await fetch(BA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok)
        throw new Error("Error while sending informations...");
    const result: IRegistrationResponse = await response.json();
    return result;
}
