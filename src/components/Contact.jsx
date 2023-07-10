import React from "react";

const inputTitle = "Demo Contact";

const submitTitle = "Sending";

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center px-3">
        <div className="bg-white p-7 rounded-md max-w-md w-full">
          <h1 className="text-center text-rose-500 font-bold">{inputTitle}</h1>
          <form>
            <label htmlFor="name" className="block text-[14px] mb-1">
              Name
            </label>
            <input
              id="name"
              type="name"
              className="w-full p-2 text-[14px] border-solid border-sky-700 border-2 mb-4 outline-none"
            />
            <label htmlFor="email" className="block text-[14px] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 text-[14px] border-solid border-sky-700 border-2 mb-4 outline-none"
            />
            <label htmlFor="textarea" className="block text-[14px] mb-1">
              Message
            </label>
            <textarea
              id="text"
              type="text"
              className="w-full p-2 text-[14px] border-solid border-sky-700 border-2 mb-4 outline-none h-[200px]"
            />
            <button
              type="submit"
              className="w-full p-2 text-[15px] font-bold bg-orange hover:bg-darkOrange duration-300 text-white"
            >
              {submitTitle}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
