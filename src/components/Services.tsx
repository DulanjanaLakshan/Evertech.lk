import { motion } from "framer-motion";
import { Laptop, Smartphone, Server, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const services = [
  {
    title: "Laptop & PC Repair",
    description: "Expert diagnosis and repair for all major brands. Screen replacement, battery upgrades, and motherboard fixes.",
    icon: Laptop,
  },
  {
    title: "Mobile Device Care",
    description: "Screen repairs, battery replacements, and water damage recovery for iPhones and Android devices.",
    icon: Smartphone,
  },
  {
    title: "Server Maintenance",
    description: "Proactive server monitoring, maintenance, and optimization for business continuity.",
    icon: Server,
  },
  {
    title: "Data Recovery",
    description: "Advanced data retrieval from damaged hard drives, SSDs, and corrupted storage media.",
    icon: ShieldCheck,
  },
  {
    title: "Custom PC Builds",
    description: "High-performance gaming and workstation builds tailored to your specific requirements.",
    icon: Cpu,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Our <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary max-w-2xl mx-auto">
            Comprehensive technology solutions for every need.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full group hover:border-primary/50 transition-all duration-300">
                <div className="mb-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
