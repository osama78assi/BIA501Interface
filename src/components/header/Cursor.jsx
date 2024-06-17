import { motion } from "framer-motion";

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ duration: 0.5, ease: "circInOut" }}
      className="absolute z-0 h-7 rounded-[10rem] bg-white md:h-12"
    />
  );
};

export default Cursor
