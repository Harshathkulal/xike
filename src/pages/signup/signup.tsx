import { useState } from "react";
import { SiNike } from "react-icons/si";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/userSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      console.log(error);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    
        const user = userCredential.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        toast.success("Login Successful", {
          autoClose: 200,
          closeOnClick: true,
        });

        // Navigate after successful login
        const referrer = document.referrer;
        if (referrer.includes("/cart")) {
          window.location.href = "/checkout";
        } else {
          window.location.href = "/";
        }
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Signup error:", errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <>
      <div className="mt-4">
        <div className="flex justify-center gap-4 text-xl">
          <h2 className="text-xl font-semibold">Sign in to Xike</h2>
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

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium ">
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

              <div className="flex items-center justify-between mt-4">
                <label htmlFor="password" className="text-sm font-medium ">
                  Confirm Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="current-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full rounded-md p-1.5 ring-1 ring-gray-300  placeholder:text-gray-400"
                />
              </div>
              <div className="text-red-500 text-sm mt-2">{error}</div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="accent-black"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-black">
                  I accept the{" "}
                  <a className="font-medium  hover:underline" href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div>
              <button
                onClick={handleSignUp}
                type="submit"
                className="flex w-full justify-center rounded-md  px-3 py-1.5 font-semibold bg-black text-white"
              >
                Create an account
              </button>
            </div>

            <p className="text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login Here
              </a>
            </p>
          </form>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold">***</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
