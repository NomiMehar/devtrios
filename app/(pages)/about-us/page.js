import React from "react";
import Head from "next/head";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import VisionMission from "@/app/(pages)/about-us/vision-mission/VisionMission";
import OurValues from "@/app/(pages)/about-us/our-values/OurValues";
import HowWeWork from "@/app/(pages)/about-us/how-we-work/HowWeWork";
import DevtriosExperts from "@/app/(pages)/about-us/devtrios-experts/DevtriosExperts";
import WorldwideSolution from "@/app/(pages)/about-us/worldwide-solution/WorldwideSolution";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import ContactInfoForm from "@/app/(components)/contact-info-form/ContactInfoForm";

export default function AboutUs() {
  const customBannerData = bannerData.about;
  const companiesData = CompaniesList.about;
  const ctaData = CtaList.about;

  return (
    <React.Fragment>
      <Head>
        <title>
          About Devtrios: Trusted Digital Agency Delivering Powerful Results
        </title>
        <meta
          name="description"
          content="Learn about Devtrios: our vision, expertise in web, apps & AI, and how we drive growth & digital excellence for businesses."
        />
        <link rel="canonical" href="https://devtrios.com/about-us/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Devtrios" />
        <meta
          property="og:description"
          content="Learn about Devtrios: our vision, expertise in web, apps & AI, and how we drive growth & digital excellence for businesses."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Devtrios" />
        <meta
          name="twitter:description"
          content="Learn about Devtrios: our vision, expertise in web, apps & AI, and how we drive growth & digital excellence for businesses."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <CustomBanner
        title={customBannerData.title}
        description={customBannerData.description}
        buttons={customBannerData.buttons}
        background={customBannerData.background}
      />
      <CompaniesSlider
        title={companiesData.title}
        images={companiesData.images}
        basePath={companiesData.basePath}
        description={companiesData.description}
      />
      <VisionMission />
      <OurValues />
      <HowWeWork />
      <DevtriosExperts />
      <WorldwideSolution />
      <Testimonials list={TestimonialList.about_us} />
      <Cta data={ctaData} />
      <ContactInfoForm />
    </React.Fragment>
  );
}
