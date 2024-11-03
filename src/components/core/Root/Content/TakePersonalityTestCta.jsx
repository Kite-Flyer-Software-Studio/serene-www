import Link from 'next/link';

export default function TakePersonalityTestCta({
  typeformWaitlistUrl,
  locale,
}) {
  return (
    <div className="row mb-100 mb-md-60">
      <div className="text-center local-scroll">
        <Link
          href={`${typeformWaitlistUrl}?utm_content=why-serene`}
          className="btn btn-mod btn-large btn-border-w-light btn-circle white"
          data-btn-animate="y"
          target='_blank'
        >
          <span className="btn-animate-y">
            <span className="btn-animate-y-1">{locale('about.Cta')}</span>
            <span className="btn-animate-y-2" aria-hidden="true">
              {locale('about.Cta')}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
