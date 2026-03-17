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

export default function SeoAudit() {
  const bannerData = ServiceBannerList.seo_audit;
  const ctaData = CtaList.seo_audit;

  return (
    <React.Fragment>
      <Head>
        <title>
          SEO Audit Services | SEO Audits That Show You What's Holding Your Rankings Back | Devtrios
        </title>
        <meta
          name="description"
          content="SEO audit services that go beyond surface-level checks. We analyse technical foundations, content, search intent, authority, and competitive gaps to give you a clear, prioritised roadmap."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/seo-audit/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="SEO Audit Services | SEO Audits That Show You What's Holding Your Rankings Back | Devtrios"
        />
        <meta
          property="og:description"
          content="SEO audit services that go beyond surface-level checks. We analyse technical foundations, content, search intent, authority, and competitive gaps to give you a clear, prioritised roadmap."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="SEO Audit Services | SEO Audits That Show You What's Holding Your Rankings Back | Devtrios"
        />
        <meta
          name="twitter:description"
          content="SEO audit services that go beyond surface-level checks. We analyse technical foundations, content, search intent, authority, and competitive gaps to give you a clear, prioritised roadmap."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices sectionKey="seo_audit_services" />
      <SeoApproach sectionKey="seo_audit" />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor sectionKey="seo_audit" />
      <BlogsSlider />
      <WhyChooseSeo sectionKey="seo_audit" />
      <Cta data={ctaData} />
      <Faqs type="seo_audit" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
