import { useState } from "react";
//import { toast } from "react-toastify";
import { SiNike } from "react-icons/si";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for general errors
  const [emailError, setEmailError] = useState(null); // State for email-specific errors
  const [passwordError, setPasswordError] = useState(null); // State for password-specific errors

  return (
    <>
      <div className="mt-4">
        <div className="flex justify-center gap-4 text-xl">
          <h2 className="text-xl font-semibold">Login to Xike</h2>
          <SiNike size={24} />
        </div>

        <div className="mt-8 mx-auto max-w-sm">
          <form className="space-y-4 m-4" action="#" method="POST">
            <div>
              <label htmlFor="email" className="text-sm font-medium ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="w-full rounded-md p-1.5 ring-1 ring-gray-300  placeholder:text-gray-400"
                />
              </div>
            </div>

            {emailError && (
              <div className="text-red-500 text-sm mt-2">{emailError}</div>
            )}

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium "
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full rounded-md p-1.5 ring-1 ring-gray-300  placeholder:text-gray-400"
                />
              </div>

              {passwordError && (
                <div className="text-red-500 text-sm mt-2">{passwordError}</div>
              )}

              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}

              <div className="text-sm flex flex-row-reverse p-1">
                <a href="#" className="font-semibold  hover:text-slate-600">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                //onClick={handleLoginIn}
                type="submit"
                className="flex w-full justify-center rounded-md  px-3 py-1.5 font-semibold bg-black text-white"
              >
                Login
              </button>
            </div>

            <p className="text-sm">
              Dont have an account yet?{" "}
              <a
                href="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold">OR</p>
          </div>

          <button
            //onClick={handleGoogleLogin}
            className="w-full text-center py-3 mb-20 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />
            <span className="font-semibold">Login with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
