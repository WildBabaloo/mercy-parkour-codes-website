"use client";
import { forwardRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {/* Input Bar */}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {/* Search Icon */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
