import { useTranslations } from 'next-intl';

export default function Cta() {
  return (
    <section className="page-section">
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12 col-lg-12 wow fadeInUp">
            <h2 className="hs-title-13 m-0 d-flex flex-column mb-40">
              <span>Meet new interesting people</span>
              <span className="fst-italic serif">over coffee</span>
            </h2>

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
      </div>
    </section>
  );
}
