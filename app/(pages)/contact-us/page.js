import React from "react";
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
      <ContactBanner
        title={customBannerData.title}
        description={customBannerData.description}
        buttons={customBannerData.buttons}
        background={customBannerData.background}
      />
      <ContactInfoForm noPadding={true} />
      <Faqs type="home" noPadding={true} />
      <OurClients />
      <Cta data={ctaData} />
      <Awards noPadding={false} />
    </React.Fragment>
  );
}
