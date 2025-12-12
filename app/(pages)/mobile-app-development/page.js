import React from 'react'
import CustomBanner from  "@/app/(components)/custom-banner/CustomBanner.js";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";

import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";

import AboutDevtrios from "@/app/(components)/about-devtrios/AboutDevtrios";
import AboutHomeList from "@/app/(components)/about-devtrios/AboutHomeList.json";


import InfoSection from '@/app/(components)/info-section/InfoSection';
import InfoSectionList from "@/app/(components)/info-section/InfoSection.json"


import Faqs from "@/app/(components)/faqs/Faqs";













const page = () => {
    
    const customBannerData = bannerData.mobile_app;
    const companiesData = CompaniesList.mobile_app;
    const infoSectionData = InfoSectionList.mobile_app;


  return (
    <React.Fragment>
        <CustomBanner
            title={customBannerData.title}
            description={customBannerData.description}
            buttons={customBannerData.buttons}
            background={customBannerData.background}
        />

        <CompaniesSlider
            title={companiesData.title}
            images={companiesData.images}
            basePath={companiesData.basePath}
            description={companiesData.description}
        />

        <AboutDevtrios
            title={AboutHomeList.title}
            description={AboutHomeList.description}
        />

        <InfoSection
            title={infoSectionData.title}
            description={infoSectionData.description}
            image={infoSectionData.image}
        />




    </React.Fragment>
  )
}

export default page