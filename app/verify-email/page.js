"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function VerifyEmailContent() {
  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("Verifying your email...");
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Get token from URL
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get("token");
    setToken(tokenParam);

    if (!tokenParam) {
      setStatus("error");
      setMessage("Invalid verification link. No token provided.");
      return;
    }
  }, []);

  useEffect(() => {
    if (!token) return;

    async function verifyEmail() {
      try {
        console.log("Verifying email with token:", token);
        const res = await fetch(`/api/auth/verify-email?token=${encodeURIComponent(token)}`, {
          method: "GET",
        });
        
        console.log("Verification response status:", res.status);
        const json = await res.json();
        console.log("Verification response:", json);

        if (res.ok) {
          setStatus("success");
          setMessage(json.message || "Email verified successfully!");
          // Redirect to login after 3 seconds
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        } else {
          setStatus("error");
          setMessage(json.error || "Failed to verify email. The link may have expired.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
        setMessage(`An error occurred while verifying your email: ${error.message}`);
      }
    }

    verifyEmail();
  }, [token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Email Verification</CardTitle>
          <CardDescription className="text-center">
            {status === "verifying" && "Please wait while we verify your email..."}
            {status === "success" && "Your email has been verified!"}
            {status === "error" && "Verification failed"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            {status === "verifying" && (
              <div className="py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tertiary mx-auto"></div>
                <p className="mt-4 text-gray-600">{message}</p>
              </div>
            )}

            {status === "success" && (
              <div className="py-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-green-700 font-medium mb-2">{message}</p>
                <p className="text-sm text-gray-600 mb-4">
                  Redirecting to login page...
                </p>
                <Button
                  onClick={() => router.push("/login")}
                  className="w-full bg-tertiary text-white hover:bg-opacity-80"
                >
                  Go to Login
                </Button>
              </div>
            )}

            {status === "error" && (
              <div className="py-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p className="text-red-700 font-medium mb-2">{message}</p>
                <div className="space-y-2">
                  <Button
                    onClick={() => router.push("/register/student")}
                    className="w-full bg-tertiary text-white hover:bg-opacity-80"
                  >
                    Register Again
                  </Button>
                  <Link href="/login" className="block text-sm text-tertiary hover:underline">
                    Go to Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="mx-auto max-w-md w-full">
          <CardContent className="py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tertiary mx-auto"></div>
            <p className="mt-4 text-center text-gray-600">Loading...</p>
          </CardContent>
        </Card>
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}
