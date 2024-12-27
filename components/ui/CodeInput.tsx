"use client";
import { forwardRef, ComponentProps, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const CodeInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [text, setText] = useState("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [searchTerm] = useDebounce(text, 500);

    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      if (searchTerm) {
        params.set("search", searchTerm);
      } else {
        params.delete("search");
      }
      replace(`${pathname}?${params.toString()}`);
    }, [searchTerm, pathname, searchParams, replace]);

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
          value={text}
          onChange={(e) => setText(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        {/* Search Icon */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground flex gap-4">
          <AdjustmentsHorizontalIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
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
