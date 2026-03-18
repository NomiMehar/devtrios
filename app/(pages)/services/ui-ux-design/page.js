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

export default function UiUxDesign() {
  const bannerData = ServiceBannerList.ui_ux_design;
  const serviceListData = ServiceListList.ui_ux_design;
  const ctaData = CtaList.ui_ux_design;
  const processData = ProcessSectionList.ui_ux_design;

  return (
    <React.Fragment>
      <Head>
        <title>
          UI &amp; UX Design Services | Interfaces That Convert and Scale
        </title>
        <meta
          name="description"
          content="UI & UX design services focused on clarity, usability, and outcomes. We design digital experiences that reduce friction, support conversions, and align with real user behaviour and business goals."
        />
        <link rel="canonical" href="https://devtrios.com/services/ui-ux-design/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="UI & UX Design Services | Interfaces That Convert and Scale"
        />
        <meta
          property="og:description"
          content="UI & UX design services focused on clarity, usability, and outcomes. We design digital experiences that reduce friction, support conversions, and align with real user behaviour and business goals."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="UI & UX Design Services | Interfaces That Convert and Scale"
        />
        <meta
          name="twitter:description"
          content="UI & UX design services focused on clarity, usability, and outcomes. We design digital experiences that reduce friction, support conversions, and align with real user behaviour and business goals."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <CaseStudies type="ui_ux_design" />
      <ProcessSection data={processData} />
      <OurExpertise />
      <WebsiteTechStack type="ui_ux_design" />
      <Testimonials list={TestimonialList.ui_ux_design} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ui_ux_design" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}

