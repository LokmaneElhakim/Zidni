"use client";
import React from "react";
import Link from "next/link";

import { buttonVariants } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { auth, db } from "../../../utils/firebase/config";
import { useRouter } from "next/navigation";
import { doc, setDoc, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { cn } from "../../../utils/cn";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { handleGoogleSignUp } from "../../../utils/firebase/firebase";
import { Toaster, toast } from "sonner";

const initialState = {
  email: "",
  password: "",
  userName: "",
};

export default function SignUp() {
  let uid;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialState });
  const onSubmitHandler = async (data) => {
    try {
      await handleSignUp(data);
      reset({ email: "", password: "", userName: "" });
      toast.success(`Hi there ${data.userName}`, {
        description: "You'll be redirected to the courses page.",
        position: "top-right",
        duration: 3000,
      });
      router.push("/signin");
    } catch (error) {
      toast.error("Something went wrong", {
        description: "We couldn't sign you up, please try again later.",
        position: "top-right",
        duration: 3000,
      });
    }
  };
  const handleSignUp = async ({ userName, email, password }) => {
    const userData = {
      userName,
      quizzesTaken: [
        { quiz: "sfsd", finished: false },
        { quiz: "algebra", finished: false },
        { quiz: "probability", finished: false },
      ],
      coursesFinished: [
        { course: "sfsd", enrolled: false },
        { course: "algebra", enrolled: false },
        { course: "probability", enrolled: false },
      ],
    };
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      uid = res.user.auth.lastNotifiedUid;
      const ref = doc(db, "users", uid);
      await setDoc(ref, userData);
      await addDoc(ref, userData);
      toast.success(`Hi there ${data.userName}`, {
        description: "You'll be redirected to the courses page.",
        position: "top-right",
        duration: 3000,
      });
      router.push("/courses");
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        toast.error("Email already in use", {
          description:
            "Please try again with a different email or try signing in if you already have an account.",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await handleGoogleSignUp();
      router.push("/courses");
    } catch (error) {
      toast.error("We couldn't sign you in.", {
        description: `${error.message}`,
        position: "top-right",
        duration: 3000,
      });
    }
  };
  return (
    <>
      <div className="w-full h-full mt-24">
        <Card className="mx-auto max-w-sm text-center">
          <Toaster richColors />
          <CardHeader>
            <CardTitle className="text-xl">Create an account</CardTitle>
            <CardDescription>
              Enter your information to create an account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="mt-20 mx-2 sm:mt-2"
            >
              <div className="grid gap-4 text-left">
                <div className="grid gap-2">
                  <Label htmlFor="userName">Name</Label>
                  <input
                    className={
                      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                    }
                    id="userName"
                    type="userName"
                    placeholder="User Name"
                    {...register("userName", {
                      required: true,
                      maxLength: 40,
                      minLength: 6,
                    })}
                  />
                  {errors.userName && errors.userName.type === "required" && (
                    <p className="text-red-600 text-sm">
                      Email address is required.
                    </p>
                  )}
                  {errors.userName && errors.userName.type === "minLength" && (
                    <p className="text-red-600 text-sm">
                      Email must be at least 6 characters.
                    </p>
                  )}
                  {errors.userName && errors.userName.type === "maxLength" && (
                    <p className="text-red-600 text-sm">
                      Name must be less than 30 characters.
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <input
                    className={
                      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                    }
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      maxLength: 40,
                      minLength: 6,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="text-red-600 text-sm">
                      Email address is required.
                    </p>
                  )}
                  {errors.email && errors.email.type === "minLength" && (
                    <p className="text-red-600 text-sm">
                      Email must be at least 6 characters.
                    </p>
                  )}
                  {errors.email && errors.email.type === "maxLength" && (
                    <p className="text-red-600 text-sm">
                      Name must be less than 30 characters.
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <input
                    className={
                      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                    }
                    placeholder="********"
                    id="password"
                    type="password"
                    {...register("password", {
                      required: true,
                      maxLength: 30,
                      minLength: 6,
                    })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="text-red-600 text-sm">Password is required</p>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <p className="text-red-600 text-sm">
                      Password must be less than 30 characters.
                    </p>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p className="text-red-600 text-sm">
                      Password must be at least 6 characters.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button type="submit" className={cn("w-full", buttonVariants())}>
              Sign Up
            </button>
            <button
              onClick={handleGoogleSignIn}
              className={cn(
                "w-full mt-2 py-6",
                buttonVariants({ variant: "secondary" })
              )}
            >
              <Image
                alt="Google"
                src={"/logo/google.svg"}
                width={20}
                height={20}
                className="mr-2 dark:text-neutral-50 text-neutral-800"
              />
              <span className="text-neutral-800 dark:text-neutral-400">
                Sign Up with Google
              </span>
            </button>
            <p className="mt-3 text-xs text-center text-gray-700">
              Already have an account?
              <Link
                href="/signin"
                className=" text-blue-600 hover:underline ml-0.5"
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </Card>
        <div className="absolute z-20 mt-auto right-5 my-4 bottom-3">
          <blockquote className="space-y-2 text-white">
            <p className="text-xs sm:text-sm">
              Seeking knowledge is a duty upon every Muslim.
            </p>
            <footer className="text-xs text-right">
              Prophet Muhammad <span className="text-xs ml-2 -mb-0.5">ﷺ</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
}
