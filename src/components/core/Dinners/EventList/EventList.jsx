import { LUMA_API_KEY, LUMA_REGULAR_CALENDAR } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import AnimateButton from "../../AnimateButton";

async function getEvents() {
  const res = await fetch(`https://api.lu.ma/public/v1/calendar/list-events?after=${new Date().toISOString()}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-luma-api-key": LUMA_API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.entries;
}

export default async function EventList() {
  const events = await getEvents();
  const t = await getTranslations('Dinners');

  return (
    <div className="grid gap-4 pt-120 px-5 pb-60" id="event-list">
      {events.map(({ event }, i) => (
        <Fragment key={event.app_id}>
          {!(i % 2) ? (
            <div className="row mb-80 mb-sm-60">
              <div className="col-md-5 col-lg-4 offset-lg-1 mb-sm-20">
                <div className="overflow-hidden round-large">
                  <Image
                    src={event.cover_url}
                    width={656}
                    height={800}
                    alt={event.name}
                    className="wow scaleOutIn"
                  />
                </div>
              </div>
              <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                  !!
                  </div>
                  <p className="testimonials-6-text mb-20 mb-sm-10">{event.description.split(' ').slice(0, 30).join(' ')}...</p>
                  <footer>
                    <div className="testimonials-6-author">{event.name}</div>
                    <div className="testimonials-6-position">
                      {new Date(event.start_at).toLocaleString(undefined, {timeZone: 'Asia/Singapore' })}
                    </div>
                  </footer>
                  <Link
                    href={event.url}
                    className="btn btn-mod btn-medium btn-circle white mt-10"
                    data-btn-animate="y"
                    style={{ backgroundColor: '#FF6D1F' }}
                    target="_blank"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">{t('Cta')}</span>
                    </span>
                  </Link>
                </blockquote>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-1 order-md-last mb-sm-20">
                <div className="overflow-hidden round-large">
                  <Image
                    src={event.cover_url}
                    width={656}
                    height={800}
                    alt={event.name}
                    className="wow scaleOutIn"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                  !!
                  </div>
                  <p className="testimonials-6-text mb-20 mb-sm-10">{event.description.split(' ').slice(0, 30).join(' ')}...</p>
                  <footer>
                    <div className="testimonials-6-author">{event.name}</div>
                    <div className="testimonials-6-position">
                      {new Date(event.start_at).toLocaleString(undefined, {timeZone: 'Asia/Singapore' })}
                    </div>
                    <Link
                      href={event.url}
                      className="btn btn-mod btn-medium btn-circle white mt-10"
                      data-btn-animate="y"
                      style={{ backgroundColor: '#FF6D1F' }}
                      target="_blank"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">{t('Cta')}</span>
                      </span>
                    </Link>
                  </footer>
                </blockquote>
              </div>
            </div>
          )}
        </Fragment>
      ))}
      <div className="mt-40 d-flex flex-row justify-content-center">
        <Link
          href={LUMA_REGULAR_CALENDAR}
          target="_blank"
          className={`btn btn-mod btn-w btn-with-icon btn-circle`}
        >
          <span className="btn-icon color-1" style={{ backgroundColor: '#FF6D1F' }}>
            <i className="mi-link-alt" />
          </span>
          <span data-btn-animate="y">
            <AnimateButton text={t("More Events")} />
          </span>
        </Link>
      </div>
    </div>
  );
};
