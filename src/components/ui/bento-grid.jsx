import { useRouter } from "next/navigation";
import { cn } from "../../utils/cn";
import { Badge } from "./badge";
import { buttonVariants } from "./button";
import Link from "next/link";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  label,
  path,
  comingSoon,
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-muted/60 dark:border-white/[0.2] bg-white border border-black/[0.4] justify-between flex flex-col space-y-4",
        className
      )}
      // onClick={() => {
      //   comingSoon || router.push(path);
      // }}
    >
      <div className="translate-x-0 transition duration-200">
        <Badge
          className={cn(
            "absolute right-5 top-1",
            label === "New"
              ? "bg-green-500 !hover:bg-green-600"
              : "bg-[#ffa500]"
          )}
          variant={"secondary"}
        >
          {label}
        </Badge>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>

        {/*         
      TODO:CHAKIB HADDADI
      */
        /* <div className="mt-20 font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
     Course Made by :
    </div> */}
      </div>
      {comingSoon || (
        <button
          className={cn(
            "my-2 relative left-3 bottom-4 max-w-20",
            buttonVariants()
          )}
          onClick={() => {
            comingSoon || router.push(path);
          }}
        >
          Enroll
        </button>
      )}
    </div>
  );
};
