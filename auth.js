import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { signInUsingGoogle, signInUsingCredentials } from "./actions/auth.action.js";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        
        // Use the signInUsingCredentials function from actions
        const user = await signInUsingCredentials({
          email: email,
          password: password,
        });
        
        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        }
        
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account?.provider === "google") {
        const getUserId = await signInUsingGoogle({
          user,
          profile,
        });
        if (getUserId) {
          user.id = getUserId?.userId;
          return true;
        } else return false;
      } else if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        console.log("user", user);
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
    },
  },
});
