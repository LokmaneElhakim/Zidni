"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../../../../components/ui/accordion";

const Visualisation = ({ courseSelected, index }) => {
  let idx;
  idx = index;
  const filterChapter = (i) => {
    return courseSelected?.chapters.filter((chapter) => chapter.chapterId == i);
  };
  let filteredChapter;

  filteredChapter = filterChapter(idx);
  return (
    <div className="overflow-x-hidden min-h-[90dvh] max-h-[91dvh] border-2 rounded-sm m-0 p-0 dark:bg-background overflow-y-scroll w-full">
      <div
        className={
          "flex-col justify-center items-center sm:flex m-0 p-0 w-full"
        }
      >
        <Card className="m-4 !min-w-[96%]">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {filteredChapter[0]?.chapterId}. {filteredChapter[0]?.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full ">
            <Accordion
              key={filteredChapter[0]?.chapterId}
              className="w-full"
              collapsible
            >
              {filteredChapter[0]?.subChapter?.map(
                (subChapter, subChapterId) => {
                  return (
                    <AccordionItem value={subChapterId + 1}>
                      <AccordionTrigger>
                        <h3 className="font-bold mt-3">{subChapter?.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        {subChapter.subChapterContent ?? (
                          <p className="text-orange-400">
                            (This chapter has no desciption)
                          </p>
                        )}
                      </AccordionContent>
                      {subChapter?.subChapterVisualisation}
                    </AccordionItem>
                  );
                }
              )}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Visualisation;
