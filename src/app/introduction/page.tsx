"use client";
import * as nodeDeletion from "../../data/visualisation/sfsd/nodeDeletion.json";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  S,
} from "../../components/ui/sheet";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { cn } from "../../utils/cn";
import { Button, buttonVariants } from "../../components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import Joyride from "react-joyride";
import { VisualisationComponent } from "../../components/global/Visualisation";
import { ChevronRight, Info } from "lucide-react";
import { useRouter } from "next/navigation";

const chapters = [
  "General information about files",
  "Media concepts",
  "Index structures",
  "Trees in Secondary Memory: B-Trees",
];

function App() {
  const router = useRouter();
  const [{ run, steps }] = useState({
    run: true,
    steps: [
      {
        content: (
          <span>
            <h1 className="!text-gray-300 !text-lg">Welcome Abroad!</h1>
            <br />
            Explore dynamic e-learning with Zidni. Engage with interactive
            content and quizzes. Join us to revolutionize education together!
          </span>
        ),
        locale: {
          skip: <p className="text-gray-500">Skip</p>,
        },
        placement: "center",
        target: "body",
      },

      {
        content: (
          <h2>
            You can see the course overview , description and chapters by
            clicking on this button.
          </h2>
        ),
        placement: "bottom",
        target: "#sheet-trigger",
        title: "Course content",
      },

      {
        content: (
          <h2>
            This is the course overview, here you'll find the course title along
            with the description.
          </h2>
        ),
        placement: "bottom",
        target: "#course-overview",
        title: "Course Overview",
      },
      {
        content: (
          <h2>
            These are the course chapters, you can navigate between the chapters
            by simply clicking on them.
          </h2>
        ),
        placement: "bottom",
        target: "#step-1",
        title: "Course Chapters",
      },
      {
        content: (
          <h2>
            you can practice your knowledge by taking quizzes or navigate to the
            next course.
          </h2>
        ),
        placement: "bottom",
        target: "#step-2",
        title: "Next course or Take quiz",
      },
      {
        content: (
          <h2>you can expand this by clicking to learn about the chapter.</h2>
        ),
        placement: "left",
        target: "#step-4",
        title: "Chapter Content",
      },

      {
        content: (
          <h2>
            you can interact with the visualization by simply clicking on it
            (the click toggles the visualization).
          </h2>
        ),
        placement: "left",
        target: "#visualization",
        title: "Visualization",
      },
      {
        content: (
          <h2>
            if you didn't understand the visualization you can send us a
            feedback by clicking the button below.
          </h2>
        ),
        placement: "top",
        target: "#hint",
        title: "Feedback",
      },
      {
        content: (
          <div>
            <h2>
              Great job! You're ready to dive deeper into our courses,you'll be
              redirected to the courses page. Happy learning!
            </h2>
            <Link
              href={"/courses"}
              className={cn(
                "mt-6 mb-2 !w-full !opacity-95",
                buttonVariants({
                  size: "lg",
                  variant: "ghost",
                })
              )}
            >
              Start learning
            </Link>
          </div>
        ),
        placement: "center",
        target: "body",
        title: "Congrats",
      },
    ],
  });

  return (
    <div className="min-h-[90dvh] max-h-[91dvh] bg-muted/90 rounded-lg opacity-70">
      <Joyride
        continuous
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        disableCloseOnEsc
        disableOverlayClose
        styles={{
          options: {
            arrowColor: "white",
            backgroundColor: "#1188FF",
            overlayColor: "#121212",
            spotlightShadow: "#fff",
            primaryColor: "#252525",
            textColor: "white",
            zIndex: 1000,
            border: 2,
            borderRadius: 50,
          },
        }}
      />
      <div
        className="min-h-fit !max-h-[90dvh] overflow-hidden -mt-9 sm:mt-0 --font-abz sticky w-full m-0 p-0"
        onClick={() => {
          router.push("/courses");
        }}
      >
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={35} className={"hidden sm:block"}>
            <>
              <Card key={12} className="m-4 min-w-80 hidden sm:block ">
                <div id="course-overview" style={{ marginBottom: "20px" }}>
                  <CardHeader>
                    <CardTitle>File and data structure</CardTitle>
                    <CardDescription>
                      This page is a demo and not an actual course. As a result,
                      some functionalities may not work as expected. Enjoy
                      exploring the features!
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent>
                  <div
                    className={
                      "flex-col justify-center items-center sm:flex mt-5 w-full"
                    }
                  >
                    <div id="step-1">
                      {chapters.map((chapter, idx) => (
                        <button
                          className={cn(
                            "w-full my-1 text-left ",
                            buttonVariants({ variant: "outline" })
                          )}
                          key={idx}
                        >
                          {idx + 1}. {chapter}
                        </button>
                      ))}
                    </div>
                    <div>
                      <div id="step-2">
                        <Button className={cn("my-2 ")}>Take quiz</Button>
                        <Button
                          className={cn("my-2 ml-3 ")}
                          variant="secondary"
                        >
                          Next course
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          </ResizablePanel>
          <ResizableHandle
            withHandle
            className={"min-h-[85dvh] max-h-[92dvh] "}
          />
          <ResizablePanel
            defaultSize={65}
            minSize={55}
            className="z-[40] !w-full !p-0 !m-0"
          >
            <Sheet>
              <SheetTrigger>
                <button
                  id="sheet-trigger"
                  className={cn(
                    "relative -left-3 top-8 bg-muted/100 p-2 !rounded-full block sm:hidden",
                    buttonVariants()
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
                  <SheetTitle>
                    <span id="course-overview">File and Data structure</span>
                  </SheetTitle>
                  <SheetClose>
                    <div id="step-1">
                      {chapters.map((chapter, idx) => (
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
                    </div>
                    <div id="step-2">
                      <button className={cn("my-2", buttonVariants())}>
                        Take quiz
                      </button>
                      <button
                        className={cn(
                          "my-2 ml-3",
                          buttonVariants({ variant: "secondary" })
                        )}
                      >
                        Next course
                      </button>
                    </div>
                  </SheetClose>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <Visualisation />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default App;

const Visualisation = ({}) => {
  return (
    <div className="overflow-x-hidden min-h-[90dvh] max-h-[91dvh] border-2 rounded-sm m-0 p-0 dark:bg-background overflow-y-scroll w-full">
      <div
        className={
          "flex-col justify-center items-center sm:flex m-0 p-0 w-full"
        }
      >
        <Card className="m-4 !min-w-[96%]">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Trees in Secondary Memory: B-Trees
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <Accordion key={14} className="w-full" collapsible>
              <AccordionItem value={39}>
                <div id="step-4">
                  <AccordionTrigger>
                    <h3 className="font-bold">{"1) Introduction"}</h3>
                  </AccordionTrigger>
                </div>
                <AccordionContent>
                  <p>
                    Fully balanced search tree files have the following
                    characteristics:
                    <br />- Same block structures and same declarations
                    <br />- Same search mechanisms (for a value and by range of
                    values)
                    <br />
                    These trees are designed to optimize data retrieval and
                    insertion operations.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={356}>
                <AccordionTrigger>
                  <h3 className="font-bold mt-3">{"3) Deletion Mechanism"}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <ol type="I">
                    <li>
                      I. Search for x. If x does not exist, go to IV (End).
                      Otherwise, let P be the node containing x and go to II.
                    </li>
                    <li>
                      II. If P is not a leaf, find the largest value in the left
                      subtree of P (or the smallest value in the right subtree),
                      replace x with this value, and delete the original node.
                      Go to IV (End).
                    </li>
                    <li>
                      III. If P is a leaf:
                      <br />- Remove x from P.
                      <br />- If P has fewer than the minimum number of keys,
                      rebalance the tree:
                      <br />- Borrow a key from a sibling if possible.
                      <br />- Otherwise, merge P with a sibling and adjust the
                      parent node.
                    </li>
                    <li>IV. End.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div id="visualization" className="mt-3">
              <VisualisationComponent
                animationData={nodeDeletion}
                title={"Deletion Mechanism in B-Trees"}
                description={
                  "This animation covers the deletion process in B-Trees, demonstrating the steps involved in removing nodes and maintaining the tree structure."
                }
                intro={true}
              />
              <div id="hint" className="sm:right-2 sm:bottom-2 float-right">
                <Info color="#ffbd03" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
