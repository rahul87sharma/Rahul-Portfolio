"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
};

const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [motionComponents, setMotionComponents] = useState<any>(null);
  const scopeRef = useRef(null);
  const wordsArray = words.split(" ");

  // Load framer-motion dynamically on the client
  useEffect(() => {
    setIsMounted(true);
    import("framer-motion").then((mod) => {
      setMotionComponents({
        motion: mod.motion,
        stagger: mod.stagger,
        animate: mod.animate,
      });
    });
  }, []);

  // Animation effect - only runs when motion components are loaded
  useEffect(() => {
    if (!isMounted || !motionComponents || !scopeRef.current) return;

    const { animate, stagger } = motionComponents;

    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [isMounted, motionComponents]);

  // Fallback rendering during SSR or before framer-motion is loaded
  if (!isMounted || !motionComponents) {
    return (
      <div className={cn("font-bold", className)}>
        <div className="my-4">
          <div className="dark:text-white text-black leading-snug tracking-wide">
            {words}
          </div>
        </div>
      </div>
    );
  }

  const { motion } = motionComponents;

  const renderWords = () => (
    <motion.div ref={scopeRef}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${
            idx > 3 ? "text-purple" : "dark:text-white text-black"
          } opacity-0`}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
