"use client";

import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/app/ui/components";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function SignUpForm() {
  //const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className="md:min-w-[450px]">
      <div className="bg-background-100 flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please Signup to continue
        </h1>
        <p>
          you have an account already, {' '} 
          <Link href="/register/login" className="text-blue-500">
            Log in
          </Link>
        </p>
        <LoginField
          label="Username"
          htmlFor="sign-up-username"
          type="text"
          name="username"
          placeholder="Enter your name"
          required={true}
        >
          <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </LoginField>
        <LoginField
          label="Email"
          htmlFor="login-email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          required={true}
        >
          <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </LoginField>
        <LoginField
          label="Password"
          htmlFor="login-password"
          type="password"
          name="password"
          placeholder="Enter password"
          required={true}
        >
          <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </LoginField>
        <LoginField
          label="Convfirm the Password"
          htmlFor="signup-confirm-password"
          type="password"
          name="password"
          placeholder="repate the password you have write above"
          required={true}
        >
          <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </LoginField>
        <LoginButton />
        <div className="my-4 flex items-center justify-between">
          <hr className="w-full" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="w-full" />
        </div>

        <button className="bg-red-600 text-white w-full py-2 rounded mt-4 flex items-center justify-center">
          <FaGoogle className="mr-2" />
          Sign up with Google
        </button>

        <button className="bg-blue-600 text-white w-full py-2 rounded mt-4 flex items-center justify-center">
          <FaFacebookF className="mr-2" />
          Sign up with Facebook
        </button>

        <button className="bg-gray-900 text-white w-full py-2 rounded mt-4 flex items-center justify-center">
          <FaGithub className="mr-2" />
          Sign up with GitHub
        </button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* {state === "CredentialsSignin" && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">Invalid credentials</p>
            </>
          )} */}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full mt-5 flex items-center justify-center py-2"
      aria-disabled={pending}
    >
      Sign up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

function LoginField({
  htmlFor,
  type,
  label,
  name,
  placeholder,
  required,
  children,
}: {
  htmlFor: string;
  type: string;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4">
      <label className="mb-3 mt-5 block text-xs font-medium" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="relative">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id={htmlFor}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
        {children}
      </div>
    </div>
  );
}
