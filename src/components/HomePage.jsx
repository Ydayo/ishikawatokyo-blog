import React from "react";
import { motion } from "framer-motion";
import drink from "../assets/what-item3.jpeg";
import { Link } from "react-router-dom";
import github from "../img/github.png";
import starbucks from "../img/starbucks-blog.jpg";

const HomeSection = [
  {
    id: 1,
    image: drink,
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
    source: "https://github.com/Ydayo",
  },
  {
    id: 2,
    src: "./public/logo1/what-item3.jpeg",
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
  },
  {
    id: 3,
    src: "./public/logo1/what-item3.jpeg",
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
  },
  {
    id: 4,
    src: "./public/logo1/what-item3.jpeg",
    date: "2023.3/20",
    text: [
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
      "こちらの文はデモになります。こちらの文はデモになります。こちらの文はデモになります。",
    ],
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

// const subText = {
//   // 変化する値
//   hidden: { x: 100, opacity: 0 },
//   // 変化後の値
//   visible: {
//     x: 0,
//     opacity: 1,
//   },
// };

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
        <h1 className="text-center mb-7 text-5xl font-bold text-white mx-5">
          Welcome!
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="text-white md:text-[20px] text-[17px] mx-5 text-center mb-7">
          ようこそ Ishikawa Tokyoへ！
          <br />
          本サイトは、駆け出しエンジニアとしてBlogを一から作るという目的のもと
          <br />
          作成しているサイトです。技術的なことはもちろん、Ishikawa
          Tokyo製作者自身の
          <br />
          趣味や気になっている事を掲載できたらなと思っています！
        </p>
      </motion.p>
      <motion.div
        className="max-w-7xl h-auto bg-transparent rounded-xl mx-auto flex flex-wrap gap-7 p-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {HomeSection.map((link) => (
          <motion.div
            key={link.id}
            className="w-[500px] h-[600px] bg-blue m-auto gap-y-5 rounded-md relative"
            variants={item}
          >
            <div className="text-white absolute flex flex-col m-5 items-center">
              <img
                className="rounded-md object-cover h-[300px]"
                src={starbucks}
                alt="drink"
                width={450}
              />
              <p className="my-7">{link.date}</p>
              <p>{link.text}</p>
              <Link
                onClick={() =>
                  window.open("https://github.com/Ydayo", "_blank")
                }
              >
                <img
                  className="cursor-pointer absolute top-3 right-4 rounded-xl bg-slate opacity-80"
                  src={github}
                  alt="github"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
