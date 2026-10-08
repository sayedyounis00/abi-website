import React from "react";
import Image from "next/image";

interface AbiLogoProps {
  className?: string;
  iconOnly?: boolean;
  textClassName?: string;
  subtextClassName?: string;
}

export default function AbiLogo({
  className = "h-11 w-auto",
  iconOnly = false,
  textClassName = "text-slate-900",
  subtextClassName = "text-teal-700",
}: AbiLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo-abi-2.svg"
        alt="ABI - Arbeit.Bildung.International Logo"
        width={44}
        height={44}
        priority
        className={`${className} object-contain`}
      />
      {!iconOnly && (
        <div className="flex flex-col min-w-0">
          <span className={`font-bold text-xs sm:text-sm leading-tight tracking-normal truncate ${textClassName}`}>
            Arbeit.Bildung.International
          </span>
          <span className={`text-xs font-semibold ${subtextClassName}`}>
            abi-karriere.de
          </span>
        </div>
      )}
    </div>
  );
}
