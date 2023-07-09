import React from "react";
import { motion } from "framer-motion";
import github from "../img/github.png";
import external from "../img/external-link.png";
import { Link } from "react-router-dom";

const HostNumber = 3000;

const HomeSection = [
  {
    id: 1,
    src: `http://localhost:${HostNumber}/logo1/starbucks-blog.jpg`,
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
    source: "https://ydayo.github.io/gibhub.io-starbucks/",
  },
  {
    id: 2,
    src: `http://localhost:${HostNumber}/logo1/bluebottole.jpg`,
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
    source: "https://ydayo.github.io/blue-bottle/",
  },
  {
    id: 3,
    src: `http://localhost:${HostNumber}/logo1/golf-wang.jpg`,
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
    source: "https://ydayo.github.io/golf.wang-clone/",
  },
  {
    id: 4,
    src: `http://localhost:${HostNumber}/logo1/instagram.jpg`,
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
    source: "https://ydayo.github.io/github.io-instagram-clone/",
  },
];

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
        // variants={container}
        // initial="hidden"
        // animate="visible"
        // transition="transition"
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
      {/* <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="text-white md:text-[17px] text-[15px] mx-5 text-center mb-7">
          ようこそ Ishikawa Tokyoへ！
          <br />
          本サイトは、駆け出しエンジニアとしてBlogを一から作るという目的のもと
          <br />
          作成しているサイトです。技術的なことはもちろん、Ishikawa
          Tokyo製作者自身の
          <br />
          趣味や気になっている事を掲載できたらなと思っています！
        </p>
      </motion.p> */}
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
            {/* <Link onClick={() => window.open(link.source, "_blank")}>
              <div className="bg-white w-10 h-10 absolute top-7 right-8 cursor-pointer grid">
                <img
                  className="flex items-center justify-center"
                  src={external}
                  alt="external"
                  width={33}
                  height={33}
                />
              </div>
            </Link> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
