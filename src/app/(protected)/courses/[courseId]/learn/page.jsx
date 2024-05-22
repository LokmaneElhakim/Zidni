"use client";
import * as React from "react";
import { courses } from "../../../../../data/courses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../components/ui/accordion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../../../components/ui/resizable";
import { usePathname } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { cn } from "../../../../../utils/cn";
import { buttonVariants } from "../../../../../components/ui/button";
import Link from "next/link";
const page = () => {
  const pathname = usePathname();
  const [index, setIndex] = React.useState(1);
  // const selectedCourse = courses.filter(
  //   (course) => course.path === pathname
  // )[0];
  return (
    <>
      <div className="sm:hidden">
        <div className="container">
          <p className="text-lg text-center">
            Please Rotate your device for better user experience!
          </p>
        </div>
      </div>
      <div className="hidden sm:block min-h-fit">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={35}>
            <>
              {courses?.map((course) => (
                <Card key={course.id} className="m-4 min-w-80">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={
                        "flex-col justify-center items-center sm:flex mt-5 w-full"
                      }
                    >
                      {course.chapters.map((chapter, idx) => (
                        <button
                          onClick={() => {
                            setIndex(idx + 1);
                          }}
                          className={cn(
                            "w-full my-1 text-left",
                            buttonVariants({ variant: "outline" })
                          )}
                          key={chapter.chapterId}
                        >
                          {idx + 1}. {chapter.title}
                        </button>
                      ))}
                      <Link
                        href={`/courses/${course.title}/quiz`}
                        className={cn("my-2", buttonVariants())}
                      >
                        Take quiz
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          </ResizablePanel>
          <ResizableHandle withHandle className={"min-h-[90dvh] "} />
          <ResizablePanel defaultSize={65} className="z-[40] w-full">
            <Visualisation index={index} courses={courses} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};
export default page;
const Visualisation = ({ courses, index }) => {
  let idx;
  idx = index;
  const filterChapter = (i) => {
    return courses[0]?.chapters.filter((chapter) => chapter.chapterId == i);
  };
  let filteredChapter;

  filteredChapter = filterChapter(idx);
  return (
    <div className="min-h-[85dvh] max-h-[89dvh] border-2 rounded-sm m-0 p-0 dark:bg-background overflow-y-scroll">
      <div className={"flex-col justify-center items-center sm:flex"}>
        <Card className="m-4">
          <CardHeader className="mb-0">
            <CardTitle>
              {filteredChapter[0]?.chapterId}. {filteredChapter[0]?.title}
            </CardTitle>
            <CardDescription>
              {filteredChapter[0]?.chapterDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              key={filteredChapter[0]?.chapterId}
            >
              {filteredChapter[0]?.subChapter?.map((subChapter) => {
                return (
                  <>
                    <AccordionItem value={subChapter?.id} key={subChapter?.id}>
                      <AccordionTrigger>{subChapter?.title}</AccordionTrigger>
                      <AccordionContent>
                        {subChapter?.subChapterContent}
                        {subChapter?.subChapterVisualisation}
                      </AccordionContent>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
