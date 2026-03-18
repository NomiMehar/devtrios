import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import ServiceList from "@/app/(components)/service-list/ServiceList";
import ServiceListList from "@/app/(components)/service-list/ServiceListList.json";
import ProcessSection from "@/app/(components)/process-section/ProcessSection";
import ProcessSectionList from "@/app/(components)/process-section/ProcessSectionList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise";
import WebsiteTechStack from "@/app/(components)/website-tech-stack/WebsiteTechStack";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";


export default function BlockchainDevelopment() {
  const bannerData = ServiceBannerList.blockchain_development;
  const serviceListData = ServiceListList.blockchain_development;
  const ctaData = CtaList.blockchain_development;
  const processData = ProcessSectionList.blockchain_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          Blockchain Development Services | Secure, Scalable, Real-World Products | Devtrios
        </title>
        <meta
          name="description"
          content="Secure, scalable blockchain development services for businesses that need real-world applications. We build decentralised systems, smart contracts, and Web3 platforms that are production-ready and auditable."
        />
        <link rel="canonical" href="https://devtrios.com/services/blockchain-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Blockchain Development Services | Secure, Scalable, Real-World Products | Devtrios" />
        <meta
          property="og:description"
          content="Secure, scalable blockchain development services for businesses that need real-world applications. We build decentralised systems, smart contracts, and Web3 platforms that are production-ready and auditable."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Blockchain Development Services | Secure, Scalable, Real-World Products | Devtrios" />
        <meta
          name="twitter:description"
          content="Secure, scalable blockchain development services for businesses that need real-world applications. We build decentralised systems, smart contracts, and Web3 platforms that are production-ready and auditable."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <CaseStudies type="blockchain_development" />
      <ProcessSection data={processData} />
      <OurExpertise />
      <WebsiteTechStack type="blockchain_development" />
      <Testimonials list={TestimonialList.blockchain_development} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="blockchain_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
