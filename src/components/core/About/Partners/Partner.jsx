'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export const Partners = [
  {
    name: 'Kamcentre Roast Goose',
    subtitle: 'Best Siu Mei In Town',
    description:
      'Shares traditional chinese cuisine with everyone, especially the younger generation, offering a diverse selection of delicious siu mei and chinese dishes.',
    imgSrc: '/assets/images/serene/partners/kamcentre.jpg',
    instagram: 'https://www.instagram.com/kamcentre.roastgoose',
  },
  {
    name: 'Kani Kei',
    subtitle: 'Luxurious Japanese Crab Specialty Restaurant',
    description:
      'Discovers the exquisite flavors and dive into a culinary journey featuring authentic Japanese crab dishes, beautifully presented to tantalize your taste buds',
    imgSrc: '/assets/images/serene/partners/kanikei.jpg',
    instagram: 'https://www.instagram.com/kanikeihk',
  },
  {
    name: 'Tai Pan Bistro',
    subtitle: 'Private Kitchen ｜Event Space｜Bistro',
    description:
      'Located in the vibrant center of Tsim Sha Tsui, Tai Pan Bistro presents a modern Chinese dining experience that blends casual elegance with traditional Chinese influences',
    imgSrc: '/assets/images/serene/partners/taipan.png',
    instagram: 'https://www.instagram.com/taipanbistro',
  },
  {
    name: 'W Cellar',
    subtitle: 'HKQAA Fine Wine Storage Certified',
    description:
      'Offers top-quality wines in Hong Kong, expertly selected for events and personal enjoyment. Enjoy exceptional service, extensive stock, and unbeatable prices. Your trusted partner for all wine needs!',
    imgSrc: '/assets/images/serene/partners/wcellar.jpg',
    instagram: 'https://www.instagram.com/w.cellar',
  },
  {
    name: 'Yakitoritei',
    subtitle: 'Authentic Japanese Skewer Restaurant',
    description:
      'Experience the authentic taste of Japan, serving Yakitori and other homemade delights.',
    imgSrc: '/assets/images/serene/partners/yakitoritei-icon.jpg',
    instagram:
      'https://www.instagram.com/explore/locations/990566051/yakitoritei-happy-valley/?hl=en',
  },
  {
    name: 'Tai Pan Reflexology Parlour',
    subtitle: 'Wellness | Massage Parlour',
    description:
      "Situated at the heart of Tsim Sha Tsui, Tai Pan Reflexology Parlour is hidden under the bustling street of Nathan Road. Relax, rejuvenate and pampered by our therapist in our oriental environment that takes you back to 1940's China.",
    imgSrc: '/assets/images/serene/partners/taipanparlour.jpg',
    instagram: 'https://www.instagram.com/taipanreflexologyparlour/',
  },
];

export default function Partner() {
  const isotopContainer = useRef();

  const initIsotop = async () => {
    const Isotope = (await import('isotope-layout')).default;
    const imagesloaded = (await import('imagesloaded')).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: '.col-sm-6',
      layoutMode: 'masonry', // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      'progress',
      function (instance, image) {
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <div ref={isotopContainer} className="row mb-n30 masonry">
      {Partners.map((partner, index) => (
        <div
          key={index}
          className={`col-sm-6 mb-30 ${
            index == 1 ? 'mt-140 mt-xs-0 pt-140 pt-xs-0' : ''
          } `}
        >
          <div className="team-1-item round">
            <h4 className="team-1-title">{partner.name}</h4>
            <div className="team-1-image">
              <Image
                width={288}
                height={392}
                src={partner.imgSrc}
                alt={partner.name}
              />
            </div>
            <h5 className="team-1-role">{partner.subtitle}</h5>
            <p className="team-1-descr">{partner.description}</p>
            <div className="team-1-social-links">
              <a
                href={partner.instagram}
                target="_blank"
                rel="noopener nofollow"
              >
                <div className="visually-hidden">Instagram</div>
                <i className="fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      ))}
      {/* End Team Item */}
    </div>
  );
}
