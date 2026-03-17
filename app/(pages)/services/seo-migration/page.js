import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import SeoServices from "@/app/(components)/seo-services/SeoServices";
import SeoApproach from "@/app/(components)/seo-approach/SeoApproach";
import TechnicalSeoFor from "@/app/(components)/technical-seo-for/TechnicalSeoFor";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import WhyChooseSeo from "@/app/(components)/why-choose-seo/WhyChooseSeo";
import Faqs from "@/app/(components)/faqs/Faqs";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";

export default function SeoMigration() {
  const bannerData = ServiceBannerList.seo_migration;
  const ctaData = CtaList.seo_migration;

  return (
    <React.Fragment>
      <Head>
        <title>SEO Migration Services | SEO Migration Without Traffic Loss | Devtrios</title>
        <meta
          name="description"
          content="SEO migration services to protect visibility, preserve rankings, and stabilise performance before, during, and after website migration. Zero guesswork."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/seo-migration/" />
        <link rel="shortcut icon" href="/assets/images/header/favicon.webp" type="image/x-icon" />
        <meta property="og:title" content="SEO Migration Services | SEO Migration Without Traffic Loss | Devtrios" />
        <meta
          property="og:description"
          content="SEO migration services to protect visibility, preserve rankings, and stabilise performance before, during, and after website migration."
        />
        <meta property="og:image" content="/assets/images/header/favicon.webp" />
        <meta name="twitter:title" content="SEO Migration Services | SEO Migration Without Traffic Loss | Devtrios" />
        <meta
          name="twitter:description"
          content="SEO migration services to protect visibility, preserve rankings, and stabilise performance before, during, and after website migration."
        />
        <meta name="twitter:image" content="/assets/images/header/favicon.webp" />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices sectionKey="seo_migration_services" />
      <SeoApproach sectionKey="seo_migration" />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor sectionKey="seo_migration" />
      <BlogsSlider />
      <WhyChooseSeo sectionKey="seo_migration" />
      <Cta data={ctaData} />
      <Faqs type="seo_migration" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
