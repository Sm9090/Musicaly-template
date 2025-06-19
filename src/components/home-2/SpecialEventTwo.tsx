"use client"
import past_event_data from '@/data/past-event-data';
import EventBgImg from '../../../public/assets/img/event/event-bg-1.webp'
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const PastEvents = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    return (
        <>
            <section className="ms-event2-area include__bg zindex-1 p-relative pt-140 pb-105"
                style={{ backgroundImage: `url(${EventBgImg.src})` }}
            >
                <div className="ms-overlay ms-overlay1 zindex--1"></div>
                <div className="container">
                    <div className="row justify-content-center mb-25 bdFadeUp">
                        <div className="col-xl-6">
                            <div className="ms-event2-top text-center">
                                <div className="ms-event2 mb-40">
                                    <button onClick={toggleOpen}
                                        className="ms-round2-btn popup-video"><i className="fa-sharp fa-solid fa-play"></i></button>
                                </div>
                                <div className="section__title-wrapper mb-40 bd-title-anim">
                                    <span className="section__subtitle">Past Events</span>
                                    <h2 className="section__title">Watch Our <span className="animated-underline active">
                                        Past Events</span> {" "}
                                        Videos
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bdFadeUp">
                        {past_event_data.slice(0, 4).map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="ms-event2-item mb-25">
                                    <h3 className="ms-event-title"><Link href="#">{item.title}</Link></h3>
                                    <p className="ms-event-text">{item.description}</p>
                                    <div className="ms-event-inner">
                                        <div className="ms-event-location">
                                            <Link href="#" target="_blank" tabIndex={0}>
                                                <i className="flaticon-pin"></i>{item.locationName}
                                            </Link>
                                        </div>
                                        <div className="ms-event-date">
                                            <span>{item.eventDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-30">
                        <div className="col-12">
                            <div className="ms-event-btn text-center">
                                <Link href="#" className="ms-border-btn">
                                    View All Past Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' isOpen={false} videoId='#' onClose={() => setIsOpen(false)} />
        </>
    );
};

export default PastEvents;