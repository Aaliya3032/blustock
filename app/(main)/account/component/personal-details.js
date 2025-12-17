"use client";
import { updateUserInfo } from "@/app/actions/account";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const PersonalDetails = ({ userInfo }) => {
  const [infoState, setInfoState] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    designation: userInfo.designation,
    bio: userInfo.bio,
    profilePicture: userInfo.profilePicture,
    aadhar: userInfo.aadhar || "",
  });
  const router = useRouter()

  const DEFAULT_AVATAR =
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

  const hasCustomProfile =
    infoState.profilePicture && infoState.profilePicture !== DEFAULT_AVATAR;
  const hasAadhar = !!infoState.aadhar;
  const isInstructorVerified = !!userInfo.isInstructorVerified;

  let statusLabel = "Profile incomplete";
  let statusColorClasses = "bg-red-100 text-red-700 border border-red-300";
  let statusDescription =
    "Please upload your profile picture and Aadhar PDF to request verification.";

  if (isInstructorVerified) {
    statusLabel = "Verified account";
    statusColorClasses = "bg-green-100 text-green-700 border border-green-300";
    statusDescription =
      "Your account has been verified by the instructor. You can enroll for courses.";
  } else if (hasCustomProfile && hasAadhar) {
    statusLabel = "Pending verification";
    statusColorClasses = "bg-yellow-100 text-yellow-700 border border-yellow-300";
    statusDescription =
      "Your documents are submitted. Within 24 hours an instructor will verify your profile and then you can enroll for courses.";
  }

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setInfoState({
      ...infoState,
      [field]: value,
    });
  };

  const handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("email", userInfo.email);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      console.log("codeee==",data)
      
      setInfoState((prev) => ({
        ...prev,
        profilePicture: data.fileName,
      }));

      toast.success("Profile picture updated!");
       router.refresh();
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed");
    }
};

  const handleAadharChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Client-side validation for file type and size
    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed for Aadhar.");
      return;
    }

    const maxSizeBytes = 2 * 1024 * 1024; // 2 MB
    if (file.size && file.size > maxSizeBytes) {
      toast.error("Aadhar PDF must be smaller than 2MB.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("aadhar", file);
      formData.append("email", userInfo.email);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Aadhar upload failed");
      }

      const data = await res.json();

      setInfoState((prev) => ({
        ...prev,
        aadhar: data.fileName,
      }));

      toast.success("Aadhar PDF uploaded successfully!");
      router.refresh();
    } catch (error) {
      console.error("Aadhar upload error:", error);
      toast.error(error.message || "Aadhar upload failed");
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await updateUserInfo(userInfo?.email, infoState);
      toast.success("User details updated successfully");
      router.refresh();
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };
  return (
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
      <h5 className="text-lg font-semibold mb-4 text-primary">
        Personal Detail :
      </h5>
      <div className="mb-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusColorClasses}`}
        >
          {statusLabel}
        </span>
        <p className="mt-2 text-xs text-gray-600">{statusDescription}</p>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Label className="mb-2 block text-tertiary">
              First Name : <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="First Name:"
              id="firstName"
              name="firstName"
              value={infoState?.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label className="mb-2 block text-tertiary">
              Last Name : <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Last Name:"
              id="lastName"
              name="lastName"
              value={infoState?.lastName}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label className="mb-2 block text-tertiary">
              Your Email : <span className="text-red-600">*</span>
            </Label>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={infoState?.email}
              disabled
            />
          </div>
          <div>
            <Label className="mb-2 block text-tertiary">Occupation :</Label>
            <Input
              name="designation"
              value={infoState?.designation}
              id="designation"
              type="text"
              placeholder="Occupation :"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-5">
          <Label className="mb-2 block text-tertiary">Profile Picture :</Label>
          <Input type="file" accept="image/*" onChange={handleFileChange} />
          {infoState?.profilePicture && (
            <div className="mt-2 flex items-center gap-3">
              <img
                src={infoState.profilePicture}
                alt="Profile picture"
                className="w-12 h-12 rounded-full border border-gray-300 object-cover"
              />
              <a
                href={infoState.profilePicture}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-xs"
              >
                View full image
              </a>
            </div>
          )}
        </div>
        <div className="mt-5">
          <Label className="mb-2 block text-tertiary">Aadhar (PDF) :</Label>
          <Input type="file" accept="application/pdf" onChange={handleAadharChange} />
          {infoState?.aadhar && (
            <p className="mt-1 text-xs">
              <span className="text-gray-500 mr-2">Aadhar file uploaded.</span>
              <a
                href={infoState.aadhar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View PDF
              </a>
            </p>
          )}
        </div>
        {/*end grid*/}
        <div className="grid grid-cols-1">
          <div className="mt-5">
            <Label className="mb-2 block text-tertiary">Description :</Label>
            <Textarea
              id="bio"
              name="bio"
              value={infoState?.bio}
              placeholder="Message :"
              onChange={handleChange}
            />
          </div>
        </div>
        {/*end row*/}
        <Button className="mt-5" asChild>
          <input type="submit" name="send" value="Save Changes" />
        </Button>
      </form>
      {/*end form*/}
    </div>
  );
};

export default PersonalDetails;
