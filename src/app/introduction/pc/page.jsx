"use client";
import * as nodeDeletion from "../../../data/visualisation/sfsd/nodeDeletion.json";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../../components/ui/accordion";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../components/ui/resizable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { cn } from "../../../utils/cn";
import { Button, buttonVariants } from "../../../components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Joyride, { STATUS } from "react-joyride";
import { VisualisationComponent } from "../../../components/global/Visualisation";
import { Info } from "lucide-react";

const chapters = [
  "General information about files",
  "Media concepts",
  "Index structures",
  "Trees in Secondary Memory: B-Trees",
];

function App() {
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
        locale: { skip: <p className="text-gray-500">Skip</p> },
        placement: "center",
        target: "body",
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
        placement: "bottom",
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
        placement: "bottom",
        target: "#visualization",
        title: "Visualization",
      },
      {
        content: (
          <h2>
            if you didn' understand the visualization you can send us a feedback
            by clicking the button below.
          </h2>
        ),
        placement: "top",
        target: "#hint",
        title: "Feedback",
      },
      {
        content: (
          <h2>
            Great job! You're ready to dive deeper into our courses, click on
            the "Start Learning" button. Happy learning!
          </h2>
        ),
        placement: "right",
        target: "#learn",
        title: "Congrats",
      },
    ],
  });

  return (
    <div
      className="min-h-[90dvh] max-h-[91dvh] bg-muted/90"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: 10,
        color: "white",
      }}
    >
      <Joyride
        continuous
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showProgress
        styles={{
          options: {
            arrowColor: "#e3ffeb",
            backgroundColor: "#151515",
            overlayColor: "rgba(55, 65, 81, 1)",
            primaryColor: "#2563ebe6",
            textColor: "#ffe",
            zIndex: 1000,
          },
        }}
      />
      <div className="min-h-fit !max-h-[90dvh] overflow-hidden -mt-8 sm:mt-0 --font-abz sticky w-full m-0 p-0">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={35} className={"hidden sm:block"}>
            <>
              <Card key={12} className="m-4 min-w-80 hidden sm:block">
                <div id="course-overview" style={{ marginBottom: "20px" }}>
                  <CardHeader>
                    <CardTitle>This is a demo page</CardTitle>
                    <CardDescription>
                      This page is a demo and not an actual course. As a result,
                      some functionalities may not work as expected. Enjoy
                      exploring the features!
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent>
                  <div
                    id="step-1"
                    className={
                      "flex-col justify-center items-center sm:flex mt-5 w-full"
                    }
                  >
                    {chapters.map((chapter, idx) => (
                      <button
                        className={cn(
                          "w-full my-1 text-left",
                          buttonVariants({ variant: "outline" })
                        )}
                        key={idx}
                      >
                        {idx + 1}. {chapter}
                      </button>
                    ))}
                    <div>
                      <div id="step-2">
                        <Button className={cn("my-2")}>Take quiz</Button>
                        <Button className={cn("my-2 ml-3")} variant="secondary">
                          Next course
                        </Button>
                      </div>
                      <div id="learn">
                        <Link
                          href={"/courses"}
                          className={cn(
                            "my-2 !w-full",
                            buttonVariants({ size: "lg" })
                          )}
                        >
                          Start learning
                        </Link>
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
                    <h3 className="font-bold mt-3">{"1) Introduction"}</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Fully balanced search tree files have the following
                      characteristics:
                      <br />- Same block structures and same declarations
                      <br />- Same search mechanisms (for a value and by range
                      of values)
                      <br />
                      These trees are designed to optimize data retrieval and
                      insertion operations.
                    </p>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value={114}>
                <AccordionTrigger>
                  <h3 className="font-bold mt-3">{"2) Insertion Mechanism"}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <ol type="I">
                    <li>
                      I. Search for x. If x already exists, go to IV (End).
                      Otherwise, let P be the last node visited (it's a leaf)
                      and go to II.
                    </li>
                    <li>
                      II. If P is not full, insert x into P (by internal shifts)
                      and go to IV (End).
                    </li>
                    <li>
                      III. If P is full, split P into two nodes:
                      <br />- Allocate a new node, Q.
                      <br />- P will contain the first half, Q will contain the
                      last half.
                      <br />- Let m be the value of the middle separating the
                      two halves.
                      <br />
                      <strong>Insert m into the parent of P...</strong>
                      <br />- x ← m; P ← parent(P); If P == nil, allocate a new
                      root and go to II.
                    </li>
                    <li>IV. End.</li>
                  </ol>
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
            <div id="visualization">
              <VisualisationComponent
                animationData={nodeDeletion}
                height={500}
                width={600}
                title={"Deletion Mechanism in B-Trees"}
                description={
                  "This animation covers the deletion process in B-Trees, demonstrating the steps involved in removing nodes and maintaining the tree structure."
                }
                intro={true}
              />
              <div id="hint" className="right-2 bottom-2 float-right">
                <Info color="#ffbd03" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
