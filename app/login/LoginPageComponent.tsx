import { Droplets } from "lucide-react";
import Link from "next/link";
import GooglelogIn from "./googlelogin";
import { LoginForm } from "@/components/AuthForm";

export default function LoginPageComponent() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
                    ></Link>
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="bg-blue-600 p-3 rounded-lg">
                            <Droplets className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Jal Jyoti Enterprises
                            </h1>
                            <p className="text-sm text-blue-600">
                                Professional Plumbing Solutions
                            </p>
                        </div>
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
