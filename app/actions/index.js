'use server'
import { signIn } from "@/auth" 

export async function credentialLogin(formData){
    try {
        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect:false
        })
        if (response?.error) {
  throw new Error(response.error);
}
        return response;
    } catch (error) {
         throw error instanceof Error ? error : new Error(String(error));
    }
}