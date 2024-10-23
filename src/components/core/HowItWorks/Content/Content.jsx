import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import useTypeformWaitlistUrl from '@/hooks/useTypeformWaitlistUrl';

export default function Content() {
  const t = useTranslations('HowItWorks');
  const typeformWaitlistUrl = useTypeformWaitlistUrl();

  const stepsData = [
    {
      parentClass: 'mb-100 mb-md-60',
      number: '01',
      title1: t('Step 1 Title'),
      desc: t('Step 1 Description'),
      iconPath:
        'M0 46l29.5-29.5 10 10-29.5 29.5h-10v-10zM47.25 18.75l-5 5-10-10 5-5c1.125-1.125 2.5-1.125 3.625 0l6.375 6.375c1.125 1.125 1.125 2.5 0 3.625z',
    },
    {
      parentClass: 'mt-n140 mt-sm-0 mb-100 mb-md-60',
      number: '02',
      title1: t('Step 2 Title'),
      desc: t('Step 2 Description'),
      iconPath:
        'M24 26.5c0 0 1-0.625 2.5-0.875 2.625-0.5 4.875-0.625 5.875 1.125 1.25 2.125 2.375 6.625 2.125 10.625-0.125 2.125-0.625 2.75-0.625 2.75s-1.875 1.25-5.875 0.875c-4.375-0.375-5-1.875-5-1.875s0.625-1.5 1-5.375 0-7.25 0-7.25zM19 35.625c-2.125 0.5-4.75 1.25-4.75 1.25s5.625-0.5 8-1.125c-0.5 2.625-1.25 4.25-1.25 4.25s-10.375 10-14.5 10c-3.5 0-6.5-8.5-6.5-18s3.25-18 6.5-18c4.375 0 13.25 7.125 16 12.125 0 0 0.375 2 0.25 4-1.25-0.625-3-1.25-5.5-1.75-3.5-0.75-5.25-0.375-5.25-0.375s2.25 0.5 7.125 2.125c1.875 0.625 2.75 1 3.625 1.25 0 0.375-0.125 0.875-0.125 1.25 0 0.625 0 1.25-0.125 1.875-0.625 0.25-1.875 0.75-3.5 1.125zM49.5 14c3.25 0 6.5 8.5 6.5 18s-3 18-6.5 18c-4.625 0-13-8.5-14-9.875 0 0 0.5-0.625 0.625-2.75v-1.125c2 0.875 8.75 1.625 8.75 1.625s-2.625-0.75-5-1.375c-1.625-0.5-3.125-1-3.75-1.25-0.125-1.375-0.25-2.875-0.5-4.125 2.125-1.375 8.625-4.25 8.625-4.25s-1.875 0.25-4.375 1.125c-1.75 0.625-3.625 1.375-4.625 1.75-0.375-1.25-0.875-2.25-1.25-3 0-0.125-0.125-0.5-0.125-0.5v-0.125c2.75-5 11.125-12.125 15.625-12.125z',
    },
    {
      parentClass: 'mb-100 mb-md-60',
      number: '03',
      title1: t('Step 3 Title'),
      desc: t('Step 3 Description'),
      iconPath:
        'M24 8c13.25 0 24 9.625 24 21.375 0 7.375-6 13.25-13.375 13.25h-4.75c-2.25 0-4 1.75-4 4 0 1.125 0.375 2.125 1 2.75s1.125 1.5 1.125 2.625c0 2.25-1.75 4-4 4-13.25 0-24-10.75-24-24s10.75-24 24-24zM9.375 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM17.375 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM30.625 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM38.625 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4z',
    },
    {
      parentClass: 'mt-n140 mt-sm-0 mb-100 mb-md-60',
      number: '04',
      title1: t('Step 4 Title'),
      desc: t('Step 4 Description'),
      iconPath:
        'M25.25 46.625l-15.625 9.375 4.125-17.75-13.75-12 18.125-1.5 7.125-16.75 7.125 16.75 18.125 1.5-13.75 12 4.125 17.75z',
    },
    {
      parentClass: 'mb-md-60',
      number: '05',
      title1: t('Step 5 Title'),
      desc: t('Step 5 Description'),
      iconPath:
        'M24 8c13.25 0 24 9.625 24 21.375 0 7.375-6 13.25-13.375 13.25h-4.75c-2.25 0-4 1.75-4 4 0 1.125 0.375 2.125 1 2.75s1.125 1.5 1.125 2.625c0 2.25-1.75 4-4 4-13.25 0-24-10.75-24-24s10.75-24 24-24zM9.375 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM17.375 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM30.625 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM38.625 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4z',
    },
    {
      parentClass: 'mt-n140 mt-sm-0 mb-100 mb-md-60',
      number: '06',
      title1: t('Step 6 Title'),
      desc: t('Step 6 Description'),
      iconPath:
        'M25.25 46.625l-15.625 9.375 4.125-17.75-13.75-12 18.125-1.5 7.125-16.75 7.125 16.75 18.125 1.5-13.75 12 4.125 17.75z',
    },
  ];

  return (
    <>
      <section
        className={`page-section  scrollSpysection`}
        id="services"
        style={{ backgroundColor: '#FAF3E1' }}
      >
        <div className="container">
          <div className="row mb-100 mb-sm-80">
            <div className="col-sm-7 col-md-5">
              <div className="circle overflow-hidden">
                <Image
                  width={788}
                  height={280}
                  src="/assets/images/demo-strong/section-image-4.jpg"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
          {/* Features Grid */}
          <div className="row mb-100 mb-md-60">
            <div className="col-11 col-lg-10 offset-1 px-md-4">
              <div className="row gx-huge">
                {/* Features Item */}
                {stepsData.map((item, index) => (
                  <div key={index} className={`col-md-6 ${item.parentClass}`}>
                    <div className="position-relative">
                      <div className="features-1-number">{item.number}</div>
                      <div className="features-1-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          aria-hidden="true"
                        >
                          <path d={item.iconPath} />
                        </svg>
                      </div>
                      <div className="features-1-title  mb-40">
                        <span>{item.title1}</span> <br />
                        <span className="font-alt">{item.title2}</span>
                      </div>
                      <hr className="mt-0 mb-30 black" />
                      <p className="features-1-descr mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
                {/* End Features Item */}
              </div>
            </div>
          </div>
          {/* End Features Grid */}
          <div className="row">
            <div className="text-center local-scroll">
              <Link
                href={`${typeformWaitlistUrl}?utm_content=how-it-works`}
                className="btn btn-mod  btn-medium btn-circle white"
                data-btn-animate="y"
                style={{ backgroundColor: '#FF6D1F' }}
              >
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">Book your seat now</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Book your seat now
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
