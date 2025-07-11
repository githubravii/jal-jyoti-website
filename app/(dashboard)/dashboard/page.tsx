import { logout } from "@/actions/auth.action";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }
    console.log("Session:", session);
    return (
        <div>
            {session?.user?.name}
            <Button
                onClick={logout}
            >
                Logout
            </Button>
        </div>
    )
}