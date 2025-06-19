import Link from 'next/link';
import React from 'react';
import FooterLogo from '../../../public/assets/img/logo/logo.png';
import FooterBg from '../../../public/assets/img/bg/sound-bg.png';
import Image from 'next/image';
import FooterSubscribe from './FooterSubscribe';

const FooterOne = () => {
    return (
        <>
            <footer>
                <div className="ms-footer-bg ms-footer-overlay zindex-1 include__bg pt-120"
                    style={{ backgroundImage: `url(${FooterBg.src})` }}>
                    <div className="ms-footer-top pt-130">
                        <div className="container">
                            <div className="ms-footer-border pb-10">
                                <div className="row">
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Local Band Group</h3>
                                            <ul>
                                                <li><Link href="#">The Tricks</Link></li>
                                                <li><Link href="#">Sound City</Link></li>
                                                <li><Link href="#">Big Teaser</Link></li>
                                                <li><Link href="#">The New Tones</Link></li>
                                                <li><Link href="#">Halos Music</Link></li>
                                                <li><Link href="#">Soho Soul</Link></li>
                                                <li><Link href="#">Atlantic</Link></li>
                                                <li><Link href="#">The Fiction</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Trending Genres</h3>
                                            <ul>
                                                <li><Link href="#">Wedding Bands</Link></li>
                                                <li><Link href="#">Jazz & Swing</Link></li>
                                                <li><Link href="#">Musician</Link></li>
                                                <li><Link href="#">Classical Musician</Link></li>
                                                <li><Link href="#">Corporate Party</Link></li>
                                                <li><Link href="#">Premiere Party Band</Link></li>
                                                <li><Link href="#">DJ Songs</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Country We Serve</h3>
                                            <ul>
                                                <li><Link href="#">United State</Link></li>
                                                <li><Link href="#">Canada</Link></li>
                                                <li><Link href="#">Australia</Link></li>
                                                <li><Link href="#">China</Link></li>
                                                <li><Link href="#">South Korea</Link></li>
                                                <li><Link href="#">Japan</Link></li>
                                                <li><Link href="#">Singapore</Link></li>
                                                <li><Link href="#">Hong Kong</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Company</h3>
                                            <ul>
                                                <li><Link href="#">About us</Link></li>
                                                <li><Link href="#">Contact us</Link></li>
                                                <li><Link href="#">Terms & Policy</Link></li>
                                                <li><Link href="#">Help & Support</Link></li>
                                                <li><Link href="#">Faq</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-5 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Subscribe Now</h3>
                                            <FooterSubscribe />
                                            <div className="ms-footer-warning mb-25">
                                                <p>You Don’t Get Any Spam Message !</p>
                                            </div>
                                            <div className="ms-footer-social">
                                                <Link href="https://www.linkedin.com/" title="Instagram" target="_blank">IN</Link>
                                                <Link href="https://twitter.com/" title="Twitter" target="_blank">TW</Link>
                                                <Link href="https://www.facebook.com/" title="Facebook" target="_blank">FB</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-footer-bottom">
                        <div className="container">
                            <div
                                className="ms-footer-bottom-wrap align-items-center d-flex flex-wrap justify-content-between pt-35 pb-20">
                                <div className="ms-logo mb-15">
                                    <Link href="#">
                                        <Image style={{ width: '100%', height: "auto" }} src={FooterLogo}
                                            alt="logo" />
                                    </Link>
                                </div>
                                <div className="ms-footer-copy">
                                    <p>© Musiqcue 2025, All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterOne;