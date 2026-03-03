import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Consultancy = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-accent)_0%,_transparent_20%)] opacity-10 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-6">
            <span className="text-accent text-xs font-bold uppercase tracking-wider">
              Expert Consultation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Not sure what's wrong? <br />
            <span className="text-accent">Let's diagnose it together.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Our certified experts are ready to analyze your tech issues and propose the most effective solutions. No hidden fees, just honest advice.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 group">
            <MessageSquare className="mr-2 w-5 h-5" />
            Free Consultation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="bg-surface p-6 rounded-2xl border border-white/5 shadow-2xl transform rotate-[-2deg]">
                <div className="h-2 w-20 bg-accent/50 rounded mb-4" />
                <div className="h-2 w-full bg-white/10 rounded mb-2" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
              </div>
              <div className="bg-surface p-6 rounded-2xl border border-white/5 shadow-2xl transform rotate-[1deg]">
                <div className="h-8 w-8 bg-primary/20 rounded-full mb-4" />
                <div className="h-2 w-full bg-white/10 rounded mb-2" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-surface p-6 rounded-2xl border border-white/5 shadow-2xl transform rotate-[3deg]">
                <div className="h-2 w-full bg-white/10 rounded mb-2" />
                <div className="h-2 w-full bg-white/10 rounded mb-2" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
              <div className="bg-surface p-6 rounded-2xl border border-white/5 shadow-2xl transform rotate-[-1deg]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 bg-accent rounded-full" />
                  <div className="h-2 w-20 bg-white/10 rounded" />
                </div>
                <div className="h-2 w-full bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
