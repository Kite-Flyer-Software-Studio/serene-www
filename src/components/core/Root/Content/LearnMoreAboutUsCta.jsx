import Link from 'next/link';
import Image from 'next/image';

export default function LearnMoreAboutUsCta({ localHref }) {
  return (
    <div className="col-md-10 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
      <div
        className="decoration-2 d-none d-md-block"
        data-rellax-y=""
        data-rellax-speed="0.7"
        data-rellax-percentage="-0.2"
      >
        <Image
          width="103"
          height="223"
          src="/assets/images/common/decoration-2.svg"
          alt=""
        />
      </div>

      <Link
        href={`${localHref}/about`}
        className="link-hover-anim underline align-middle"
        data-link-animate="y"
      >
        <span className="link-strong link-strong-unhovered">
          Learn more about us
          <i className="mi-arrow-right size-18" aria-hidden="true"></i>
        </span>
        <span className="link-strong link-strong-hovered" aria-hidden="true">
          Learn more about us
          <i className="mi-arrow-right size-18" aria-hidden="true"></i>
        </span>
      </Link>
    </div>
  );
}
