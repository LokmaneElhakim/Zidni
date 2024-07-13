"use client";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "../../ui/popover";
import { cn } from "../../../utils/cn";
import { BadgeInfo, Info } from "lucide-react";
import { buttonVariants } from "../../ui/button";
export const VisualisationComponent = ({
  intro,
  animationData,
  title,
  description,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="my-2 !w-full">
      <Card className="!w-full">
        <CardHeader>
          <CardTitle>Visualisation: {title}</CardTitle>
        </CardHeader>
        <CardDescription>
          {description && (
            <>
              {description}
              <br />
              <br />
            </>
          )}
          <span className="dark:text-[#f3f7a1] text-[#6e7228] text-sm">
            Click on the animation to toggle it.
          </span>
        </CardDescription>
        <div
          className={cn(
            "overflow-hidden",
            "w-full",
            "h-full",
            "flex",
            "items-center",
            "justify-center",
            "cursor-pointer"
          )}
        >
          <Lottie options={defaultOptions} />
        </div>
        <Popover className="relative z-1000 ">
          <PopoverTrigger
            className={"relative !ml-auto !mr-4 !-mt-7 float-right"}
            onClick={() => setShowCard((prev) => !prev)}
          >
            {!intro && <Info color="#ffbd03" />}
          </PopoverTrigger>
          {showCard && !intro && (
            <PopoverContent
              className={`transition-opacity duration-500 rounded-lg pt-5 pb-3 pl-5 bg-muted/100 ${
                showCard ? "opacity-100" : "opacity-0"
              }`}
            >
              <b>Need Help ?</b>
              <br />
              <p className="text-sm ml-2 mt-2">
                If you didn't understand this visualization, you can send us
                feedback using the link below.
              </p>
              <div className=" ml-2 left-4 bottom-1 mt-3">
                <a
                  className={buttonVariants()}
                  href="https://forms.gle/12zvmvNxJWk3XXNA6"
                >
                  Send Feedback
                </a>
              </div>
            </PopoverContent>
          )}
        </Popover>
      </Card>
    </div>
  );
};

// For extra information in a course
export const InfoCard = ({ title, children }) => {
  return (
    <div className="flex flex-row gap-1 justify-start flex-wrap rounded-md text-sm disabled:pointer-events-none border border-primary bg-[#BADDFA] dark:bg-muted/40 p-4 ">
      <span className="font-bold text-primary">{title}: </span>
      {children}
    </div>
  );
};
