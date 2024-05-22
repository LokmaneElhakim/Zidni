"use client";
import Image from "next/image";
import React, { useState } from "react";
import { auth, provider } from "../../../utils/firebase/config";
import { useRouter } from "next/navigation";

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
import { signInWithEmailAndPassword } from "firebase/auth";
import { cn } from "../../../utils/cn";
import { Toaster, toast } from "sonner";
import { handleGoogleSignUp } from "../../../utils/firebase/firebase";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const router = useRouter();
  if (auth.currentUser) router.push("/courses");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { email: "", password: "" } });
  const onSubmitHandler = (data) => {
    try {
      handleSignIn(data);
      reset({ email: "", password: "" });
    } catch (error) {
      toast.error("We couldn't sign you in.", {
        description: `${error.message}`,
      });
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

  const handleSignIn = async (data) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      res;
    } catch (e) {
      if (e.code === "auth/invalid-email") {
        toast.error("Invalid Email", {
          description:
            "Either the email is invalid or you haven't sign up yet. Please try again.",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
    }
  };

  return (
    <div className="w-full h-full mt-32">
      <Card className="mx-auto max-w-sm text-center">
        <Toaster richColors />
        <CardHeader>
          <CardTitle className="text-xl ">Sign In</CardTitle>
          <CardDescription>
            Enter your email and password to sign in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="mt-20 mx-2 sm:mt-2"
          >
            <div className="grid gap-4 text-left">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <input
                  className={
                    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                  }
                  id="email"
                  type="email"
                  placeholder="lokmanehakim@gmail.com"
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
        <CardFooter className="flex flex-col items-center justify-stretch">
          <button type="submit" className={cn("w-full", buttonVariants())}>
            Sign In
          </button>
          <button
            className={cn(
              "w-full mt-2 py-6",
              buttonVariants({ variant: "secondary" })
            )}
            onClick={handleGoogleSignIn}
          >
            <Image
              src={"/logo/google.svg"}
              width={20}
              height={20}
              alt="Google"
              className="mr-2 dark:text-neutral-50 text-neutral-800"
            />
            <span className="text-neutral-800 dark:text-neutral-400">
              Sign In with Google
            </span>
          </button>
          <p className="mt-3 text-xs text-center text-gray-700">
            Don&apos;t have an account?
            <Link
              href="/signup"
              className="text-blue-600 hover:underline ml-0.5"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
