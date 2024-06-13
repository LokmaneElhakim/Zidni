import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { Message } from "./message";
import { cn } from "../../../utils/cn";
import { buttonVariants } from "../../ui/button";
// import Input from "postcss/lib/input";
import { SendHorizontal } from "lucide-react";
import { Input } from "../../ui/input";

const Chatbot = () => {
  const [state, setState] = useState(false);
  const [initQuestion, setInitQuestion] = useState([]);
  const [initResponse, setInitResponse] = useState([]);
  const [listQst, setListQst] = useState([]);
  const [listRes, setListRes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionInput, setQuestionInput] = useState("");

  // List of questions about matrices, linear transformations, and vectors with their responses
  const matrixQuestions = [
    {
      question: "What is a matrix?",
      response:
        "A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns.",
    },
    {
      question: "What is matrix multiplication?",
      response:
        "Matrix multiplication is a binary operation that produces a matrix from two matrices. It is defined if and only if the number of columns of the first matrix is equal to the number of rows of the second matrix.",
    },
    {
      question: "What is a linear transformation?",
      response:
        "A linear transformation is a mapping between two vector spaces that preserves the operations of vector addition and scalar multiplication.",
    },
    {
      question: "What is a vector?",
      response:
        "A vector is a quantity or phenomenon that has two independent properties: magnitude and direction. Vectors are often represented as arrows in a coordinate space.",
    },
    // Add more questions and responses as needed
  ];

  useEffect(() => {
    if (state) {
      setInitQuestion(["Welcome to Zidni! How can we assist you today?"]);
      setInitResponse([""]);
    }
  }, [state]);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  const onSendButton = () => {
    if (inputValue === "") return;

    setListQst((prev) => [...prev, inputValue]);
    setIsLoading(true);

    const matchedQuestion = matrixQuestions.find((question) =>
      inputValue.toLowerCase().includes(question.question.toLowerCase())
    );

    if (matchedQuestion) {
      const suggestion = `Did you mean: "${matchedQuestion.question}"?`;
      setListRes((prev) => [...prev, suggestion]);
      setIsLoading(false);
    } else {
      setTimeout(() => {
        const botMessage = "Your question will be replied soon.";

        let index = 0;
        const interval = setInterval(() => {
          if (index < botMessage.length) {
            setListRes((prev) => {
              const newResponses = [...prev];
              newResponses[newResponses.length - 1] = botMessage.slice(
                0,
                index + 1
              );
              return newResponses;
            });
            index++;
          } else {
            clearInterval(interval);
            setIsLoading(false);
          }
        }, 50);

        setListRes((prev) => [...prev, ""]);
      }, 1000);
    }
    setInputValue("");
  };

  const handleQuestionClick = (question) => {
    const matchedResponse = matrixQuestions.find(
      (q) => q.question === question
    )?.response;

    if (matchedResponse) {
      setListQst((prev) => [...prev, question]);
      setListRes((prev) => [...prev, matchedResponse]);
    }
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
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end space-y-2 h-[90%] max-w-[45vw] md:max-w-[40vw] min-w-[300px] justify-end">
      {state && (
        <div className="rounded-lg flex flex-col h-[80%] w-full border border-[#A3A3A3] shadow-lg">
          <div className="flex flex-col justify-center items-center w-full h-[20%] bg-slate-300 dark:bg-gray-800 rounded-lg font-bold text-2xl py-4 ">
            <h2>Chatbot</h2>
            <span className="flex justify-center items-center h-5 text-center text-[14px]">
              For more information contact us
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
          </div>
          <div className="flex items-center bg-primary w-full px-1 sm:p-0 ">
            <Input
              type="text"
              placeholder="Ask something ..."
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
            />
            <button
              onClick={onSendButton}
              disabled={isLoading}
              className="scale-130 p-2"
            >
              <SendHorizontal />
            </button>
          </div>
          <div className="p-3 border-t border-gray-300 bg-gray-50 dark:bg-gray-800 h-[24%] overflow-y-auto sm:text-sm rounded-lg">
            <span className="font-semibold text-sm">Suggested Questions:</span>
            <div className="mt-2 space-y-1 max-h-[120px] overflow-y-auto">
              {matrixQuestions.map((question, index) => (
                <div
                  key={index}
                  className="cursor-pointer text-blue-600 hover:underline text-sm"
                  onClick={() => handleQuestionClick(question.question)}
                >
                  {question.question}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {renderOpenButton()}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
          .animate-blink {
            animation: blink 1.4s infinite both;
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
