import React from "react";
import AboutSection from "../../components/global/About/AboutSection";
import Breadcrumb from "../../components/global/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description={
          "Explore our interactive courses across diverse subjects. Start learning today and broaden your horizons."
        }
      />
      <AboutSection />
    </>
  );
};

export default AboutPage;
