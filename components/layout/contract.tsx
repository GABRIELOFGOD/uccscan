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
import { useState } from "react";
import { useRouter } from "next/navigation";

const Contract = () => {
  const router = useRouter();
  const [contractAddress, setContractAddress] = useState<string>("");

  const handleSubmit = () => {
    if (!contractAddress) {
      toast
    router.push(`/verifyContract?address=${contractAddress}`);
  }
  
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
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Please Select</SelectItem>
              <SelectItem value="solidity-single-file">Solidity (Single file)</SelectItem>
              <SelectItem value="solidity-multi-file">Solidity (Multi-Part files)</SelectItem>
              <SelectItem value="solidity-json">Solidity (Standard-Json-Input)</SelectItem>
              <SelectItem value="vyper-single">Vyper (Single file)</SelectItem>
              <SelectItem value="vyper-json">Vyper-Json (Experimental)</SelectItem>
              <SelectItem value="cross-chain">Cross-chain Similar Match (Experimental)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="compiler-type">Please selectCompiler Version</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Please Select</SelectItem>
              <SelectItem value="0.830">v0.8.30</SelectItem>
              <SelectItem value="0.829">v0.8.29</SelectItem>
              <SelectItem value="0.828">v0.8.28</SelectItem>
              <SelectItem value="0.827">v0.8.27</SelectItem>
              <SelectItem value="0.826">v0.8.26</SelectItem>
              <SelectItem value="0.825">v0.8.25</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="compiler-type">Please select Open Source License Type</label>
          <Select>
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
          />
          <label htmlFor="agree">I agree to the terms of service</label>
        </div>
        
      </div>
      <div className="mt-5 flex w-full justify-center gap-5">
        <Button>
          Continue
        </Button>
        <Button
          variant={"ghost"}
          className="bg-border"
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Contract;
