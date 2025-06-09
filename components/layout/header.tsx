import Image from "next/image";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between gap-5 my-auto px-3 md:px-20 py-2">
        <div className="flex gap-2">
          <Image
            src={"/images/ucc-logo.svg"}
            alt="Logo"
            height={40}
            width={40}
          />
          <p className="text-2xl font-extrabold my-auto md:flex hidden"><span className="text-primary">UCC</span>SCAN</p>
        </div>
        <div className="w-full md:w-sm">
          <Input
            className="h-12"
            placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
          />
        </div>
      </div>
    </div>
  )
}
export default Header;