import { Component, createSignal } from "solid-js";
import logo from "../logo.svg";
import { useNavigate } from "@solidjs/router";
const Login: Component = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [verificationCode, setVerificationCode] = createSignal("");
  const [showVerificationCard, setVerificationCard] = createSignal(false);

  const getVerificationCode = () => {
    if (email() !== "") {
      setVerificationCard(true);
    }
  };
  const verify = () => {
    if (verificationCode() !== "") {
      sessionStorage.setItem("token", "aagvasgvdgbsubavgd gdiadv");
      navigate("/");
    }
  };
  return (
    <div class="h-full w-full max-w-xs mx-auto ">
      <div class="flex flex-col items-center gap-y-4">
        <img class="w-24 md:w-32" src={logo} alt="Skynet" />
        {!showVerificationCard() ? (
          <>
            <input
              onInput={(e) => {
                setEmail(e.currentTarget.value);
              }}
              type="email"
              placeholder="Enter Email"
              class="w-full p-2 outline outline-1 outline-gray-400 focus:outline-primary"
            />

            <button
              onClick={getVerificationCode}
              class="w-full py-4 px-6 bg-primary"
            >
              <span class="text-white">Get Verification Code</span>
            </button>
          </>
        ) : (
          <>
            <div class="space-y-2">
              <div class="text-xl font-semibold text-primary text-center">
                Please check your email
              </div>
              <div class="text-gray-600 text-center">
                We've sent code to {email()}{" "}
              </div>
            </div>

            <input
              type="text"
              onInput={(e) => {
                setVerificationCode(e.currentTarget.value);
              }}
              minLength={6}
              maxLength={6}
              placeholder="Enter Verification code"
              class="w-full p-2 outline outline-1 outline-gray-400 focus:outline-primary"
            />
            <button onClick={verify} class="w-full py-4 px-6 bg-primary">
              <span class="text-white">Verify</span>
            </button>
            <div class="text-gray-600 ">
              Didn't get a code?{" "}
              <button class="underline hover:text-primary">
                Click to resend.
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
