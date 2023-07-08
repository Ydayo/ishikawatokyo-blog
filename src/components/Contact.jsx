import React from "react";
import { useForm } from "react-hook-form";

const inputLabel = [
  {
    id: "name",
    name: "Name",
    errmes: "Nameは必須です。",
  },
  {
    id: "email",
    name: "Email",
    errmes: "Emailは必須です。",
  },
  {
    id: "password",
    name: "Password",
    errmes: "Passwordは必須です。",
  },
];

const inputTitle = "Log In";

const submitTitle = "Sending";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white p-7 rounded-md max-w-sm w-full">
          <h1 className="text-center text-rose-500 font-bold">{inputTitle}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="block text-[14px] mb-1">
              Name
            </label>
            <input
              id="name"
              type="name"
              className="w-full p-2 text-[14px] border-solid border-sky-700 border-2 mb-4 outline-none"
              {...register("name", {
                required: "namaehahissudesu",
                minLength: {
                  value: 4,
                  message: "4文字以上で入力してください。",
                },
              })}
            />
            <label htmlFor="email" className="block text-[14px] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 text-[14px] border-solid border-sky-700 border-2 mb-4 outline-none"
              {...register("email", { required: "namaehahissudesu" })}
            />
            <label htmlFor="password" className="block text-[14px] mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 text-[14px] border-solid border-sky-700 border-2 mb-4 outline-none"
              {...register("password", { required: "namaehahissudesu" })}
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
