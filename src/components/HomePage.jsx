import React from "react";
import { motion } from "framer-motion";
import { HomeSection } from "../constants";

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
  // 変化後の値
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <h1 className="text-center mb-7 text-[40px] font-bold text-white mx-5 font-poppins">
          Welcome!
        </h1>
      </motion.div>
      <motion.div
        className="max-w-7xl h-auto bg-transparent rounded-xl flex flex-wrap gap-y-7 p-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {HomeSection.map((link) => (
          <motion.div
            key={link.id}
            className="w-[500px] sm:h-[600px] h-[500px] bg-blue m-auto rounded-md relative"
            variants={item}
          >
            <div className="text-white absolute flex flex-col m-5 items-center">
              <img
                className="sm:rounded-md sm:object-cover object-contain sm:h-[300px] h-[170px] cursor-pointer hover:opacity-80"
                onClick={() => window.open(link.source, "_blank")}
                src={link.src}
                alt="drink"
                width={450}
              />
              <p className="sm:my-7 my-4 sm:text-[16px] text-[15px]">
                {link.date}
              </p>
              <p className="sm:text-[16px] text-[15px]">{link.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
