"use client";
import * as React from "react";

import { buttonVariants } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { courses } from "../../../data/courses";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../utils/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const Courses = () => {
  // const [user] = useAuthState(auth);
  const user = true;
  React.useEffect(() => {
    const getUsers = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      console.log("Profile updated", docSnap.data());
      if (!auth.currentUser.displayName && docSnap.exists()) {
        const res = await updateProfile(auth.currentUser, {
          displayName: docSnap.data().userName,
        });
      }
    };
    if (!user) {
      return;
    }
    getUsers();
  }, [user]);
  return (
    <>
      <div className="bg-muted/40 py-1 rounded-lg mt-1">
        {user && (
          <div className="text-center ml-4">
            <h1 className="text-xl sm:text-3xl mt-28">
              Hi there {user?.displayName}👋,
            </h1>
            <p className="lg:text-lg text-base ml-2 ">
              Glad to see you , excited to explore our new way of learning
              together. Let's dive in!
            </p>
          </div>
        )}
        {user ? (
          courses.map((course) => {
            return (
              <Card key={course.id} className="m-4 min-w-80">
                <CardHeader>
                  <CardTitle>{course.title} </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>{course.content} </CardContent>
                <CardFooter className="flex justify-between">
                  <Link className={buttonVariants()} href={course.path}>
                    Enroll
                  </Link>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <div className="py-20 mx-2 md:mx-[35dvw] text-center ">
            <Card className="py-3">
              <CardHeader>
                <CardTitle>Sign in to access courses</CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center items-center">
                <Link className={buttonVariants()} href="/signin">
                  Sign In
                </Link>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};
export default Courses;
