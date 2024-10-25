import Image from 'next/image';

export default function SereneMoments({ locale }) {
  return (
    <div
      className="page-section scrollSpysection pt-0 pb-0 mb-100 mb-md-60"
      id="established"
    >
      <div className="position-relative text-center pt-140 pt-sm-100 pb-140 pb-sm-100">
        <div className="position-relative z-index-1">
          <h2 className="hs-title-5 font-alt overflow-hidden mb-60 mb-sm-40">
            <span className="d-inline-block wow fadeRotateIn">
              {locale('about.establish')}
            </span>
            <span className="d-inline-block wow fadeRotateIn">
              {locale('about.since')}
            </span>
          </h2>
          <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
              <p className="section-descr mb-0">{locale('about.subSlogan')}</p>
            </div>
          </div>
        </div>
        <div className="section-image-behind" style={{ opacity: '0.5' }}>
          <Image
            src="/assets/images/serene/root-friendship.png"
            loading="lazy"
            width={820}
            height={1270}
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}
