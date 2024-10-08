import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import Image from "next/image";

const ComingSoonPage = () => {
  return (
    <>
      <section className="relative z-10 pb-16 md:!-mt-12 sm:!mt-16 mt-10 md:pb-20 lg:pb-28 lg:pt-[100px] !h-[60dvh]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <div className="mx-auto text-center mb-9">
                  {/* svg */}
                  <Image
                    src="/svg/comingsoon.svg"
                    width={450}
                    height={450}
                    alt="coming soon"
                    className="self-start ml-[8%]"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  This Course is Coming Soon
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We are excited to announce that this course will be available
                  soon. Stay tuned for updates and be ready to enhance your
                  learning experience.
                </p>
                <Link href="/courses" className={buttonVariants()}>
                  Back to Courses Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoonPage;
