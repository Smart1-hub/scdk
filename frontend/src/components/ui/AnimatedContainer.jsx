import { motion } from "framer-motion";

export default function AnimatedContainer({
  children,
  className = "",
  delay = 0,
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.96,
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}

      className={className}
    >

      {children}

    </motion.div>

  );

}