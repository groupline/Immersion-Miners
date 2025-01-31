import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  HowItWorksInfo,
  Features2InfoTop,
  Features2InfoDown,
  OurTeamInfo,
  OurBlogInfo,
} from "../../data/data-containers/HomeDemo2/data-HomeDemo2.js";

// import SecPricesInfo from "../../data/data-containers/HomeDemo2/data-SecPricesInfo.json";
import RoadmapInfo from "../../data/data-containers/HomeDemo2/data-RoadmapInfo.json";
import FaqInfo from "../../data/data-containers/HomeDemo2/data-FaqInfo.json";

import {
  HomeDemo2Wwhitepaper,
  HomeDemo2SectionIcon11,
} from "../../utils/allImgs";

import "./style/HomeDemo2.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/HeroSection";
import AboutOther from "../../components/AboutOther";
import FuelFeatures from "../../components/FuelFeatures";
import Features2 from "../../components/Features2";
import SpreadMap from "../../components/SpreadMap";

import Roadmap from "../../components/Roadmap";
import Faq from "../../components/Faq";
import OurTeam from "../../components/OurTeam";
import Subscribe from "../../components/Subscribe";
import OurBlog from "../../components/OurBlog";

import HowItWorks from "./HowItWorks";

const HomeDemo2Container = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Home Template2" />
      <SecHeroSection
        ClassSec="hero-section app section-padding"
        ClassDiv="col-12 col-lg-7 col-md-12"
        specialHead="Join The Club & Earn"
        title="Earn 40-50% APR*"
        link1="contact us"
        link2="Learn more"
        HomeDemo1Or3Or4Or5Or6={false}
        HomeDemo1Or4Or5Or6={false}
      />
      <div className="clearfix" />
      <Features2
        icoCounterClass="ico-counter dotted-bg mb-30"
        Features2InfoTop={Features2InfoTop}
        Features2InfoDown={Features2InfoDown}
      />
      <HowItWorks data={HowItWorksInfo} ClassSpanTitle="gradient-text blue" />
      <AboutOther />
      <FuelFeatures />

      <div className="clearfix" />
      <SpreadMap Wwhitepaper={HomeDemo2Wwhitepaper} />

      <Roadmap data={RoadmapInfo} ClassSpanTitle="gradient-text blue" />
      <Faq data={FaqInfo} ClassSpanTitle="gradient-text blue" />
      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text blue" />
      <Subscribe />
      <OurBlog data={OurBlogInfo} ClassSpanTitle="gradient-text blue" />
      <FooterPages ClassSpanTitle="gradient-text blue" />
    </div>
  );
};

export default HomeDemo2Container;
