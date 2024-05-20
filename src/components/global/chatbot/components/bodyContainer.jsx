import { useState } from "react";
import Body from "./body";
import { AnimatedTooltipPreview } from "../teamIcons";

function BodyContainer({
  listQuestions,
  listResponses,
  isLoading,
  setMessage,
}) {
  const [questionInput, setQuestionInput] = useState("");
  return (
    <div className="flex justify-center items-center flex-col rounded-lg h-4/5 w-full border border-[#A3A3A3] mb-16">
      <div className="flex flex-col justify-center items-center w-full h-1/6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-t-lg font-bold text-2xl ">
        <AnimatedTooltipPreview />
        <h2>Chatbot</h2>
      </div>
      <Body
        isLoading={isLoading}
        listQst={listQuestions}
        listRes={listResponses}
      />
      <div className="flex items-center bg-blue-500 w-full h-1/6 p-1.5 space-x-2.5 rounded-b-lg">
        <textarea
          className="flex-1 h-3/5 border-0 rounded-md p-1 text-gray-900 bg-blue-100 resize-none outline-none flex justify-center overflow-y-auto"
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
          <img
            src="./chatbot/send.svg"
            alt="send"
            className="transform scale-150"
          />
        </button>
      </div>
    </div>
  );
}

export default BodyContainer;
