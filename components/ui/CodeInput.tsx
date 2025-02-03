"use client";
import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";

const CodeInput = forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & {
    onMenuToggle?: () => void;
    searchText: string;
    setSearchText: (value: string) => void;
  }
>(
  (
    { className, type, onMenuToggle, searchText, setSearchText, ...props },
    ref
  ) => {
    const searchParams = useSearchParams();

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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        {/* Search Icon */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground flex gap-4">
          <button>
            <AdjustmentsHorizontalIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
              onClick={onMenuToggle}
            />
          </button>

          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
);
CodeInput.displayName = "CodeInput";

export { CodeInput };
