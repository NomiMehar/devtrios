import React from "react";
import Head from "next/head";
import Banner from "@/app/(pages)/home/Banner/Banner";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesHomeList from "@/app/(components)/companies-slider/CompaniesHomeList.json";
import AboutDevtrios from "@/app/(components)/about-devtrios/AboutDevtrios";
import AboutHomeList from "@/app/(components)/about-devtrios/AboutHomeList.json";
import DigitalServices from "@/app/(pages)/home/DigitalServices/DigitalServices";
import FeaturedCase from "@/app/(components)/featuredCase/FeaturedCase";
import KeyMetrics from "@/app/(components)/key-metrics/KeyMetrics";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise";
import TechnologyStack from "@/app/(components)/technology-stack/TechnologyStack";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import OurClients from "@/app/(components)/our-clients/OurClients";
import Cta from "@/app/(components)/cta/Cta";
import CtaHomeList from "@/app/(components)/cta/CtaHomeList.json";
import Blogs from "@/app/(components)/blogs/Blogs";
import Faqs from "@/app/(components)/faqs/Faqs";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>
          Devtrios | Expert Web & App Development, UI/UX Design & Digital
          Marketing
        </title>
        <meta
          name="description"
          content="Expert Web & App Development, UI/UX Design & Digital Marketing."
        />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Devtrios" />
        <meta
          property="og:description"
          content="Expert Web & App Development, UI/UX Design & Digital Marketing."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Devtrios" />
        <meta
          name="twitter:description"
          content="Expert Web & App Development, UI/UX Design & Digital Marketing."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <Banner />
      <CompaniesSlider
        title={CompaniesHomeList.title}
        images={CompaniesHomeList.images}
        basePath={CompaniesHomeList.basePath}
      />
      <AboutDevtrios
        title={AboutHomeList.title}
        description={AboutHomeList.description}
      />
      <DigitalServices />
      <FeaturedCase />
      <OurExpertise />
      <KeyMetrics />
      <TechnologyStack />
      <Testimonials />
      <OurClients />
      <Cta data={CtaHomeList} />
      <Blogs />
      <Faqs />
    </React.Fragment>
  );
}
