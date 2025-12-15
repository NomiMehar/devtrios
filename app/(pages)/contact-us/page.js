import React from "react";
import Head from "next/head";
import ContactBanner from "@/app/(components)/contact-banner/ContactBanner";
import bannerData from "@/app/(components)/contact-banner/ContactBannerList.json";
import ContactInfoForm from "@/app/(components)/contact-info-form/ContactInfoForm";
import Faqs from "@/app/(components)/faqs/Faqs";
import OurClients from "@/app/(components)/our-clients/OurClients";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import Awards from "@/app/(components)/awards/Awards";
export default function ContactUs() {
  const customBannerData = bannerData.conatct_us;
  const ctaData = CtaList.contact_us;

  return (
    <React.Fragment>
      <Head>
        <title>Contact Devtrios | Proven London Digital Agency</title>
        <meta
          name="description"
          content="Contact Devtrios today a trusted London digital agency delivering powerful web, app, software, and UI/UX solutions to help your business grow."
        />
        <link rel="canonical" href="https://devtrios.com/contact-us/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Devtrios" />
        <meta
          property="og:description"
          content="Contact Devtrios today a trusted London digital agency delivering powerful web, app, software, and UI/UX solutions to help your business grow."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Devtrios" />
        <meta
          name="twitter:description"
          content="Contact Devtrios today a trusted London digital agency delivering powerful web, app, software, and UI/UX solutions to help your business grow."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ContactBanner
        title={customBannerData.title}
        description={customBannerData.description}
        buttons={customBannerData.buttons}
      />
      <ContactInfoForm noPadding={true} />
      <Faqs type="home" noPadding={true} />
      <OurClients />
      <Cta data={ctaData} />
      <Awards noPadding={false} />
    </React.Fragment>
  );
}
