import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import AiAutomationServices from "@/app/(components)/ai-automation-services/AiAutomationServices";
import AiAutomationServicesList from "@/app/(components)/ai-automation-services/AiAutomationServicesList.json";
import AiAutomationProcess from "@/app/(components)/ai-automation-process/AiAutomationProcess";
import AiAutomationProcessList from "@/app/(components)/ai-automation-process/AiAutomationProcessList.json";
import AiAutomationServiceFor from "@/app/(components)/ai-automation-service-for/AiAutomationServiceFor";
import AiAutomationServiceForList from "@/app/(components)/ai-automation-service-for/AiAutomationServiceForList.json";
import WhyChooseDevtriosAutomation from "@/app/(components)/why-choose-devtrios-automation/WhyChooseDevtriosAutomation";
import WhyChooseDevtriosAutomationList from "@/app/(components)/why-choose-devtrios-automation/WhyChooseDevtriosAutomationList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";


export default function GenerativeAI() {
  const bannerData = ServiceBannerList.generative_ai;
  const ctaData = CtaList.generative_ai;
  const servicesData = AiAutomationServicesList.generative_ai;
  const processData = AiAutomationProcessList.generative_ai;
  const serviceForData = AiAutomationServiceForList.generative_ai;
  const whyChooseData = WhyChooseDevtriosAutomationList.generative_ai;

  return (
    <React.Fragment>
      <Head>
        <title>
          Generative AI Development Services | Accuracy, Control, Real Impact | Devtrios
        </title>
        <meta
          name="description"
          content="Production-ready Generative AI systems built for accuracy, control, and real business impact. Custom solutions that integrate into your products, workflows, and data environments."
        />
        <link rel="canonical" href="https://devtrios.com/services/ai-automation/generative-ai/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Generative AI Development Services | Accuracy, Control, Real Impact | Devtrios" />
        <meta
          property="og:description"
          content="Production-ready Generative AI systems built for accuracy, control, and real business impact. Custom solutions that integrate into your products, workflows, and data environments."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Generative AI Development Services | Accuracy, Control, Real Impact | Devtrios" />
        <meta
          name="twitter:description"
          content="Production-ready Generative AI systems built for accuracy, control, and real business impact. Custom solutions that integrate into your products, workflows, and data environments."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <AiAutomationServices data={servicesData} />
      <AiAutomationProcess data={processData} />
      <CaseStudies type="generative_ai" />
      <AiAutomationServiceFor data={serviceForData} />
      <WhyChooseDevtriosAutomation data={whyChooseData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="generative_ai" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
