'use client';

import TypeWriter from '@/components/core/TypeWriter';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div
        className="container min-height-100vh d-flex align-items-center pt-100 pt-sm-120"
        style={{
          background:
            'url(/assets/images/serene/how-it-works-hero-2.svg) center no-repeat',
          margin: 0,
          minWidth: '100vw',
          backgroundSize: 'cover',
        }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
        {/* Home Section Content */}
        <div className="container position-relative">
          <div className="home-content text-start">
            <div className="row">
              {/* Home Section Text */}
              <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0 d-flex align-items-center mb-md-60 mb-sm-30">
                <div className="w-100 text-center text-lg-start">
                  <h2
                    className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                    data-wow-duration="1.2s"
                  >
                    Serene Coffee Club
                  </h2>
                  <h1 className="hs-title-13 mb-40 mb-sm-20 wow fadeInUp">
                    Meet new people over coffee
                  </h1>
                  <p
                    className="section-text wow fadeInUp mb-0"
                    data-wow-delay="0.2s"
                  >
                    No dating or networking
                  </p>
                  <p
                    className="section-text mb-50 wow fadeInUp fst-italic serif"
                    data-wow-delay="0.2s"
                  >
                    Just coffee
                  </p>
                  <div
                    className="local-scroll wow fadeInUp wch-unset"
                    data-wow-delay="0.5s"
                    data-wow-offset={0}
                  >
                    <a
                      href="/"
                      className="btn btn-mod btn-large btn-circle"
                      data-btn-animate="y"
                      style={{ backgroundColor: '#FF6D1F' }}
                      target="_blank"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">Join waitlist</span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          Join waitlist
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* End Home Section Text */}
              {/* Images */}
              <div className="col-lg-6 d-flex align-items-center">
                <div
                  className="w-100 ps-xl-3 wow fadeInLeft"
                  data-wow-delay="0.15s"
                >
                  <div className="composition-4">
                    <div className="composition-4-decoration-1 opacity-65">
                      <Image
                        width="148"
                        height="148"
                        className="svg-shape"
                        src="/assets/images/serene/coffee/decoration-3.svg"
                        alt=""
                      />
                    </div>
                    <div className="composition-4-image-1">
                      <div className="composition-4-image-1-inner">
                        <Image
                          width={850}
                          height={834}
                          src="/assets/images/serene/coffee/hs-image-1.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div className="composition-4-image-2">
                      <div className="composition-4-image-2-inner">
                        <Image
                          width={570}
                          height={598}
                          src="/assets/images/serene/coffee/coffee-cup.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Images */}
            </div>
          </div>
          {/* End Home Section Content */}
        </div>
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
    </>
  );
}
