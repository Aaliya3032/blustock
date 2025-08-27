import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "./models/user";
import { authConfig } from "./auth.config";
import { connectDb } from "./helper/db";

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

        try {
          const user = await User.findOne({ email: credentials?.email });
          // console.log(user);

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              // return user; Do this change when auth do not work in vercel
              return {
                id: user._id.toString(),
                email: user.email,
                name: `${user.firstName} ${user.lastName}`,
                role: user.role,
              };
            } else {
              console.error("Password Mismatch");
              throw new Error("Check your password");
            }
          } else {
            console.error("User not found");
            throw new Error("User not found");
          }
        } catch (err) {
          console.error("err", err);
          throw new Error(err);
        }
      },
    }),
  ],
});
