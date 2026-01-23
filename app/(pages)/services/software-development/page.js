import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import ServiceList from "@/app/(components)/service-list/ServiceList";
import ServiceListList from "@/app/(components)/service-list/ServiceListList.json";
import WhyChoose from "@/app/(components)/why-choose/WhyChoose";
import WhyChooseList from "@/app/(components)/why-choose/WhyChooseList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import WhoWeBuildFor from "@/app/(components)/who-we-build-for/WhoWeBuildFor";
import WhoWeBuildForList from "@/app/(components)/who-we-build-for/WhoWeBuildForList.json";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import WebsiteTechStack from "@/app/(components)/website-tech-stack/WebsiteTechStack";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise";

export default function SoftwareDevelopment() {
  const bannerData = ServiceBannerList.software_development;
  const serviceListData = ServiceListList.software_development;
  const whyChooseData = WhyChooseList.software_development;
  const whoWeBuildForData = WhoWeBuildForList.software_development;
  const ctaData = CtaList.software_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          Software Development Services | Scalable, High-Performance Solutions
        </title>
        <meta
          name="description"
          content="Custom software development services built to scale, secure, and perform reliably. From web-based platforms to sophisticated SaaS products, we create solutions that streamline your business and improve operational efficiency."
        />
        <link rel="canonical" href="https://devtrios.com/services/software-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Software Development Services | Scalable, High-Performance Solutions" />
        <meta
          property="og:description"
          content="Custom software development services built to scale, secure, and perform reliably. From web-based platforms to sophisticated SaaS products, we create solutions that streamline your business and improve operational efficiency."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Software Development Services | Scalable, High-Performance Solutions" />
        <meta
          name="twitter:description"
          content="Custom software development services built to scale, secure, and perform reliably. From web-based platforms to sophisticated SaaS products, we create solutions that streamline your business and improve operational efficiency."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <WhyChoose data={whyChooseData} />
      <CaseStudies type="software_development" />
      <WebsiteTechStack type="software_development" />
      <OurExpertise />
      <WhoWeBuildFor data={whoWeBuildForData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="software_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
