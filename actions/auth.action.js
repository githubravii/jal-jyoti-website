"use server";

import axios from "axios";
import { auth, signIn, signOut } from "@/auth";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signInUsingCredentials = async (email, password) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/v1/auth/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data.user;
  } catch (error) {
    console.log(error);
    return { error: error.response.data.message };
  }
};


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

export const logout = async () => {
  await signOut({
    callbackUrl: "/",
  })
}

export const userSession = async () => {
  const session = await auth();
  return session ? session : null;
}

export const signInCreds = async ({ email, password }) => {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response.error) {
      return { error: "Invalid email or password" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error signing in with credentials:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

export const registerUser = async (userData) => {
  console.log("Registering user with data:", userData);
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/v1/auth/register`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Registration response:", response.data);
    if (response.data.success) {
      return { success: true, message: response.data.message };
    } else {
      return { error: response.data.message || "Registration failed" };
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Registration failed. Please try again." };
  }
}