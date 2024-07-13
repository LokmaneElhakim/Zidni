"use client";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import { cn } from "../../utils/cn";
import Link from "next/link";
const page = () => {
  const [iframe, setIframe] = useState(100); //default
  const iframes = [
    {
      title: "Create Account and enroll our courses",
      link: <ContributeInstructions />,
    },
    {
      title: "How to visualise our courses",
      link: <VisualizationInstructions />,
    },
    {
      title: "How to use our Chatbot",
      link: <ChatbotInstructions />,
    },
    {
      title: "How to contribute to our project",
      link: <ContributeInstructions />,
    },
    {
      title: "How to add resources",
      link: <AddResourcesInstructions />,
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Documentation</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {docsData.map((frame, index) => {
              return (
                <p
                  key={frame.id}
                  onClick={() => setIframe(index)}
                  className={cn(
                    "cursor-pointer font-semibold",
                    iframe === index ? "text-blue-500" : ""
                  )}
                >
                  {frame.title}
                </p>
              );
            })}
            <Link
              className="cursor-pointer font-semibold underline text-blue-600"
              href={
                "https://lokmanes-organization.gitbook.io/untitled/overview/what-we-do"
              }
            >
              Detailed documentation
            </Link>
          </nav>
          <div className="grid gap-6 !text-black dark:text-white">
            {iframe === 100 ? (
              <Card>
                <CardHeader>
                  <CardTitle className={"!text-black dark:!text-white"}>
                    Welcome to the Documentation page
                  </CardTitle>
                </CardHeader>
                <CardContent>Select a topic to view its guide.</CardContent>
              </Card>
            ) : iframes[iframe]?.
              iframes[iframe]?.link
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className={"!text-black dark:!text-white"}>
                    Documentation Coming Soon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  The documentation for this topic is not yet available, but it
                  will be provided soon. If you don't find what you're looking
                  for, please contact us at :
                  <Link
                    className="cursor-pointer font-semibold underline text-blue-500 ml-1"
                    href={"mailto:contact.zidni@gmail.com"}
                  >
                    contact.zidni@gmail.com
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;

const VisualizationInstructions = () => (
  <Card className="instruction-card">
    <CardHeader>
      <CardTitle>How to Visualize Our Courses in Zidni Platform</CardTitle>
    </CardHeader>
    <CardDescription>
      <ol>
        <li>
          <strong>Start the Visualization:</strong>
          <p>
            Click on the card that holds "Visualisation : + title" to view the
            visualization of that title.
          </p>
        </li>
        <li>
          <strong>Stop the Visualization:</strong>
          <p>Click on the card again to stop the visualization.</p>
        </li>
        <li>
          <strong>Feedback:</strong>
          <p>
            If you have any feedback or suggestions, please click on the
            "Feedback" button at the bottom of the card.
          </p>
        </li>
      </ol>
      <p className="note">
        Note: The animation will loop continuously until you stop it or quit the
        chapter.
      </p>
    </CardDescription>
  </Card>
);

const ContributeInstructions = () => (
  <Card className="instruction-card">
    <CardHeader>
      <CardTitle>How to Contribute to Our Project</CardTitle>
    </CardHeader>
    <CardDescription>
      <ol>
        <li>
          <strong>Contact Us:</strong>
          <p>
            Send an email to our team at{" "}
            <a href="https://zidni-virid.vercel.app/contact">contact</a> to
            express your interest in contributing to our project.
          </p>
        </li>
        <li>
          <strong>Fork the Repository:</strong>
          <p>
            Fork the repository from the{" "}
            <a href="https://github.com/Lokmane04/Zidni">Zidni GitHub page</a>{" "}
            after we have approved your request.
          </p>
        </li>
        <li>
          <strong>Make Changes:</strong>
          <p>
            Make the necessary changes to the project and submit a pull request.
          </p>
        </li>
      </ol>
    </CardDescription>
  </Card>
);

const AddResourcesInstructions = () => (
  <Card className="instruction-card">
    <CardHeader>
      <CardTitle>How to Add Resources</CardTitle>
    </CardHeader>
    <CardDescription>
      <ol>
        <li>
          <strong>Contact Us:</strong>
          <p>
            Send an email to our team at{" "}
            <a href="https://zidni-virid.vercel.app/contact">contact</a> to
            express your interest in adding resources.
          </p>
        </li>
        <li>
          <strong>Submit Resources:</strong>
          <p>
            Submit the resources you want to add to the course by sending them
            to our team at{" "}
            <a href="mailto:contact.zidni@gmail.com">contact.zidni@gmail.com</a>
            .
          </p>
        </li>
        <li>
          <strong>Approval:</strong>
          <p>
            Our team will review the resources and approve them if they meet our
            standards. If they do, we will add them to the courses after study.
          </p>
        </li>
      </ol>
    </CardDescription>
  </Card>
);

const ChatbotInstructions = () => (
  <Card className="instruction-card">
    <CardHeader>
      <CardTitle>How to Use Our Chatbot</CardTitle>
    </CardHeader>
    <CardDescription>
      <ol>
        <li>
          <strong>Start the Chatbot:</strong>
          <p>
            Click on the chatbot icon at the bottom right of the screen to start
            the chatbot.
          </p>
        </li>
        <li>
          <strong>Select a Question:</strong>
          <p>
            Choose a question from the list of options provided by the chatbot.
            Our chatbot is designed to answer frequently asked questions.
          </p>
        </li>
      </ol>
    </CardDescription>
  </Card>
);
