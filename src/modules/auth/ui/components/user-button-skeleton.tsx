import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const UserButtonSkeleton = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Avatar skeleton */}
      <Skeleton className="h-8 w-8 md:h-10 md:w-10 rounded-full" />

      {/* Status indicator skeleton */}
      <Skeleton className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background" />
    </div>
  );
};

export default UserButtonSkeleton;
