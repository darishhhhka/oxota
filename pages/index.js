import React from "react";
import PageDescription from "@/components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "@/constants/page-description";
import CustomHeader from "@/components/baseComponents/gui/customHeader/CustomHeader";
import Footer from "@/components/baseComponents/gui/footer/Footer";
import {footerContent, header} from "@/constants/copyright";
import Intro from "@/components/intro/Intro";
import When from "@/components/when/When";
import About from "@/components/about/About";
import Winner from "@/components/winner/Winner";

export default function Home() {
  return (
    <>
      <Intro/>
      <When/>
      <About/>
      <Winner/>
      {/*<PageDescription {...defaultPage} />*/}
      {/*<CustomHeader {...header} />*/}
      {/*<Footer {...footerContent} />*/}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
