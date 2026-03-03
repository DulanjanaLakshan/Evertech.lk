import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold font-heading text-primary mb-2"
      >
        {displayValue}+
      </motion.div>
      <p className="text-text-secondary font-medium uppercase tracking-wider text-sm">
        {label}
      </p>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <Counter value={500} label="Repairs Completed" />
        <Counter value={24} label="Hours Support" />
        <Counter value={30} label="Min Response Time" />
      </div>
    </section>
  );
};
