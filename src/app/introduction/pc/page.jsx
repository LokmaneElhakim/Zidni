"use client";
import React, { useState } from "react";
import Joyride, { STATUS } from "react-joyride";

function App() {
  const [{ run, steps }] = useState({
    run: true,
    steps: [
      {
        content: <h2>Let's begin our journey!</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: <h2>Here is first step!</h2>,
        placement: "bottom",
        target: "#step-1",
        title: "First step",
      },
      {
        content: <h2>Here is second step!</h2>,
        placement: "bottom",
        target: "#step-2",
        title: "Second step",
      },
      {
        content: <h2>Here is third step!</h2>,
        placement: "bottom",
        target: "#step-3",
        title: "Third step",
      },
      {
        content: <h2>Here is fourth step!</h2>,
        placement: "bottom",
        target: "#step-4",
        title: "Fourth step",
      },
      {
        content: <h2>Here is fifth step!</h2>,
        placement: "bottom",
        target: "#step-5",
        title: "Fifth step",
      },
      {
        content: <h2>Here is six step!</h2>,
        placement: "bottom",
        target: "#step-6",
        title: "Six step",
      },
    ],
  });

  return (
    <div
      style={{
        background: "#797979",
        height: "100vh",
        display: "flex",
        gap: "8px",
        padding: 10,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Joyride
        continuous
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return (
          // hardcoder chapitre 1 ta3 sfsd w dir only pc version w 9oulelhoum  phone version will be available soon
          // endek 4 steps :
          // f take tour dir 2 buttons wa7ed small devices yedi /intro/phone w lokher pc w hardcoder l7ala meme f l quizzes
          // 1 - accordion collapsible
          // 2 - visualisation
          // 3 - hint or info button
          // 4 - resizable Panel
          // f l quiz section dir hint card sefra yk
          // dir button ta3 take tour ly ywerilek kifch tekhdem b site
          // t9der f la fin ta3 intro ta3 learn t9oul lel user ila ak 7ab tchouf ta3 quizzes wela tro7 te9ra
          <div
            key={item}
            id={`step-${item}`}
            style={{
              border: "1px solid white",
              width: "100px",
              height: "100px",
              background: "#0c1d2b",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default App;
