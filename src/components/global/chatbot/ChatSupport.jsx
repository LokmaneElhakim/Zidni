"use client";
import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Minus } from "lucide-react";
import { ScrollArea } from "../../../components/ui/scroll-area";

export default function ChatSupport() {
  const [isOpen, setOpen] = useState(false);

  const [isDisplay, setDisplay] = useState(true);

  return (
    <div className="fixed bottom-14 right-5 z-20">
      <motion.div
        Layout
        animate={{ borderRadius: isOpen ? 10 : 50 }}
        initial={{ borderRadius: 50 }}
        className={cn(
          "w-20 h-20 bg-zinc-700 shadow-2xl cursor-pointer flex item-center justify-center",

          {
            "w-96 h-[34rem] cursor-default": isOpen,
          }
        )}
        onClick={() => {
          if (!isOpen) {
            setOpen(!isOpen);

            setDisplay(false);
          }
        }}
        onAnimationComplete={() => {
          if (!isOpen) {
            setDisplay(true);
          }
        }}
      >
        {isDisplay && <h1 className="text-5xl">emoji here</h1>}
        {isOpen && (
          <ScrollArea clasName="w-full h-full relative">
            <div className="p-5 border-b flex item-center justify-between absolute top-0 w-full right-0 bg-zinc-700">
              <h1 className="text-2xl">chat</h1>
              <Minus
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>

            <div className="p-5 space-y-2 mt-16">
              <Chat isOpen={isOpen} />
            </div>

            <div id="bottom-chat"></div>
          </ScrollArea>
        )}
      </motion.div>
    </div>
  );
}

const Chat = ({ isOpen }) => {
  const [messages, setMessages] = useState(PRESET_MESSAGE);

  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    document
      .getElementById("bottom-chat")
      ?.scrollIntoView({ behavior: "smooth" });
  }, [messages.Length]);

  const handlePresetQuestion = (index) => {
    const question = messages[index];

    const updateAnswered = [...answered, question.answerId];

    setMessages((current) => [
      ...current,

      {
        isBot: false,

        message: question.message,

        isPresetQuestion: false,

        answerId: "",

        isUser: true,
      },

      {
        isBot: true,

        message: PRESET_ANSWERS[question.answerId].message,

        isPresetQuestion: false,

        answerId: "",

        isUser: false,
      },

      ...PRESET_QUESTIONS.filter(
        (quetion) => !updateAnswered.includes(quetion.answerId)
      ),
    ]);

    setAnswered(updateAnswered);
  };

  return (
    <>
      {messages.map((message, key) => {
        if (message.isBot) {
          return <Bot message={message.message} isOpen={isOpen} key={key} />;
        } else if (message.isPresetQuestion) {
          return (
            <PresetQuestion
              message={message.message}
              key={key}
              onClick={() => handlePresetQuestion(key)}
              isOpen={isOpen}
            />
          );
        } else if (message.isUser) {
          return (
            <User
              message={message.message}
              key={key}
              onClick={() => handlePresetQuestion(key)}
            />
          );
        }
      })}
    </>
  );
};

const Bot = ({ message, isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex item-center gap-2">
        <span className="bg-zinc-900 rounded-full">
          <h1 className="text-3xl">emoji</h1> // emoji that appears above the
          bot message when u r talking with the bot
        </span>

        <hi className="text-grey-300">Zidni's bot</hi>
      </div>

      <h1>{message}</h1>
    </motion.div>
  );
};

const PresetQuestion = ({
  message,

  onClick,

  isOpen,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ delay: 0.7 }}
      className="cursor-pointer hover:tracking-wider transition-all"
      onClick={onClick}
    >
      <h1 className="bg-zinc-900 inline-block p-2 rounded-md px-3">
        {message}
      </h1>
    </motion.div>
  );
};

const User = ({ message }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex item-center justify-end gap-2">
        <hi className="text-grey-300">You</hi>

        <span className="bg-zinc-900 rounded-full">
          <h1 className="text-3xl">emoji</h1> // emoji that appears above your
          message when u r talking with the bot
        </span>
      </div>

      <h1 className="text-right">{message}</h1>
    </motion.div>
  );
};
