import { useRouter } from "next/navigation";
import { cn } from "../../utils/cn";
import { Badge } from "./badge";
import { buttonVariants } from "./button";
export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto !h-fit",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  label,
  title,
  description,
  chapters,
  comingSoon,
  path,
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl shadow-input dark:shadow-none p-4 dark:bg-muted/60 dark:border-white/[0.2] bg-white border border-black/[0.4] justify-between flex flex-col space-y-4 !h-full",
        className
      )}
    >
      <div className="translate-x-0 transition duration-200 !h-full">
        {label && (
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
        )}
        <div className="font-sans text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 mb-10">
          {description}
        </div>

        {chapters && chapters.length > 0 && (
          <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 mt-6 mb-10 ">
            <h3 className="font-bold mb-2">Chapters:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {chapters.map((chapter, index) => (
                <li key={index}>{chapter}</li>
              ))}
            </ul>
          </div>
        )}

        {!comingSoon && (
          <button
            className={cn(
              "absolute mb-2 float-right bottom-2 right-1 mt-8",
              buttonVariants({ size: "lg" })
            )}
            onClick={() => {
              comingSoon || router.push(path);
            }}
          >
            Enroll Now
          </button>
        )}
      </div>
    </div>
  );
};
