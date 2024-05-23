"use client";
import * as React from "react";
import { courses } from "../../../../../data/courses";
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
  const selectedCourse = courses.filter(
    (course) => course.path === pathname
  )[0];
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
              <Card key={selectedCourse.id} className="m-4 min-w-80">
                <CardHeader>
                  <CardTitle>{selectedCourse.title}</CardTitle>
                  <CardDescription>
                    {selectedCourse.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={
                      "flex-col justify-center items-center sm:flex mt-5 w-full"
                    }
                  >
                    {selectedCourse.chapters.map((chapter, idx) => (
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
                      href={selectedCourse.quiz}
                      className={cn("my-2", buttonVariants())}
                    >
                      Take quiz
                    </Link>
                    <Link
                      href={selectedCourse.next}
                      className={cn("my-2", buttonVariants())}
                    >
                      Next course
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </>
          </ResizablePanel>
          <ResizableHandle withHandle className={"min-h-[91dvh]"} />
          <ResizablePanel defaultSize={65} className="z-[40] w-full">
            <Visualisation index={index} courseSelected={selectedCourse} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};
export default page;
const Visualisation = ({ courseSelected, index }) => {
  let idx;
  idx = index;
  const filterChapter = (i) => {
    return courseSelected?.chapters.filter((chapter) => chapter.chapterId == i);
  };
  let filteredChapter;

  filteredChapter = filterChapter(idx);
  return (
    <div className="min-h-[85dvh] max-h-[83dvh] border-2 rounded-sm m-0 p-0 dark:bg-background overflow-y-scroll">
      <div className={"flex-col justify-center items-center sm:flex"}>
        <Card className="m-4">
          <CardHeader>
            <CardTitle>
              {filteredChapter[0]?.chapterId}. {filteredChapter[0]?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div key={filteredChapter[0]?.chapterId}>
              {filteredChapter[0]?.subChapter?.map((subChapter) => {
                return (
                  <div key={subChapter?.id}>
                    <br />
                    <h3 className="font-bold">{subChapter?.title}</h3>
                    <div>{subChapter?.subChapterContent}</div>
                    {subChapter?.subChapterVisualisation}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
