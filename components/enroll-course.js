"use client"; 
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation';


const EnrollCourse = ({asLink,courseId,price}) => {
  const router = useRouter();

  const handlePayment = async () => {
    try {
       //  Check if user is logged in
      const authRes = await fetch("/api/me", { method: "GET" });
      if (authRes.status === 401) {
        router.push("/login");
        return;
      }
      const user = await authRes.json();   
      // Step 1: Create order on server
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: price}), 
      });

      if (!res.ok) {
    throw new Error('Failed to create order');
   }

      const data = await res.json();

      if (!data.id) {
        alert("Order ID missing from server");
        return;
      }

      // Step 2: Initialize Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public key from Razorpay
        amount: data.amount,
        currency: data.currency,
        name: "Blustock Consultants", //Add logo later
        description: "Course Enrollment",
        order_id: data.id,
          handler: async function (response) {
          try {
            // 3️⃣  Verify payment on server
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                userId: user.id,
                courseId: courseId,
              }),
            });

            if (!verifyRes.ok) {
              alert("Payment verification failed on server.");
              return;
            }

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert("✅ Payment verified and successful!");
            } else {
              alert("⚠️ Payment not verified. Please contact support.");
            }
          } catch (err) {
            console.error("Verify error:", err);
            alert("Server error while verifying payment.");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      if (!window.Razorpay) {
         alert("Razorpay SDK failed to load. Please refresh and try again.");
         return;
          }

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
    <form>
        {asLink ? (
            <Button
             type="button"
            variant="ghost"
            className="text-xs text-tertiary h-7 gap-1 hover:scale-105 duration-300 ease-in-out"
          >
            Enroll
            <ArrowRight className="w-3" />
          </Button>
        ) : (
            <Button
             type="button"
             onClick={handlePayment}
             className={cn(buttonVariants({ size: "lg" }))}>
                Enroll Now
              </Button>
        )}
    </form>
    </>
  )
}

export default EnrollCourse