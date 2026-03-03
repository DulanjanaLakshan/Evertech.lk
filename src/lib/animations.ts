export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export const scaleOnHover = { whileHover: { scale: 1.05 } };

export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};
