"use server";

import axios from "axios";
import { auth, signIn, signOut } from "@/auth";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signInUsingGoogle = async ({ user, profile }) => {
  try {
    console.log("Signing in with Google:", user, profile);
    console.log("API URL:", BASE_API_URL);
    if (!user || !profile) {
      throw new Error("User and profile information are required");
    }
    if (!BASE_API_URL) {
      throw new Error("API URL is not defined");
    }
    const response = await axios.post(
      `${BASE_API_URL}/api/v1/auth/google`,
      {
        user,
        profile,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const googleLogin = async () => {
  console.log("Signing in with Google...");
  try {
    const response = await signIn("google");
    if (response.error) {
      throw new Error(response.error);
    }
    return response;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
}

export const logout=async () => {
  await signOut({
    callbackUrl: "/",
  })
}

export const userSession = async () => {
  const session = await auth(); 
  return session ? session : null;
}
