import React from "react";
import { motion } from "framer-motion";
import { HomeSection, skillSec } from "../constants";
import Github from "../img/github.png";

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
      {/* Skill Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <h1 className="text-center mb-7 text-[40px] font-bold mx-5 font-poppins text-orange-500">
          Skill
        </h1>
      </motion.div>
      <ul className="flex flex-wrap gap-7 justify-center mb-12">
        {skillSec.map((link, idx) => (
          <li
            key={idx}
            className="bg-white text-white min-w-[200px] basis-1/3 text-center rounded-md flex justify-center items-center p-3 min-h-[150px]"
          >
            <img src={link.icon} alt="" width={130} />
          </li>
        ))}
      </ul>

      {/* Portfoilo Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <h1 className="text-center mb-7 text-[40px] font-bold mx-5 font-poppins text-orange-500">
          Portfolio
        </h1>
      </motion.div>
      <motion.div
        className="max-w-7xl h-auto rounded-xl flex flex-wrap gap-y-7 p-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {HomeSection.map((link) => (
          <motion.div
            key={link.id}
            className="w-[500px] sm:h-[600px] h-[500px] bg-blue mx-auto mb-5 rounded-md relative shadow-xl shadow-cyan-700"
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
              <p className="sm:text-[16px] text-[15px] tracking-wider">
                {link.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* github more */}
      <div className="flex justify-center my-12">
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/Ydayo"
            className="bg-white rounded-full w-[110px] h-[110px] flex justify-center items-center hover:bg-transparent2 duration-300"
          >
            <img src={Github} alt="" width={100} className="rounded-full" />
          </a>
          <h1 className="ml-3 text-orange-500 font-bold text-[20px]">
            My Github
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
