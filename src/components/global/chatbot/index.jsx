import { Input } from "../../ui/input";
import React, { useState } from "react";
import { AnimatedTooltipPreview } from "./teamIcons";
import { buttonVariants } from "../../ui/button";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <!-- component --> */}
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="z-[100] fixed bottom-5 right-5 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-14 h-14 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
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
      {isOpen && (
        <div
          style={{
            boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          }}
          className={`transition-transform duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          } ease-linear bg-gray-400 z-50 fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 w-[350px] rounded-lg border border-[#e5e7eb] pb-5 m-0`}
        >
          {/* <!-- Heading --> */}
          <div className=" flex flex-col space-y-1.5 bg-[#37404f] rounded-lg py-4 shadow-xl">
            <AnimatedTooltipPreview />
            <p className="text-2xl decoration-4 self-center text-white dark:text-gray-50">
              Zidni Support Team
            </p>
            <p className="decoration-8 text-white leading-3 text-xs self-center">
              Got any questions? chat with us
            </p>
          </div>

          {/* <!-- Chat Container --> */}
          <div
            className="h-[370px] pt-2 text-gray-800"
            style={{ minWidth: "100%", display: "table" }}
          >
            {/* <!-- Chat Message AI --> */}
            <div className="px-3 flex gap-3 my-4  text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">AI </span>Hi,
                how can I help you today?
              </p>
            </div>

            {/* <!-- User Chat Message --> */}
            <div className=" px-3 flex gap-3 my-4 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">You </span> ya
                kho w9tach y2eden l maghrib
              </p>
            </div>
            <div className="px-3 flex gap-3 my-4  text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">AI </span>Hi, It
                seems like there was an issue with the connection. However, I'm
                here and ready to assist you with any questions or tasks you
                have. How can I help you today?
              </p>
            </div>
          </div>

          {/* <!-- Input box  --> */}
          <div className="px-3 flex items-center pt-3">
            <form className="text-gray-900 dark:text-black flex items-center justify-center w-full space-x-2">
              <Input
                className=" flex h-9 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-2"
                placeholder="Type your message"
              />
              <button className={buttonVariants({ variant: "secondary" })}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
