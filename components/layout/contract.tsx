"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useVerify } from "@/hooks/useVerify";

const Contract = () => {
  const router = useRouter();
  const [contractAddress, setContractAddress] = useState<string>("");
  const [compilerType, setCompilerType] = useState<string>("");
  const [compilerVersion, setCompilerVersion] = useState<string>("");
  const [licenseType, setLicenseType] = useState<string>("");
  const [agreed, setAgreed] = useState<boolean>(false);

  const [compilerVersions, setCompilerVersions] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!contractAddress || contractAddress.trim() === "" || !compilerType || compilerType === "default" || !compilerVersion || compilerVersion === "default" || !licenseType || licenseType === "default") {
      toast.error('Please fill all the fields');
      return;
    }
    if (!agreed) {
      toast.error('Please agree to the terms of service');
      return;
    }
    router.push(`/verifyContract?address=${contractAddress}&v=${compilerVersion}&t=${compilerType}&l=${licenseType}`);
    // Reset the form after submission
    setContractAddress("");
    setCompilerType("");
    setCompilerVersion("");
    setLicenseType("");
    setAgreed(false);
  }

  const handleReset = () => {
    setContractAddress("");
    setCompilerType("");
    setCompilerVersion("");
    setLicenseType("");
    setAgreed(false);
  }

  const { getVersions } = useVerify();

  const getAvailableVersions = async () => {
    try {
      const gottenVersions = await getVersions();
      console.log("Versions:", gottenVersions);
      if (gottenVersions && Array.isArray(gottenVersions.versions)) {
        // Remove duplicates
        const uniqueVersions = Array.from(new Set(gottenVersions.versions));
        setCompilerVersions(uniqueVersions as string[]);
      } else {
        toast.error('Failed to fetch compiler versions');
      }
    } catch (error) {
      toast.error('Failed to fetch compiler versions');
      console.error('Error fetching compiler versions:', error);
    }
  }

  
              // <SelectItem value="0.830">v0.8.30</SelectItem>
              // <SelectItem value="0.829">v0.8.29</SelectItem>
              // <SelectItem value="0.828">v0.8.28</SelectItem>
              // <SelectItem value="0.827">v0.8.27</SelectItem>
              // <SelectItem value="0.826">v0.8.26</SelectItem>
              // <SelectItem value="0.825">v0.8.25</SelectItem>

  useEffect(() => {
    getAvailableVersions();
  }, []);
  
  return (
    <div>
      <div className="flex  flex-col gap-5 bg-white w-full shadow-sm border border-border/80 rounded-lg p-3">
        <p>Please enter the Contract Address you would like to verify</p>
        <Input
          placeholder="0x..."
          className="w-full"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="compiler-type">Please selectCompiler Type</label>
          <Select onValueChange={(value) => setCompilerType(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Please Select</SelectItem>
              <SelectItem value="solidity-single-file">Solidity (Single file)</SelectItem>
              <SelectItem value="solidity-multi-file">Solidity (Multi-Part files)</SelectItem>
              <SelectItem value="solidity-json">Solidity (Standard-Json-Input)</SelectItem>
              {/* <SelectItem value="vyper-single">Vyper (Single file)</SelectItem>
              <SelectItem value="vyper-json">Vyper-Json (Experimental)</SelectItem>
              <SelectItem value="cross-chain">Cross-chain Similar Match (Experimental)</SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="compiler-type">Please selectCompiler Version</label>
          <Select onValueChange={(value) => setCompilerVersion(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Please Select</SelectItem>
              {compilerVersions.map((version, i) => (
                <SelectItem key={i} value={version}>
                  v{version}
                </SelectItem>
              ))}
              {/* <SelectItem value="0.8.0">0.8.0</SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="compiler-type">Please select Open Source License Type</label>
          <Select onValueChange={(value) => setLicenseType(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Please Select</SelectItem>
              <SelectItem value="no-license">No License (None)</SelectItem>
              <SelectItem value="unlicense">The Unlicense</SelectItem>
              <SelectItem value="MIT">MIT License (MIT)</SelectItem>
              <SelectItem value="GNU2">GNU General Public License v2.0</SelectItem>
              <SelectItem value="0GNU3">GNU General Public License v3.0</SelectItem>
              <SelectItem value="GNU2.1">GNU General Public License v3.1</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-3 w-fill justify-center">
          <Input
            type="checkbox"
            id="agree"
            className="h-4 w-4 my-auto"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree">I agree to the terms of service</label>
        </div>
        
      </div>
      <div className="mt-5 flex w-full justify-center gap-5">
        <Button
          onClick={handleSubmit}
        >
          Continue
        </Button>
        <Button
          variant={"ghost"}
          className="bg-border"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Contract;
