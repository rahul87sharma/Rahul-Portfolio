"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import types but not the actual component
import type { Options } from "react-lottie";

// Dynamic import with no SSR
const LottieComponent = dynamic(() => import("react-lottie"), { ssr: false });

interface ClientOnlyLottieProps {
  options: Options;
  height?: number;
  width?: number;
  className?: string;
}

export default function ClientOnlyLottie({
  options,
  height,
  width,
  className,
}: ClientOnlyLottieProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR
  if (!isMounted) {
    return <div style={{ height, width }} className={className} />;
  }

  // Only render Lottie on the client side
  return <LottieComponent options={options} height={height} width={width} />;
}
