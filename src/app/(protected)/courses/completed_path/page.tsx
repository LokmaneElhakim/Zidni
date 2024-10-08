import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import Link from "next/link";
import { buttonVariants } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";

const CongratulationsPage = () => {
  return (
    <div className="bg-inherit max-h-[70dvh] flex items-center justify-center mt-40">
      <Card className="w-[80dvw] mx-auto p-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <CardHeader className="sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
          <CardTitle>Congratulations! 🎉</CardTitle>
        </CardHeader>
        <CardContent className="!text-xs sm:!text-base text-gray-600 dark:text-gray-300 w-[112%] sm:w-full ">
          Congrats on finishing our track! you've achieved a remarkable
          milestone. You can now head back to the resources page and explore
          more content, Keep Excelling .
        </CardContent>
        <div className="flex items-center mb-3 ml-6">
          Got any feedback?
          <Link
            href={"https://forms.gle/12zvmvNxJWk3XXNA6"}
            target="_blank"
            className={cn("", buttonVariants({ variant: "link" }))}
          >
            Let us know
          </Link>
        </div>
        <iframe
          className="hidden sm:block rounded-lg"
          src="https://docs.google.com/forms/d/e/1FAIpQLScUAETrTia84BQsNpRLsp7Z2IZAcuZ_RqKx3Urcbp29GHXT6g/viewform?embedded=true"
          width="100%"
          height="450px"
        >
          Loading...
        </iframe>
      </Card>
    </div>
  );
};

export default CongratulationsPage;
