'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { credentialLogin } from "@/app/actions";
import { toast } from "sonner";

export function LoginForm() {

  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialLogin(formData);

      if (!!response.error) {
          console.log(response.error)
          setError(response.error);
      } else {
        toast.success("Login Successful")
        router.push("/account")
      }      
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <Card className="mx-auto max-w-sm w-full text-tertiary">
      <CardHeader>
        <CardTitle className="text-2xl">
        <p className="mt-5 text-3xl font-bold leading-tight text-tertiary sm:leading-tight sm:text-5xl lg:text-3xl lg:leading-tight font-pj">
              <span className="relative inline-flex sm:inline">
                <span className="filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative">Login</span>
              </span>
            </p></CardTitle>
        <CardDescription className="text-gray-500">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
      {error && <p className="text-sm text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name='email'
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-tertiary text-white hover:bg-opacity-80">
            Login
          </Button>
        </div>
       
        <div className="mt-4 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/register/instructor" className="underline">
           Instructor 
          </Link>
          {" "} or {" "}
          <Link href="/register/student" className="underline">
           Student
          </Link>
        </div>
        </form>
      </CardContent>
    </Card>
  );
}
