import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import Faqs from "@/app/(components)/faqs/Faqs";
import DevelopmentServices from "@/app/(components)/development-services/DevelopmentServices";
import DevelopmentProcess from "@/app/(components)/development-process/DevelopmentProcess";
import DevelopmentProcessList from "@/app/(components)/development-process/DevelopmentProcessData.json";
import ProcessShowcase from "@/app/(components)/process-showcase/ProcessShowcase";
import ProcessShowcaseList from "@/app/(components)/process-showcase/ProcessShowcaseList.json";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";

export default function EcommerceWebsiteDevelopment() {
  const serviceBannerData = ServiceBannerList.ecommerce_website_development;
  const ctaData = CtaList.ecommerce_website_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          E-Commerce Website Development Services | Scalable, High-Performance Online Stores
        </title>
        <meta
          name="description"
          content="Devtrios delivers scalable, high-performance e-commerce website development services focused on speed, usability, and conversion. Launch, migrate, or rebuild an online store built to grow."
        />
        <link
          rel="canonical"
          href="https://devtrios.com/services/website-development/ecommerce-website-development/"
        />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="E-Commerce Website Development Services | Scalable, High-Performance Online Stores"
        />
        <meta
          property="og:description"
          content="Devtrios delivers scalable, high-performance e-commerce website development services focused on speed, usability, and conversion. Launch, migrate, or rebuild an online store built to grow."
        />
        <meta property="og:image" content="/assets/images/header/favicon.webp" />
        <meta
          name="twitter:title"
          content="E-Commerce Website Development Services | Scalable, High-Performance Online Stores"
        />
        <meta
          name="twitter:description"
          content="Devtrios delivers scalable, high-performance e-commerce website development services focused on speed, usability, and conversion. Launch, migrate, or rebuild an online store built to grow."
        />
        <meta name="twitter:image" content="/assets/images/header/favicon.webp" />
      </Head>

      <ServiceBanner data={serviceBannerData} />
      <DevelopmentServices type="ecommerce_website_development" />
      <DevelopmentProcess
        appName="Our E-Commerce Development Process"
        description="Our e-commerce development process is designed to reduce risk and support sustainable growth."
        classes="ios_development_process"
        DevelopmentProcessList={DevelopmentProcessList.ecommerce_website_development}
      />
      <CaseStudies type="ecommerce_website_development" />
      <ProcessShowcase data={ProcessShowcaseList.ecommerce_website_development} />
      <Testimonials list={TestimonialList.ecommerce_website_development} />
      <BlogsSlider />
      <Cta data={ctaData} />
      <Faqs type="ecommerce_website_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}

