"use client";

import Stage from "./contract/stage";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Publish = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    const contractAddress = searchParams.get("address");
    if (!contractAddress) {
      router.back();
      return;
    }
    setAddress(contractAddress);
  }, [searchParams, router]);

  return (
    <div className="bg-gray-100 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-3">
      <div className="bg-gray-100 w-full h-full md:w-lg mx-auto py-10">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-2xl font-bold">Verify & Publish Contract Source Code</p>
          <p className="text-sm text-gray-500 text-center">Source code verification provides transparency for users interacting with smart contracts. By uploading the source code, BscScan will match the compiled code with that on the blockchain. Read more.</p>
        </div>
        <Stage stage="publish" />
        <div>
          <div className="flex  flex-col gap-5 bg-white w-full shadow-sm border border-border/80 rounded-lg p-3">
            <p className="text-lg font-semibold">We are checking for {address} on the blockchain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publish;
