import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "./models/user";
import { authConfig } from "./auth.config";
import { connectDb } from "./helper/db";

class CustomAuthError extends CredentialsSignin {
  constructor(message) {
    super(message);
    this.message = message;
  }
  code = "custom_auth_error";
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials == null) return null;

         console.log("🔗 Connecting DB inside authorize...");
        await connectDb(); // ✅ ALWAYS connect here!
        console.log("✅ DB connected");

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new CustomAuthError("No account found with this email. Please sign up to continue.");
        }

        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isMatch) {
           throw new CustomAuthError("Incorrect password. Please try again.");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
        };
      },
    }),
  ],
});
