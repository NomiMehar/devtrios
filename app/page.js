import React from "react";
import Head from "next/head";
import Banner from "@/app/(pages)/home/Banner/Banner";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesHomeList from "@/app/(components)/companies-slider/CompaniesHomeList.json";
import AboutDevtrios from "@/app/(components)/about-devtrios/AboutDevtrios";
import AboutHomeList from "@/app/(components)/about-devtrios/AboutHomeList.json";
import DigitalServices from "@/app/(pages)/home/DigitalServices/DigitalServices";
import FeaturedCase from "@/app/(pages)/home/FeaturedCase/FeaturedCase";
import KeyMetrics from "@/app/(components)/key-metrics/KeyMetrics";
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
      <KeyMetrics />
    </React.Fragment>
  );
}
