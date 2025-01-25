import Image from 'next/image';

const featuresListData = [
  { text: 'Agency Website' },
  { text: 'Personal Website' },
  { text: 'Landing Page' },
  { text: 'Portfolio and Gallery' },
];

export default function HowItWorks2() {
  return (
    <section className="pt-30">
      <div id="paddingRightContainer" className="container" />
      <div className="row g-0">
        <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
          <div
            id="paddingRight"
            className={`split-column-right bg-dark-1 light-content position-relative d-flex align-items-center`}
            data-rellax-y=""
            data-rellax-speed="0.5"
            data-rellax-percentage="0.5"
          >
            {/* Decorative Dots */}
            <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
              <Image
                width={192}
                height={222}
                src="/assets/images/serene/coffee/decoration.svg"
                alt=""
              />
            </div>
            {/* End Decorative Dots */}
            <div>
              <h2 className="section-title mb-80">
                You will have 24 hours to schedule the coffee meet with that
                person.
              </h2>
              <p className="mb-50 lead fst-italic serif mb-80 pe-2">
                If not, the possibility expires, and you get a new one in a
                week.
              </p>
              <p className="mb-50 lead">
                Once you schedule the coffee, we reveal the full profile of the
                person and conversation starters.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
          <div className="split-image-left">
            <Image
              width={1100}
              height={930}
              src="/assets/images/serene/coffee/coffee-sign.jpg"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
