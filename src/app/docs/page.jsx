"use client";
import React, { useState } from "react";

import { Card } from "../../components/ui/card";
import { cn } from "../../utils/cn";
const page = () => {
  const [iframe, setIframe] = useState(0);
  const iframes = [
    {
      title: "Create Account and enroll our courses",
      link: (
        <iframe
          src="https://scribehow.com/embed/Create_Account_and_enroll_our_courses__6I1EPc0gSDG81Gaydxte1Q?as=scrollable&skipIntro=true"
          width="100%"
          height="640"
          frameborder="0"
          className="dark:bg-background rounded-lg"
        >
          Loading...
        </iframe>
      ),
    },
    {
      title: "How to visualise our courses",
      link: (
        <>
          {" "}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingTop: "56.25%",
              paddingBottom: "0",
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
                padding: "0",
                margin: "0",
              }}
              src="https://www.canva.com/design/DAGFlpR8E40/vmlly7FcT6Jxy08HTcEsNA/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <a
            href="https://www.canva.com/design/DAGFlpR8E40/vmlly7FcT6Jxy08HTcEsNA/view?utm_content=DAGFlpR8E40&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            [Original size] Zidni Presentation
          </a>
        </>
      ),
    },
    {
      title: "Create Account and enroll 2",
      link: (
        <iframe
          src="https://scribehow.com/embed/Create_Account_and_enroll_our_courses__6I1EPc0gSDG81Gaydxte1Q?as=scrollable&skipIntro=true"
          width="100%"
          height="640"
          frameborder="0"
        ></iframe>
      ),
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
            {iframes.map((frame, index) => {
              return (
                <p
                  onClick={() => setIframe(index)}
                  className={cn(
                    "cursor-pointer font-semibold",
                    iframe === index ? "text-blue-600" : ""
                  )}
                >
                  {frame.title}
                </p>
              );
            })}
            {/*
            #TODO: make an array of iframes with titles and links, map over them and show one at a time
            <Link href="#">Apparence</Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link> */}
          </nav>
          <div className="grid gap-6">
            {<Card>{iframes[iframe].link}</Card> ?? (
              <Card>
                Welcome to the Documentation page, select a topic to view it's
                guide
              </Card>
            )}
            {/* <Card>
              {iframes.map((iframe, index) => {
                return index === iframe && <Card>{iframe.link}</Card>;
              })}
            </Card> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
