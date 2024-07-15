"use client";

import { buttonVariants } from "../../../components/ui/button";
import { courses } from "../../../data/courses";
import Link from "next/link";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import { cn } from "../../../utils/cn";
const Courses = () => {
  return (
    <>
      <div className="bg-muted/40 py-1 rounded-lg mt-1">
        {
          <>
            <div className="text-center ml-4">
              <h1 className="text-2xl sm:text-5xl mt-28">Hi there 👋</h1>
              <p className="lg:text-lg text-base ml-2 mt-2 mb-5">
                Glad to see you, excited to explore our new way of learning
                together. Let's dive in!
              </p>
              <p className="lg:text-lg text-base mt-2 mb-5">
                New here?
                <Link
                  href={"/introduction"}
                  className={cn(
                    buttonVariants(
                      { variant: "link", size: "lg" },
                      "!text-blue-500"
                    )
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
      </div>
    </>
  );
};
export default Courses;
