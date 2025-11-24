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
import { useState, useRef, useEffect } from "react";
import { credentialLogin } from "@/app/actions";
import { toast } from "sonner";

export function LoginForm() {
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const formRef = useRef(null);
  const submitLockRef = useRef(true); // Start locked
  const lastSubmitRef = useRef(0);
  const hasSubmittedRef = useRef(false);

  // Prevent auto-submission - only unlock after user interaction
  useEffect(() => {
    // CRITICAL: Check if we're actually on the login page
    if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
      // Not on login page - keep form permanently locked
      submitLockRef.current = true;
      setIsReady(false);
      return;
    }

    // Keep form locked initially
    submitLockRef.current = true;
    
    // Unlock only after user interacts with the page
    const unlockForm = () => {
      // Double-check we're still on login page
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        return;
      }
      if (!hasSubmittedRef.current) {
        submitLockRef.current = false;
        setIsReady(true);
      }
    };

    // Unlock on any user interaction
    const events = ['mousedown', 'keydown', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, unlockForm, { once: true });
    });

    // Also unlock after 2 seconds as fallback
    const timer = setTimeout(() => {
      // Double-check we're still on login page
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        return;
      }
      if (!hasSubmittedRef.current) {
        submitLockRef.current = false;
        setIsReady(true);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, unlockForm);
      });
    };
  }, []);

  async function onSubmit(event) {
    // CRITICAL: Prevent multiple submissions
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (event && typeof event.stopPropagation === 'function') {
      event.stopPropagation();
    }
    if (event && typeof event.stopImmediatePropagation === 'function') {
      event.stopImmediatePropagation();
    }

    // CRITICAL: Check if we're actually on the login page
    if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
      // Not on login page - block submission
      return false;
    }

    // Block if form is locked or already submitting
    if (submitLockRef.current || isSubmitting || hasSubmittedRef.current) {
      return false;
    }

    // Debounce: Prevent submissions within 5 seconds
    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) {
      return false;
    }

    // Mark as submitted immediately
    hasSubmittedRef.current = true;
    submitLockRef.current = true;
    setIsSubmitting(true);
    lastSubmitRef.current = now;
    setError('');

    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialLogin(formData);

      if (!!response.error) {
        // Only log errors in development
        if (process.env.NODE_ENV === 'development') {
          console.error("Login Error:", response.error);
        }
        setError(response.error);
        // Reset after longer delay to prevent resubmission
        setTimeout(() => {
          setIsSubmitting(false);
          hasSubmittedRef.current = false;
          submitLockRef.current = false;
        }, 5000);
      } else {
        toast.success("Login Successful");
        // Clear form
        if (formRef.current) {
          formRef.current.reset();
        }
        // Stop all execution and redirect
        submitLockRef.current = true; // Keep locked
        window.location.replace("/account");
        return false;
      }      
    } catch (e) {
      // Only log errors in development
      if (process.env.NODE_ENV === 'development') {
        console.error("Login Exception:", e.message);
      }
      setError(e.message);
      // Reset after longer delay
      setTimeout(() => {
        setIsSubmitting(false);
        hasSubmittedRef.current = false;
        submitLockRef.current = false;
      }, 5000);
    }

    return false;
  }

  return (
    <Card className="mx-auto max-w-sm sm:w-full w-[80%] text-tertiary bg-white">
      <CardHeader>
        <CardTitle className="text-2xl">
        <p className="mt-5 text-3xl font-bold leading-tight text-tertiary sm:leading-tight sm:text-5xl lg:text-3xl lg:leading-tight font-pj">
              <span className="relative inline-flex sm:inline">
                <span className="filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative">Login</span>
              </span>
            </p></CardTitle>
        <CardDescription className="text-gray-500 sm:text-md text-sm">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
      {error && <p className="text-sm text-red-500 text-center font-medium">{error}</p>}
        <form 
          ref={formRef}
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
        >
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name='email'
              placeholder="m@example.com"
              required
              disabled={isSubmitting || !isReady}
              autoComplete="email"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              required 
              disabled={isSubmitting || !isReady}
              autoComplete="current-password"
            />
            <Link href="/forgot-password" className="text-sm underline text-blue-600 hover:text-blue-800">
                  Forgot your password?
                </Link>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-tertiary text-white hover:bg-opacity-80"
            disabled={isSubmitting || !isReady}
          >
            {isSubmitting ? "Logging in..." : !isReady ? "Loading..." : "Login"}
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
