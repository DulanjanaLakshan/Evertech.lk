import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -8, borderColor: "var(--color-primary)" } : {}}
        transition={{ duration: 0.3 }}
        className={cn(
          "rounded-2xl border border-secondary-light bg-surface/50 backdrop-blur-sm p-6 shadow-xl transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
