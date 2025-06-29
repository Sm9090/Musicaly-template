"use client"
import  interesting_news_data  from '@/data/interesting-news-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InterestingNews = () => {
    return (
        <>
            <section className="ms-news-area pt-130 pb-90">
                <div className="container">
                    <div className="row align-items-end mb-25 bdFadeUp">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper mb-40 bd-title-anim">
                                <span className="section__subtitle">Entertainment Buzz</span>
                                <h2 className="section__title">Interesting <span className="animated-underline active">
                                    Music Stories</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-news-btn d-flex justify-content-lg-end mb-40">
                                <Link className="border__btn" href="#">View All Stories</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row bdFadeUp">
                        {interesting_news_data.slice(0, 3).map((item) => (
                            <div className="col-xl-4 col-md-6" key={item.id}>
                                <div className="ms-news-item p-relative zindex-1 mb-40">
                                    <div className="ms-news-overlay p-absolute"></div>
                                    <Link className="ms-news4-cat" href="#">
                                        {item.category}
                                    </Link>
                                    <div className="ms-news-thumb w-img">
                                        <Link href="#">
                                            <Image 
                                                loader={imageLoader} 
                                                placeholder="blur" 
                                                loading='lazy' 
                                                width={370}
                                                height={250}
                                                src={item.image}
                                                alt={item.title} 
                                            />
                                        </Link>
                                    </div>
                                    <div className="ms-news-content ms-news-position p-absolute">
                                        <h3 className="ms-news-title mb-15">
                                            <Link href="#">{item.title}</Link>
                                        </h3>
                                        <p className="ms-news-text mb-25">{item.description}</p>
                                        <div className="ms-news-meta d-inline-block">
                                            <span>{item.date}</span>
                                            <span><Link href="#">{item.comment} Comments</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default InterestingNews;