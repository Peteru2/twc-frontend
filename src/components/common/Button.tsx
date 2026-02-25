// SubmitButton.tsx
import { motion } from "framer-motion";

export const SubmitButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="
        w-full mt-10 py-3 rounded-xl
        bg-gradient-to-r from-blue-600 to-indigo-600
        text-white font-semibold
        shadow-lg
      "
    >
      Submit
    </motion.button>
  );
};