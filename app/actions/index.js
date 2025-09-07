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
  return { error: response.error };
}
        return { success: true };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong"
        };
    }
}