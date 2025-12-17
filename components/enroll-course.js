"use client"; 
import React, { useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import QR from '@/assets/QR.png'
import logo from '@/assets/logo2.png'
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";


const EnrollCourse = ({asLink,courseId,price}) => {
  const router = useRouter();
  const [showOfflineModal, setShowOfflineModal] = useState(false);

  const handlePayment = async () => {
    try {
       //  Check if user is logged in
      const authRes = await fetch("/api/me", { method: "GET" });
      if (authRes.status === 401) {
        router.push("/login");
        return;
      }
      const user = await authRes.json();   

      //  Additional gating before allowing payment
      const DEFAULT_AVATAR =
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

      // Require non-default profile picture
      if (!user?.profilePicture || user.profilePicture === DEFAULT_AVATAR) {
        alert(
          "Please upload your profile picture in your account before enrolling. You will be able to enroll once your profile is completed and verified."
        );
        router.push("/account");
        return;
      }

      // Require Aadhar PDF
      if (!user?.aadhar) {
        alert(
          "Please upload your Aadhar PDF in your account before enrolling. You will be able to enroll once your profile is completed and verified."
        );
        router.push("/account");
        return;
      }

      // Require instructor approval of profile
      if (!user?.isInstructorVerified) {
        alert(
          "Your profile details have been submitted. Within 24 hours an instructor will verify your profile, after which you can enroll for this course."
        );
        return;
      }
      // Offline payment flow: open QR modal instead of Razorpay
      setShowOfflineModal(true);
      
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDone = async () => {
    try {
      const res = await fetch("/api/offline-enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });

      if (!res.ok) {
        alert("Could not register your payment request. Please contact support.");
      } else {
        alert(
          "Thank you! After payment verification you will be able to access this course."
        );
      }
    } catch (error) {
      console.error("Offline enrollment error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setShowOfflineModal(false);
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
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Enroll Now
          </Button>
        )}
      </form>

      {/* Offline payment modal */}
      <Dialog open={showOfflineModal} onOpenChange={setShowOfflineModal}>
        <DialogContent
          className="max-w-md bg-white text-primary"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-8 mb-1">
            <img
              src={logo.src}
              alt="Blustock Consultants logo"
              className="w-20 h-auto md:w-24"
            />
            <DialogTitle className="text-xl font-semibold text-primary">
              Offline Payment
            </DialogTitle>
          </div>
          <p className="text-sm text-gray-600">
            Scan the QR code below to complete your payment and send the
            payment screenshot to us on WhatsApp.
          </p>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
              <img
                src={QR.src}
                alt="Payment QR code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-primary">Contact details</p>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="tel:+919587666786"
                className="hover:text-primary underline"
              >
                +91 9587-666786
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-500" />
              <a
                href="https://wa.me/916376520654?text=Hie!%20I%20am%20coming%20from%20your%20site"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline"
              >
                +91 6376-520654
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href="mailto:blustockconsultants@gmail.com"
                className="hover:text-primary underline"
              >
                blustockconsultants@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <a
                href="https://www.google.com/maps/place/BluStock+Consultants+-+A+Stock+Market+Academy+in+Jaipur/@26.9469876,75.7360811,17z/data=!3m1!4b1!4m6!3m5!1s0x396db33f7fcf2685:0x2c7b1c7adb6e1448!8m2!3d26.9469876!4d75.7360811!16s%2Fg%2F11w2db88tf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline"
              >
                Plot 212/A, Joshi Marg, Jhotwara, Jaipur (302012)
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleDone} className="px-6">
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EnrollCourse