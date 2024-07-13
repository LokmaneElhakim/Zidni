import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={"About Us"}
          paragraph={
            "Welcome to Zidni, Algeria's premier e-learning platform dedicated to revolutionizing education through innovation and personalized learning. Our mission is to provide high-quality, engaging, and interactive educational experiences that cater to the unique needs of each learner."
          }
          center={true}
        />
        <div className="-mx-6 flex justify-center flex-wrap items-center">
          {/* <div className="w-full px-4 lg:w-1/2">
            {/* <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> 
            </div> 
          </div> */}
          <div className="w-full px-4 flex justify-center ">
            <div className="lg:w-2/3 flex justify-center flex-col">
              <div className="mb-9 flex justify-center items-center flex-col">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Who are we ?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mx-auto text-center">
                  We are a team of passionate students, technologists, and
                  designers committed to making education accessible and
                  effective for everyone. With a focus on leveraging the latest
                  advancements in technology, we strive to create a learning
                  environment that is both stimulating and supportive.
                </p>
              </div>
              <div className="mb-9 flex justify-center items-center flex-col">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mx-auto text-center">
                  Our vision is to transform the educational landscape in
                  Algeria by offering cutting-edge e-learning solutions that
                  empower learners to achieve their full potential. We aim to
                  bridge the gap between traditional education and modern
                  technology, fostering a culture of continuous learning and
                  growth.
                </p>
              </div>
              <div className="mb-9 flex justify-center items-center flex-col">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What We Do
                </h3>
                <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed list-disc pl-5 ">
                  <li>
                    <span className="font-bold">AI-Powered Learning:</span> Our
                    platform utilizes AI to personalize learning paths, ensuring
                    that each student receives the support they need to succeed.
                  </li>
                  <li>
                    <span className="font-bold">Interactive Courses:</span> We
                    offer a wide range of courses designed to be engaging and
                    interactive, making learning enjoyable and effective.
                  </li>
                  <li>
                    <span className="font-bold">Expert Instructors:</span> Learn
                    from the best with our team of experienced educators and
                    industry professionals.
                  </li>
                  <li>
                    <span className="font-bold">Progress Tracking:</span> Our
                    tools help students monitor their progress and stay
                    motivated throughout their learning journey.
                  </li>
                </ul>
              </div>
              <div className="mb-1 flex justify-center items-center flex-col">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Why Choose Zidni?
                </h3>
                <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed list-disc pl-5">
                  <li>
                    <span className="font-bold">Innovation:</span> We
                    incorporate the latest technological advancements to enhance
                    the learning experience.
                  </li>
                  <li>
                    <span className="font-bold">Quality:</span> Our courses are
                    developed by experts to ensure the highest quality of
                    education.
                  </li>
                  <li>
                    <span className="font-bold">Accessibility:</span> We make
                    learning accessible to everyone, regardless of location or
                    background.
                  </li>
                  <li>
                    <span className="font-bold">Support:</span> Our dedicated
                    support team is always here to help you succeed.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
