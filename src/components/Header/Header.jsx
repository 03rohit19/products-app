import { useState } from "react";

const Header = () => {
  const [signIn, setSignIn] = useState(true);
  const handleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <>
      <form className="absolute mt-36 z-10 w-3/12 mx-auto right-0 left-0 bg-black p-12 text-white rounded-lg bg-opacity-60">
        <h1 className="font-bold text-2xl py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-2 my-2 w-full"
          />
        )}
        <input
          type="text"
          placeholder="email address"
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full"
        />
        <button className="p-2 my-4 w-full bg-red-600 rounded-lg">
          {signIn ? "Sign in" : "Sign up"}
        </button>
        <p onClick={handleSignIn} className="cursor-pointer">
          {signIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered ? Sign In now"}
        </p>
      </form>
    </>
  );
};

export default Header;
