import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_25%)] opacity-20 blur-3xl pointer-events-none" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 border border-white/5 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-primary text-xs font-bold uppercase tracking-wider">
            Sri Lanka's #1 Tech Repair Service
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
          <AnimatedText text="Your Tech." className="justify-center text-white" />
          <AnimatedText text="Our Expertise." className="justify-center text-primary" delay={0.5} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium electronics repair and IT consultancy for individuals and businesses. 
          Fast, reliable, and secure services delivered by certified experts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto group">
            Book a Repair
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Phone className="mr-2 w-4 h-4" />
            24/7 Support
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
