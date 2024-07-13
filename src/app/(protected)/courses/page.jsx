"use client";

import { buttonVariants } from "../../../components/ui/button";
import {
  Card,
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
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import { cn } from "../../../utils/cn";
const Courses = () => {
  const [user] = useAuthState(auth);
  // const user = true;
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
        {
          <>
            <div className="text-center ml-4">
              <h1 className="text-2xl sm:text-5xl mt-28">
                Hi there {user?.displayName ?? ""}👋,
              </h1>
              <p className="lg:text-lg text-base ml-2 mt-2 mb-5">
                Glad to see you, excited to explore our new way of learning
                together. Let's dive in!
              </p>
              <p className="lg:text-lg text-base ml-2 mt-2 mb-5">
                New here?
                <Link
                  href={"/introduction"}
                  className={cn(
                    buttonVariants({ variant: "link" }, "!text-blue-500")
                  )}
                >
                  Take a tour
                </Link>
              </p>
            </div>

            <BentoGrid className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto !h-fit">
              {courses.map((course, i) => (
                <BentoGridItem
                  path={course.path}
                  key={i}
                  title={course.title}
                  description={course.description}
                  className={
                    i === 3
                      ? "lg:col-span-2 col-span-1"
                      : "row-span-1 lg:row-span-3"
                  }
                  label={
                    (course.comingSoon && "Coming Soon") ||
                    (course.isNew && "New")
                  }
                  comingSoon={course.comingSoon}
                  chapters={course.chaptersTitles}
                />
              ))}
            </BentoGrid>
          </>
        }
        {/* {user ? (
          <BentoGrid className="mt-7 mx-auto">
          {courses.map((course, i) => (
            <BentoGridItem
              path={course.path}
              key={i}
              title={course.title}
              description={course.description}
              icon={
                course.icon ?? (
                  <AlignVerticalSpaceAround className="h-4 w-4 text-neutral-500" />
                )
              }
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              label={
                (course.comingSoon && "Coming Soon") ||
                (course.isNew && "New")
              }
            />
          ))}
        </BentoGrid>
        ) : (
          <div className="py-20 mx-2 md:mx-[35dvw] text-center">
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
        )} */}
      </div>
    </>
  );
};
export default Courses;
