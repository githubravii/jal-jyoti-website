"use client";


import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react"

export default async function GooglelogIn() {
  return (
      <Button onClick={() => signIn("google")} variant="outline" className="w-full p-3">
        <div className="flex items-center justify-center gap-2 p-3">
          <Image
            src="/icons8-google-48.png.png"
            alt="Google"
            width={20}
            height={20}
          />
        </div>
      </Button>
  );
}
