import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import ServiceList from "@/app/(components)/service-list/ServiceList";
import ServiceListList from "@/app/(components)/service-list/ServiceListList.json";
import WhyChoose from "@/app/(components)/why-choose/WhyChoose";
import WhyChooseList from "@/app/(components)/why-choose/WhyChooseList.json";
import ProcessSection from "@/app/(components)/process-section/ProcessSection";
import ProcessSectionList from "@/app/(components)/process-section/ProcessSectionList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import WebsiteTechStack from "@/app/(components)/website-tech-stack/WebsiteTechStack";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise"
import WhoWeBuildFor from "@/app/(components)/who-we-build-for/WhoWeBuildFor";
import WhoWeBuildForList from "@/app/(components)/who-we-build-for/WhoWeBuildForList.json";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";

export default function websiteDevelopment() {
  const bannerData = ServiceBannerList.website_development;
  const serviceListData = ServiceListList.website_development;
  const whyChooseData = WhyChooseList.website_development;
  const processData = ProcessSectionList.website_development;
  const whoWeBuildForData = WhoWeBuildForList.website_development;
  const ctaData = CtaList.website_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          Website Development Services | High-Performance Websites That Convert
        </title>
        <meta
          name="description"
          content="We design and develop fast, secure, and conversion-focused websites that help businesses attract traffic, engage users, and turn visitors into customers."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Website Development Services | High-Performance Websites That Convert" />
        <meta
          property="og:description"
          content="We design and develop fast, secure, and conversion-focused websites that help businesses attract traffic, engage users, and turn visitors into customers."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Website Development Services | High-Performance Websites That Convert" />
        <meta
          name="twitter:description"
          content="We design and develop fast, secure, and conversion-focused websites that help businesses attract traffic, engage users, and turn visitors into customers."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <WhyChoose data={whyChooseData} />
      <ProcessSection data={processData} />
      <CaseStudies type="website_development" />
      <WebsiteTechStack />
      <OurExpertise />
      <WhoWeBuildFor data={whoWeBuildForData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="website_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
