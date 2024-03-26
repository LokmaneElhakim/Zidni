"use client";
import * as React from "react";

import { Button, buttonVariants } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { courses } from "../../../data/courses";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../components/ui/resizable";
import Link from "next/link";

const CardWithForm = () => {
  return (
    <div className="container mt-20">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={5}>Two</ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel className="grid grid-cols-1 w-full ">
          {courses.map((course) => {
            return (
              <Card className="m-4 min-w-80">
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
          })}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
export default CardWithForm;
