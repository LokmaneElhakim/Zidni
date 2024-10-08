import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../../../components/ui/card";

const CongratulationsPage = () => {
  return (
    <div className="bg-inherit max-h-[70dvh] flex items-center justify-center mt-36">
      <Card className="w-[80dvw] mx-auto p-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <CardHeader className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Congratulations! 🎉
        </CardHeader>
        <CardContent className="text-gray-600 dark:text-gray-300">
          You have successfully completed the course.
        </CardContent>
      </Card>
    </div>
  );
};

export default CongratulationsPage;
