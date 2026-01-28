import { googleLogin } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";

export default function GooglelogIn() {
  return (
    <form
      action={googleLogin}
    >
      <Button type="submit" variant="outline" className="w-full p-3">
        <div className="flex items-center justify-center gap-2 p-3">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_40)">
              <path d="M47.5 24.5C47.5 22.6 47.3 20.8 47 19H24.5V29H37.4C36.8 32.1 34.7 34.6 31.7 36.2V42H39.3C44 38.1 47.5 32.1 47.5 24.5Z" fill="#4285F4"/>
              <path d="M24.5 48C31.1 48 36.7 45.9 39.3 42H31.7V36.2C29.7 37.3 27.2 38 24.5 38C18.1 38 12.7 33.7 10.7 27.9H2.8V33.9C5.4 39.2 14.2 48 24.5 48Z" fill="#34A853"/>
              <path d="M10.7 27.9C10.2 26.8 10 25.7 10 24.5C10 23.3 10.2 22.2 10.7 21.1V15.1H2.8C1.3 18.1 0.5 21.2 0.5 24.5C0.5 27.8 1.3 30.9 2.8 33.9L10.7 27.9Z" fill="#FBBC05"/>
              <path d="M24.5 11C27.6 11 30.3 12.1 32.3 13.9L39.5 7.1C36.7 4.5 31.1 1 24.5 1C14.2 1 5.4 9.8 2.8 15.1L10.7 21.1C12.7 15.3 18.1 11 24.5 11Z" fill="#EA4335"/>
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>Continue with Google</span>
        </div>
      </Button>
    </form>
  );
}
