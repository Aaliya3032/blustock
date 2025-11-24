'use server'
import { signIn } from "@/auth" 

// Simple in-memory rate limiting (for development)
const loginAttempts = new Map();
const RATE_LIMIT_MS = 3000; // 3 seconds between attempts

export async function credentialLogin(formData){
    try {
        const email = formData.get("email");
        const password = formData.get("password");
        
        // CRITICAL: Validate inputs exist
        if (!email || !password) {
            return { error: "Email and password are required" };
        }
        
        const now = Date.now();
        
        // Rate limiting: prevent rapid-fire requests (increased to 5 seconds)
        const lastAttempt = loginAttempts.get(email);
        if (lastAttempt && (now - lastAttempt < 5000)) {
            return { error: "Please wait before trying again" };
        }
        
        // Record attempt
        loginAttempts.set(email, now);
        
        // Clean up old entries (keep map size manageable)
        if (loginAttempts.size > 100) {
            const cutoff = now - 60000; // 1 minute
            for (const [key, value] of loginAttempts.entries()) {
                if (value < cutoff) {
                    loginAttempts.delete(key);
                }
            }
        }
        
        const response = await signIn("credentials", {
            email: email,
            password: password,
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