"use client";
import React from "react";
import Lottie from "react-lottie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
const VisualisationComponent = ({
  width = 550,
  height = 400,
  animationData,
  title,
  description,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="m-2">
      <Card>
        <CardHeader>
          <CardTitle>Visualisation: {title}</CardTitle>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardContent className="border border-blue-400 rounded-lg bg-slate-100 dark:bg-slate-400">
          <Lottie options={defaultOptions} height={height} width={width} />
        </CardContent>
      </Card>
    </div>
  );
};
export default VisualisationComponent;
