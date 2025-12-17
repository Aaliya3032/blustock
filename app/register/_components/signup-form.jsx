'use client'
import Link from "next/link";
import { useState } from "react";

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


export function SignupForm({role}) {

  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isResending, setIsResending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSuccess(false);

    try {
      const formData = new FormData(event.currentTarget);
      const firstName = formData.get("first-name");
      const lastName = formData.get("last-name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      // Validate passwords match
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const userRole = ((role === "student" ) || (role === "instructor")) ? role : "student";

      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          userRole 
        })
      });

      const data = await response.json();

      if (response.status === 201) {
        setIsSuccess(true);
        setUserEmail(email);
        // Reset form
        event.target.reset();
      } else {
        setError(data.error || "Registration failed. Please try again.");
      }
      
    } catch (e) {
      console.log(e.message);
      setError("An error occurred. Please try again.");
    } 
  }

  async function handleResendVerification() {
    setIsResending(true);
    setError("");
    
    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setError("");
        alert("Verification email sent successfully! Please check your inbox.");
      } else {
        setError(data.error || "Failed to resend verification email.");
      }
    } catch (e) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsResending(false);
    }
  }
  return (
    <Card className="mx-auto max-w-sm sm:w-full w-[80%] text-tertiary bg-white">
      <CardHeader>
        <CardTitle className="text-xl">
        <p className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-3xl lg:leading-tight font-pj">
       <span className="relative inline-flex sm:inline text-tertiary">
                <span className="filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative">Sign Up</span>
          </span>
            </p></CardTitle>
        <CardDescription className="text-gray-500 sm:text-md text-sm">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Registration Successful!</h3>
              <p className="text-sm text-green-700 mb-3">
                We've sent a verification email to <strong>{userEmail}</strong>. 
                Please check your inbox and click the verification link to activate your account.
              </p>
              <p className="text-xs text-green-600 mb-3">
                Didn't receive the email? Check your spam folder or click the button below to resend.
              </p>
              <Button
                onClick={handleResendVerification}
                disabled={isResending}
                className="w-full bg-tertiary text-white hover:bg-opacity-80"
              >
                {isResending ? "Sending..." : "Resend Verification Email"}
              </Button>
            </div>
            <div className="text-center text-sm text-gray-500">
              <Link href="/login" className="underline text-tertiary">
                Go to Login
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" name='first-name' placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" name='last-name' placeholder="Robinson" required />
                </div>
              </div>
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
                <Label htmlFor="password">Password</Label>
                <Input id="password" name='password' type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" name='confirmPassword' type="password" required />
              </div>
              <Button type="submit" className="w-full bg-tertiary text-white hover:bg-opacity-80">
                Create an account
              </Button>
            </div>
           
            <div className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
