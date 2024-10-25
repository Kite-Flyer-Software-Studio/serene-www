import Link from 'next/link';

export default function HowSereneWorksCta({ localHref }) {
  return (
    <div className="row">
      <div className="text-center local-scroll">
        <Link
          href={`${localHref}/how-it-works`}
          className="link-hover-anim ms-2 ms-sm-5 me-2"
          data-link-animate="y"
        >
          <span className="link-strong link-strong-unhovered">
            See how Serene Dinner works
            <i className="mi-arrow-right size-24" aria-hidden="true"></i>
          </span>
          <span className="link-strong link-strong-hovered" aria-hidden="true">
            See how Serene Dinner works
            <i className="mi-arrow-right size-24" aria-hidden="true"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}
