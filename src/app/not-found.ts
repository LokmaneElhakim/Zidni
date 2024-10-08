import Link from "next/link";
import { buttonVariants } from "../components/ui/button";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <>
      <section className="relative z-10 pb-16 md:!-mt-12 sm:!mt-16 mt-10 md:pb-20 lg:pb-28 lg:pt-[180px] !h-[70dvh]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <div className="mx-auto text-center mb-9">
                  {/* svg */}
                  <Image
                    src="/svg/error.svg"
                    width={450}
                    height={450}
                    alt="page not found"
                    className="self-start ml-[8%]"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Sorry, the page can’t be found
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The page you were looking for appears to have been moved,
                  deleted or does not exist.
                </p>
                <Link href="/" className={buttonVariants()}>
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
