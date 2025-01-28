export default function CoffeeClub() {
  return (
    <section
      className="page-section bg-scroll light-content"
      style={{
        backgroundImage: 'url(/assets/images/demo-corporate/section-bg-3.jpg)',
      }}
    >
      {/* Desktop Overlay */}
      <div className="bg-overlay bg-gradient-primary-alpha-2 d-none d-md-block" />
      {/* End Desktop Overlay */}
      {/* Mobile Overlay */}
      <div className="bg-overlay bg-primary-1 opacity-09 d-md-none" />
      {/* End Mobile Overlay */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
            <h2 className="section-title mb-40 mb-xs-30">
              Marketing <span className="mark-decoration-5">Jumpstart</span> for
              Your Business
            </h2>
            <p className="section-descr mb-50 mb-sm-40">
              The marketing audit is generally conducted by a third person, not
              a member of an organization.
            </p>
            <div className="local-scroll mb-70 mb-sm-50">
              {onePage ? (
                <>
                  {' '}
                  <a
                    href="#contact"
                    className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                  >
                    <span>Get a Consultation</span>
                  </a>
                </>
              ) : (
                <>
                  {' '}
                  <Link
                    href={`/corporate-contact${dark ? '-dark' : ''}`}
                    className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                  >
                    <span>Get a Consultation</span>
                  </Link>
                </>
              )}
            </div>
            {/* Features List */}
            <Cta2 />
            {/* End Features List */}
          </div>
        </div>
      </div>
    </section>
  );
}
