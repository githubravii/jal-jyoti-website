import { auth } from "@/auth";
import LoginPageComponent from "./LoginPageComponent";
import { redirect } from "next/navigation"

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/dashboard");
  return <LoginPageComponent />
}