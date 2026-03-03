import { motion } from "framer-motion";
import { Search, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Diagnose",
    description: "We perform a thorough analysis to identify the root cause.",
    icon: Search,
  },
  {
    id: 2,
    title: "Quote",
    description: "You receive a transparent, upfront cost estimate.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Repair",
    description: "Our certified technicians fix your device with precision.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Return",
    description: "Quality checks passed, your device is returned to you.",
    icon: CheckCircle,
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-1 bg-primary -translate-y-1/2 origin-left hidden md:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-secondary-light flex items-center justify-center mb-6 relative z-10 group-hover:border-primary transition-colors duration-300 shadow-xl">
                  <step.icon className="w-8 h-8 text-text-muted group-hover:text-primary transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-surface">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
