"use client"
import popular_band_fuction_data from '@/data/popular-band-function-data';
import GetRatting from '@/hooks/GetRating';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FunctionBandsSectionOne = () => {

    const musicLabelsData = [
        {
            id: 1,
            image: popular_band_fuction_data[0].image,
            title: "Atlantic Records",
            subTitle: "Major Record Label",
            locationName: "New York",
            rating: 5,
            genres: ["Pop", "Rock", "R&B"]
        },
        {
            id: 2,
            image: popular_band_fuction_data[0].image,
            title: "Universal Music",
            subTitle: "Global Music Corporation",
            locationName: "Los Angeles",
            rating: 5,
            genres: ["Hip-Hop", "Electronic"]
        },
        {
            id: 3,
            image: popular_band_fuction_data[0].image,
            title: "Sony Music",
            subTitle: "Entertainment Company",
            locationName: "Nashville",
            rating: 4,
            genres: ["Country", "Pop"]
        },
        {
            id: 4,
            image: popular_band_fuction_data[0].image,
            title: "Warner Music",
            subTitle: "Music Entertainment",
            locationName: "London",
            rating: 5,
            genres: ["Rock", "Alternative"]
        },
        {
            id: 5,
            image: popular_band_fuction_data[0].image,
            title: "EMI Records",
            subTitle: "Record Label",
            locationName: "Chicago",
            rating: 4,
            genres: ["Jazz", "Blues"]
        },
        {
            id: 6,
            image: popular_band_fuction_data[0].image,
            title: "Capitol Records",
            subTitle: "Music Label",
            locationName: "Miami",
            rating: 5,
            genres: ["Latin", "Pop"]
        },
        {
            id: 7,
            image: popular_band_fuction_data[0].image,
            title: "Def Jam Records",
            subTitle: "Hip-Hop Label",
            locationName: "Atlanta",
            rating: 5,
            genres: ["Hip-Hop", "Rap"]
        },
        {
            id: 8,
            image: popular_band_fuction_data[0].image,
            title: "Interscope Records",
            subTitle: "Entertainment Label",
            locationName: "California",
            rating: 4,
            genres: ["Pop", "Electronic"]
        },
        {
            id: 9,
            image: popular_band_fuction_data[0].image,
            title: "Columbia Records",
            subTitle: "Music Corporation",
            locationName: "New York",
            rating: 5,
            genres: ["Rock", "Pop"]
        },
        {
            id: 10,
            image: popular_band_fuction_data[0].image,
            title: "RCA Records",
            subTitle: "Record Company",
            locationName: "Nashville",
            rating: 4,
            genres: ["Country", "Rock"]
        },
        {
            id: 11,
            image: popular_band_fuction_data[0].image,
            title: "Republic Records",
            subTitle: "Music Label",
            locationName: "Los Angeles",
            rating: 5,
            genres: ["Pop", "Hip-Hop"]
        },
        {
            id: 12,
            image: popular_band_fuction_data[0].image,
            title: "Island Records",
            subTitle: "Record Label",
            locationName: "London",
            rating: 4,
            genres: ["Reggae", "Pop"]
        }
    ];
    return (
        <>
            <section className="ms-fun-brand ms-bg-2 pb-130 pt-125">
                <div className="container">
                    <div className="row justify-content-center bdFadeUp">
                        <div className="col-xl-7">
                            <div className="section__title-wrapper mb-65 text-center bd-title-anim">
                                <span className="section__subtitle">Music Industry</span>
                                <h2 className="section__title">
                                    featured <span className="animated-underline active">music labels</span>
                                    & business templates
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="ms-fun-brand-wrap bdFadeUp">
                        {
                            musicLabelsData.map((item) => (
                                <div className="ms-fun-brand-item ms-fun-border" key={item.id}>
                                    <div className="ms-fun-brand-top mb-20">
                                        <div className="ms-fun-brand-thumb">
                                            <Link href="#">
                                                <Image loader={imageLoader} placeholder="blur" loading='lazy' width={70} height={70} style={{ width: '100%', height: "auto" }}
                                                    src={item.image} alt="function brand" /></Link>
                                        </div>
                                        <div className="ms-fun-brand-content">
                                            <h3 className="ms-fun-brand-title">
                                                <Link href="#">{item.title}</Link>
                                            </h3>
                                            <span className="ms-fun-brand-subtitle">{item.subTitle}</span>
                                        </div>
                                    </div>
                                    <div className="ms-fun-brand-bottom">
                                        <div className="ms-fun-brand-location">
                                            <Link href="#" target="_blank"> <i
                                                className="flaticon-pin"></i>{item.locationName}</Link>
                                        </div>
                                        <div className="ms-fun-brand-rating">
                                            <GetRatting
                                                averageRating={item.rating}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default FunctionBandsSectionOne;