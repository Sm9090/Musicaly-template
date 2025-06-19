import React from 'react';
import BrandSectionOne from '../SliderElements/BrandSlider/BrandSectionOne';
import HeroOne from './HeroOne';
import TextScrollArea from '../SliderElements/TextScrollSlider/TextScrollArea';
import PopularAreaOne from '../SliderElements/PopularSlider/PopularAreaOne';
import WorkArea from './WorkArea';
import TrendingareaOne from './TrendingareaOne';
import FunctionBandsSectionOne from './FunctionBandsSectionOne';
import TestimonialSliderOne from '../SliderElements/TestimonialSlider/TestimonialSliderOne';
import LatestNewsOne from './LatestNewsOne';
import PartnerAreaSliderOne from '../SliderElements/PartnerAreaSlider/PartnerAreaSliderOne';
import CtaArea from './CtaArea';
import SpecialEventSliderOne from '../SliderElements/SpecialEventSlider/SpecialEventSliderOne';
import SpecialEventTwo from '../home-2/SpecialEventTwo';
import InterestingNews from './InterestingNews';

const HomeMainArea = () => {
    return (
        <>
            {/* <BrandSectionOne /> */}
            <HeroOne />
            {/* <TextScrollArea /> */}
            <TrendingareaOne />
            <PopularAreaOne />
            {/* <WorkArea /> */}
            <FunctionBandsSectionOne />
            {/* <SpecialEventSliderOne /> */}
            <SpecialEventTwo />
            {/* <TestimonialSliderOne /> */}
            <LatestNewsOne />
             <InterestingNews />
            {/* <LatestNewsOne />  */}

            {/* <PartnerAreaSliderOne /> */}
            {/* <CtaArea /> */}
        </> 
    );
};

export default HomeMainArea;