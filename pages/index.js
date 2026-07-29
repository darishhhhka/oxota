import React from "react";
import PageDescription from "@/components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "@/constants/page-description";
import CustomHeader from "@/components/baseComponents/gui/customHeader/CustomHeader";
import {footerContent, header} from "@/constants/copyright";
import Intro from "@/components/intro/Intro";
import When from "@/components/when/When";
import About from "@/components/about/About";
import Winner from "@/components/winner/Winner";
import App from "@/components/app/App";
import Promo from "@/components/promo/Promo";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Intro/>
      <When/>
      <About/>
      <Winner/>
      <App/>
      <Promo/>
      <Footer/>
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
