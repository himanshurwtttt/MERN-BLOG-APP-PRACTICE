import React from "react";
import { Button, Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { TextInput } from "flowbite-react";
const SignUp = () => {
  return (
    <div className=" min-h-screen mt-20">
      <div className="flex flex-col gap-5 md:flex-row md:items-center p-3 mx-auto max-w-3xl">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Sahand's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your UserName" />
              <TextInput type="text" placeholder="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput placeholder="name@company.com" type="text" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign In
            </Button>
          </form>
          <div className="flex gap-4 text-sm mt-5">
            <span>already have an account ?</span>
            <Link to={"/sign-in"} className="text-blue-600 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
