import React from "react";
import ContactBanner from "@/app/(components)/contact-banner/ContactBanner";
import bannerData from "@/app/(components)/contact-banner/ContactBannerList.json";

export default function GetaQuote() {
  const customBannerData = bannerData.get_a_quote;

  return (
    <React.Fragment>
      <ContactBanner
        title={customBannerData.title}
        description={customBannerData.description}
      />
    </React.Fragment>
  );
}
