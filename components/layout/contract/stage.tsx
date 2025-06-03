import { cn } from "@/lib/utils";

export interface StageProps {
    stage: "contract" | "publish";
}

const Stage = ({ stage }: StageProps) => {
  return (
    <div className="w-fill justify-center flex gap-5 my-5">
      <div className="flex gap-3">
        <div className={cn("rounded-full h-7 font-semibold w-7 flex items-center justify-center bg-border", stage === "contract" && "bg-primary text-white")}>
          1
        </div>
        <p className="my-auto">Contract Details</p>
      </div>
      <div className="flex gap-3">
        <div className={cn("rounded-full h-7 font-semibold w-7 flex items-center justify-center bg-border", stage === "publish" && "bg-primary text-white")}>
          2
        </div>
        <p className="my-auto">Verify and Publish</p>
      </div>
    </div>
  )
}

export default Stage;