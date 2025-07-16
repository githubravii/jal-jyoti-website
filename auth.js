import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"
import { signInUsingCredentials, signInUsingGoogle } from "./actions/auth.action"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        console.log("credentials:", credentials);
        if (!email || !password) {
          throw new Error("Email and password are required");
        }
        const user = await signInUsingCredentials(email, password);
        console.log("User from credentials4535453534:", user);
        if (user && !user.error) {
          return { ...user };
        } else {
          throw new Error(user?.error || "Invalid credentials");
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account.provider === "google") {
        const userId = await signInUsingGoogle({
          user,
          profile
        })
        if (userId) {
          user.id = userId?.userId;
          return true;
        } else {
          return false;
        }
      } else if (account.provider === "credentials") return true;
      return false;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    }
  }
})