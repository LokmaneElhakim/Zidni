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
import Chatbot from "../../../../../components/global/chatbot/index";
import { buttonVariants } from "../../../../../components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../../../../components/ui/accordion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../../components/ui/sheet";
import { ChevronLeft, ChevronRight } from "lucide-react";
const page = () => {
  const pathname = usePathname();
  const [index, setIndex] = React.useState(1);
  const selectedCourse = courses.filter(
    (course) => course.path === pathname
  )[0];
  return (
    <div className="min-h-fit -mt-8 sm:mt-0 --font-abz sticky w-full m-0 p-0">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={35} className={"hidden sm:block"}>
          <>
            <Card
              key={selectedCourse.id}
              className="m-4 min-w-80 hidden sm:block"
            >
              <CardHeader>
                <CardTitle>{selectedCourse.title}</CardTitle>
                <CardDescription>{selectedCourse.description}</CardDescription>
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
                </div>
              </CardContent>
            </Card>
          </>
        </ResizablePanel>
        <ResizableHandle withHandle className={"min-h-[91dvh]"} />
        <ResizablePanel defaultSize={65} className="z-[40] w-full">
          <div className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger>
                <button
                  className={cn(
                    "relative -left-3 top-8 bg-muted/100 p-2 !rounded-full block sm:hidden",
                    buttonVariants({})
                  )}
                >
                  <ChevronRight />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className={
                  "flex-col justify-center items-center sm:flex mt-5 w-full"
                }
              >
                <SheetHeader>
                  <SheetTitle>{selectedCourse.title} </SheetTitle>
                  <SheetClose>
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
                        type="submit"
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
                      className={cn(
                        "my-2 ml-3",
                        buttonVariants({ variant: "secondary" })
                      )}
                    >
                      Next course
                    </Link>
                  </SheetClose>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <Visualisation index={index} courseSelected={selectedCourse} />
        </ResizablePanel>
      </ResizablePanelGroup>
      <Chatbot />
    </div>
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
    <div className="min-h-[85dvh] max-h-[91dvh] border-2 rounded-sm m-0 p-0 dark:bg-background overflow-y-scroll w-full">
      <div
        className={
          "flex-col justify-center items-center sm:flex m-0 p-0 w-full"
        }
      >
        <Card className="m-4 w-[97%]">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {filteredChapter[0]?.chapterId}. {filteredChapter[0]?.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full ">
            <Accordion
              key={filteredChapter[0]?.chapterId}
              className="w-full"
              collapsible
            >
              {filteredChapter[0]?.subChapter?.map(
                (subChapter, subChapterId) => {
                  return (
                    <AccordionItem value={subChapterId + 1}>
                      <AccordionTrigger>
                        <h3 className="font-bold mt-3">{subChapter?.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        {subChapter.subChapterContent ?? (
                          <p className="text-orange-400">
                            (This chapter has no desciption)
                          </p>
                        )}
                      </AccordionContent>
                      {subChapter?.subChapterVisualisation}
                    </AccordionItem>
                  );
                }
              )}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
