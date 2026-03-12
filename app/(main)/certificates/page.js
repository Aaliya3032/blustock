"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Certificates() {

  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);

  const searchParams = useSearchParams();
  const urlCertId = searchParams.get("id");

  const verify = async () => {

    const res = await fetch(`/api/intern-certificates?id=${certId}`);

    const data = await res.json();

    console.log("API Response:", data);

    setResult(data);
  };

  useEffect(() => {
    if (!urlCertId) return;

    const runVerification = async () => {
      setCertId(urlCertId);

      const res = await fetch(`/api/intern-certificates?id=${urlCertId}`);
      const data = await res.json();

      setResult(data);
    };

    runVerification();
  }, [urlCertId]);

  return (
    <div className="flex flex-col items-center p-10">

      <h1 className="text-3xl font-bold mb-6">
        BluStock Certificate Verification
      </h1>

      <input
        className="border p-2 rounded"
        placeholder="Enter Certificate ID"
        value={certId}
        onChange={(e)=>setCertId(e.target.value)}
      />

      <button
        onClick={verify}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Verify
      </button>
    {result?.verified && (

    <div className="mt-8 border rounded p-6 shadow w-[400px]">

    <h2 className="text-green-600 text-xl font-bold mb-4 text-center">
    ✔ Certificate Verified
    </h2>

    <p><b>Certificate ID:</b> {result.certificate.certificateId}</p>    
    <p><b>Name:</b> {result.certificate.name}</p>
    <p><b>Role:</b> {result.certificate.role}</p>
    <p><b>Duration:</b> {result.certificate.duration}</p>
    <p><b>Issue Date:</b> {result.certificate.issueDate}</p>
    <p><b>Location:</b> {result.certificate.location}</p>
    <p><b>Status:</b> {result.certificate.status}</p>

    </div>

    )}

    {result && !result.verified && (

    <div className="mt-6 text-red-600 font-bold">
    Certificate Not Found
    </div>

    )}
    </div>
  );
}