import React from "react";
import { motion } from "framer-motion";

const container = {
  // 変化する値
  hidden: {
    opacity: 1,
    scale: 0,
    // x: 500,
  },

  // 変化しきった後の値
  visible: {
    opacity: 1,
    scale: 1,
    // x: 0,

    // transitionをかけている。
    transition: {
      // 小要素にtransitionをかける
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  // 変化する値
  hidden: { y: 20, opacity: 0 },
  // 変化しきった後の値
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HomePage = () => {
  return (
    <>
      <motion.div variants={container} initial="hidden" animate="visible">
        <h1 className="text-center mb-7 text-5xl font-bold text-white">
          Welcome!
        </h1>
      </motion.div>
      <motion.div
        className="max-w-7xl h-auto bg-transparent rounded-xl mx-auto flex flex-wrap gap-7 p-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="w-[500px] h-[600px] bg-blue mx-auto my-auto gap-y-5 rounded-md"
            variants={item}
          />
        ))}
      </motion.div>
    </>
  );
};

export default HomePage;
