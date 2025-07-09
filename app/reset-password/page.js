"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const [token,setToken] = useState(null)

  useEffect(() => {
    const qp = new URLSearchParams(window.location.search)
    setToken(qp.get("token"))
  },[])
  
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });
    const json = await res.json();
    if (json.ok) {
      setMsg("Password reset! Redirecting to login...");
      setTimeout(() => router.push("/login"), 2000);
    } else {
      setMsg(json.error);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Reset Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="New password"
          required
          className="w-full p-2 border rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="w-full bg-green-600 text-white p-2 rounded">
          Reset Password
        </button>
      </form>
      {msg && <p className="mt-4">{msg}</p>}
    </div>
  );
}
