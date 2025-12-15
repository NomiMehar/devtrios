import React from "react";
import ContactBanner from "@/app/(components)/contact-banner/ContactBanner";
import bannerData from "@/app/(components)/contact-banner/ContactBannerList.json";
import QuoteInfoForm from "@/app/(components)/quote-info-form/QuoteInfoForm";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";

export default function GetaQuote() {
  const customBannerData = bannerData.get_a_quote;

  return (
    <React.Fragment>
      <ContactBanner
        title={customBannerData.title}
        description={customBannerData.description}
      />
      <QuoteInfoForm />
      <Testimonials list={TestimonialList.about_us} padding_bottom={true} />
    </React.Fragment>
  );
}
