"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { Message } from "./message";
import { cn } from "../../../utils/cn";
import { buttonVariants } from "../../ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../../ui/accordion";
const initialQuestions = [
  {
    id: 2,
    question: "What is the main purpose of the Zidni platform?",
    response:
      "The main purpose of the Zidni platform is to provide an innovative learning experience through immersive virtual environments and interactive content.",
  },
  {
    id: 14,
    question: "What features does Zidni offer to enhance learning?",
    response:
      "Zidni offers features such as virtual reality-based lessons, interactive simulations, real-time feedback, and customizable learning paths to enhance the educational experience.",
  },
  {
    id: 26,
    question: "Who can benefit from using Zidni?",
    response:
      "Students, educators, and institutions can benefit from using Zidni. It is designed to cater to various educational levels and subjects, making learning more engaging and effective.",
  },
  {
    id: 37,
    question: "Is Zidni compatible with different devices?",
    response:
      "Yes, Zidni is compatible with various devices including desktops, tablets, and VR headsets, allowing users to access the platform from anywhere.",
  },
  {
    id: 48,
    question: "How can users get started with Zidni?",
    response:
      "Users can get started with Zidni by visiting the platform's website, creating an account, and exploring the available courses and learning materials. The platform provides easy-to-follow instructions for new users.",
  },
];
const Chatbot = () => {
  const [state, setState] = useState(false);
  const [messageInfo, setMessageInfo] = useState(false);
  const [initQuestion, setInitQuestion] = useState([]);
  const [initResponse, setInitResponse] = useState([]);
  const [listQst, setListQst] = useState([]);
  const [listRes, setListRes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionInput, setQuestionInput] = useState("");
  const [predefiedQst, setPredefinedQst] = useState(initialQuestions);

  // List of questions about matrices, linear transformations, and vectors with their responses

  useEffect(() => {
    if (state) {
      setInitQuestion(["Welcome to Zidni 👋", "How can we assist you today?"]);
      setInitResponse([""]);
    }
  }, [state]);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  const onSendButton = () => {
    if (inputValue === "") return;
    setInputValue("");
  };

  const handleQuestionClick = (clickedQuestion) => {
    const matchedResponse = initialQuestions.find(
      (q) => q.question === clickedQuestion
    )?.response;

    if (matchedResponse) {
      setListQst((prev) => [...prev, clickedQuestion]);
      setListRes((prev) => [...prev, matchedResponse]);
    }
    setPredefinedQst((prevQuestions) =>
      prevQuestions.filter((qst) => qst.question !== clickedQuestion)
    );
  };

  const renderOpenButton = () => {
    return (
      <button
        className="z-[100] inline-flex items-center justify-center text-sm disabled:pointer-events-none disabled:opacity-80 border border-[#A3A3A3] rounded-full bg-[#020817] 
        w-12 h-12 hover:bg-gray-900 m-0 cursor-pointer bg-none p-0 normal-case leading-5 shadow-xl"
        onClick={toggleState}
        disabled={isLoading}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>
    );
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end space-y-2 h-[90%] max-w-[45vw] md:max-w-[45vw] lg:w-[30vw] min-w-[300px] justify-end">
      {state && (
        <div className="rounded-lg flex flex-col h-[80%] w-full border border-[#A3A3A3] shadow-lg">
          <div className="flex flex-col justify-center items-center w-full h-[20%] bg-slate-300 dark:bg-gray-800 rounded-lg font-bold text-2xl py-4 ">
            <h2 className="mt-1.5">Chatbot</h2>
            <span className="mt-5 flex justify-center items-end h-5 text-center text-[14px]">
              For more informations contact us at
            </span>
            <Link
              href={"mailto:contact.zidni@gmail.com"}
              className={cn(
                "!text-blue-700",
                buttonVariants({ variant: "link" })
              )}
            >
              contact.zidni@gmail.com
            </Link>
          </div>
          <div className="flex-1 p-2 overflow-y-auto bg-gray-100 dark:bg-gray-700 space-y-5">
            {messageInfo && (
              <div
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg"
                role="alert"
              >
                <p className="font-bold">Chatbot Unavailable</p>
                <p>
                  Sorry, the chatbot is not available at the moment. However,
                  you can still explore the predefined questions below.
                </p>
              </div>
            )}
            <div className="flex justify-start flex-col space-y-5">
              {initQuestion.map((qst, index) => (
                <Fragment key={index}>
                  <Message isAns={true}>{qst}</Message>
                  {initResponse[index] && (
                    <Message isAns={true}>{initResponse[index]}</Message>
                  )}
                </Fragment>
              ))}
              {listQst.map((qst, index) => (
                <Fragment key={index}>
                  <Message isAns={false}>{qst}</Message>
                  {listRes[index] && (
                    <Message isAns={true}>{listRes[index]}</Message>
                  )}
                </Fragment>
              ))}
              {isLoading && <Message isAns={true}>...</Message>}
            </div>
            <p className="flex justify-center items-end align-bottom h-1/7 text-center text-[14px] text-[#A3A3A3]">
              This AI chatbot will help you explore our platform's features,
              deployment is pending. Thank you for your patience.
            </p>
          </div>

          <Accordion
            collapsible
            className="p-3 border-t border-gray-300 bg-gray-50 dark:bg-gray-800 h-[24%] overflow-y-auto sm:text-sm rounded-lg"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Suggested Questions</AccordionTrigger>
              <AccordionContent className="mt-2 space-y-1 max-h-[120px] ">
                {predefiedQst.map((question, index) => (
                  <div
                    key={index}
                    className="cursor-pointer text-blue-600 hover:underline text-sm"
                    onClick={() => {
                      setMessageInfo(false);
                      handleQuestionClick(question.question);
                    }}
                  >
                    {question.question}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
      {renderOpenButton()}
    </div>
  );
};

export default Chatbot;
