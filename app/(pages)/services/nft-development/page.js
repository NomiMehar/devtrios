import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Faqs from "@/app/(components)/faqs/Faqs";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlockchainDevelopmentServices from "@/app/(components)/blockchain-development-services/BlockchainDevelopmentServices";
import BlockchainDevelopmentServicesList from "@/app/(components)/blockchain-development-services/BlockchainDevelopmentServicesList.json";
import BlockchainDevelopmentProcess from "@/app/(components)/blockchain-development-process/BlockchainDevelopmentProcess";
import BlockchainDevelopmentProcessList from "@/app/(components)/blockchain-development-process/BlockchainDevelopmentProcessList.json";
import BlockchainDevelopmentServicesFor from "@/app/(components)/blockchain-development-services-for/BlockchainDevelopmentServicesFor";
import BlockchainDevelopmentServicesForList from "@/app/(components)/blockchain-development-services-for/BlockchainDevelopmentServicesFor.json";
import WhyChooseBlockchain from "@/app/(components)/why-choose-blockchain/WhyChooseBlockchain";
import WhyChooseBlockchainList from "@/app/(components)/why-choose-blockchain/WhyChooseBlockchainList.json";

export default function NftDevelopment() {
  const bannerData = ServiceBannerList.nft_development;
  const blockchainDevelopmentServicesData = BlockchainDevelopmentServicesList.nft_development;
  const ctaData = CtaList.nft_development;
  const blockchainDevelopmentProcessData = BlockchainDevelopmentProcessList.nft_development;
  const blockchainDevelopmentServicesForData = BlockchainDevelopmentServicesForList.nft_development;
  const whyChooseBlockchainData = WhyChooseBlockchainList.nft_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          NFT Development Services | Secure, Scalable NFT Platforms &amp; Marketplaces | Devtrios
        </title>
        <meta
          name="description"
          content="We design and develop NFT platforms that go beyond collectibles. Secure ownership, scalable infrastructure, and practical use cases across marketplaces, gaming, memberships, and enterprise systems."
        />
        <link rel="canonical" href="https://devtrios.com/services/blockchain-development/nft-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="NFT Development Services | Secure, Scalable NFT Platforms | Devtrios" />
        <meta
          property="og:description"
          content="We design and develop NFT platforms that go beyond collectibles. Secure ownership, scalable infrastructure, and practical use cases."
        />
        <meta property="og:image" content="/assets/images/header/favicon.webp" />
        <meta name="twitter:title" content="NFT Development Services | Secure, Scalable NFT Platforms | Devtrios" />
        <meta
          name="twitter:description"
          content="We design and develop NFT platforms that go beyond collectibles. Secure ownership, scalable infrastructure, and practical use cases."
        />
        <meta name="twitter:image" content="/assets/images/header/favicon.webp" />
      </Head>
      <ServiceBanner data={bannerData} />
      <BlockchainDevelopmentServices data={blockchainDevelopmentServicesData} />
      <BlockchainDevelopmentProcess data={blockchainDevelopmentProcessData} />
      <CaseStudies type="nft_development" />
      <BlockchainDevelopmentServicesFor data={blockchainDevelopmentServicesForData} />
      <WhyChooseBlockchain data={whyChooseBlockchainData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="nft_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
