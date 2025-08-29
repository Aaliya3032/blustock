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
  });
  const [preview, setPreview] = useState(null);
  const router = useRouter();

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
    formData.append("upload_preset", "your_upload_preset"); // apna preset name daalna
    formData.append("folder", "user_profiles"); // folder optional hai

    // Cloudinary upload
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.secure_url) {
      // Yehi URL mongoDB me save karna hai
      console.log("Uploaded Image URL:", data.secure_url);

      // ab apna API call jo mongoDB me save karega
      await fetch("/api/update-profile-picture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: data.secure_url }),
      });

    } else {
      console.error("Cloudinary upload failed:", data);
    }
  } catch (error) {
    console.error("Image upload error:", error);
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
          {/* Show preview while uploading */}
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="mt-3 w-24 h-24 rounded-full object-cover"
            />
          ) : infoState.profilePicture ? (
            <img
              src={infoState.profilePicture}
              alt="profile"
              className="mt-3 w-24 h-24 rounded-full object-cover"
            />
          ) : null}
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
