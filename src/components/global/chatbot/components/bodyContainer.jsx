/* eslint-disable react/prop-types */
import { useState } from "react";
import Body from "./body";
import Link from "next/link";
import { buttonVariants } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { cn } from "../../../../utils/cn";
import { SendHorizontal } from "lucide-react";

function BodyContainer({
  initQuestion,
  initResponse,
  listQuestions,
  listResponses,
  isLoading,
  setMessage,
}) {
  const [questionInput, setQuestionInput] = useState("");
  return (
    <div className=" rounded-lg flex justify-center items-center flex-col h-4/5 w-full border border-[#A3A3A3] shadow-lg">
      <div className="flex flex-col justify-center items-center w-full h-[20%] bg-slate-300 dark:bg-gray-800 rounded-lg font-bold text-2xl py-4 ">
        <h2>Chatbot</h2>
        <span className="flex justify-center items-center h-5 text-center text-[14px]">
          For more information contact us
        </span>

        <Link
          href={"mailto:contact.zidni@gmail.com"}
          className={cn("!text-blue-700", buttonVariants({ variant: "link" }))}
        >
          contact.zidni@gmail.com
        </Link>
      </div>
      <Body
        initResponse={initResponse}
        initQuestion={initQuestion}
        isLoading={isLoading}
        listQst={listQuestions}
        listRes={listResponses}
      />
      <div className="flex items-center bg-primary w-full h-1/6 p-1.5 space-x-2.5 rounded-b-lg">
        <Input
          type="text"
          placeholder="Ask something ..."
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        />
        <button
          onClick={() => {
            setMessage(questionInput);
            setQuestionInput("");
          }}
          disabled={isLoading}
          className="scale-130 p-2"
        >
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
}

export default BodyContainer;
