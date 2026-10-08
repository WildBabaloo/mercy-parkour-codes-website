"use client";

import { forwardRef, ComponentProps, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const TechInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const pathname = usePathname();
    const { replace } = useRouter();
    const [text, setText] = useState("");
    const [searchTerm] = useDebounce(text, 500);

    useEffect(() => {
      const params = new URLSearchParams(window.location.search);

      if (searchTerm) {
        params.set("search", searchTerm);
      } else {
        params.delete("search");
      }
      const query = params.toString();
      const newUrl = query ? `${pathname}?${query}` : pathname;

      if (newUrl !== `${window.location.pathname}${window.location.search}`) {
        replace(newUrl);
      }
    }, [searchTerm, pathname, replace]);

    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  },
);

TechInput.displayName = "TechInput";

export { TechInput };
