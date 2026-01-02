import Link from 'next/link';

import { Button } from '../Button';
import { Container } from '@/components/ui/container';
import { Logo } from '../Logo';
import { SubHeading } from '@/components/ui/sub-heading';
import useWaitlistUrl from '@/hooks/useWaitlistUrl';
import {
  IconBrandWhatsapp,
  IconMail
} from '@tabler/icons-react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/constants';

export const Footer = () => {
  const waitlistUrl = useWaitlistUrl('footer');
  const legal = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy.html',
    },
    {
      title: 'Terms & Conditions',
      href: '/terms-and-conditions.html',
    },
  ];
  const company = [
    {
      title: 'About',
      href: '#about',
    },
    {
      title: 'How',
      href: '#how-it-works',
    },
    {
      title: 'Why',
      href: '#why',
    },
    {
      title: 'Events',
      href: '#events',
    },
    {
      title: 'Space',
      href: '#space',
    },
    {
      title: 'FAQs',
      href: '#faq',
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div className="mb-6 sm:col-span-2 md:col-span-4 lg:col-span-3">
          <Logo />
          <SubHeading as="p" className="mt-4 max-w-lg text-left">
            Just one click from connection.
          </SubHeading>
          <div className="mt-2 flex flex-row gap-1 items-center">
            <IconBrandWhatsapp className="h-5 w-5 text-gray-500" />
            <Link
              href="https://wa.me/85292098254"
              className="text-footer-link text-sm font-medium"
            >
              
              <span>+825 9209 8254</span>
            </Link>
          </div>
          <div className="flex flex-row gap-1 mt-2 items-center">
            <IconMail className="h-5 w-5 text-gray-500" />
            <Link
              href="mailto:contact@sereneexperience.com"
              className="text-footer-link text-sm font-medium"
            >
              contact@sereneexperience.com
            </Link>
          </div>
          <Button
            href={waitlistUrl}
            variant="primary"
            className="mt-4 mb-2"
          >
            Join Waitlist
          </Button>
           <div className="w-full h-12 flex items-center justify-start gap-3">
          <a href={APP_STORE_URL} target="_blank" style={{ display: 'inline-block' }}>
            <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1750118400" alt="Download on the App Store" style={{ width: 'auto', height: '41px', verticalAlign: 'middle', objectFit: 'contain' }} />
          </a>
          <a href={PLAY_STORE_URL} target="_blank" style={{ display: 'inline-block' }}>
            <img src="/assets/images/playstore.png" alt="Download on the Play Store" style={{ width: 'auto', height: '41px', verticalAlign: 'middle', objectFit: 'contain' }} />
          </a>
        </div>
        </div>
        <div className="col-span-1 mb-4 flex flex-col items-start md:col-span-1 md:mb-0 lg:col-span-2"></div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0 items-center">
          <p className="text-sm font-medium text-gray-600">Social Media</p>
          <Link
            href="https://www.instagram.com/serene_experience"
            rel="noopener nofollow"
            target="_blank"
            className="text-footer-link my-2 text-sm font-medium flex gap-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="">Instagram</span>
          </Link>
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0 items-center">
          <p className="text-sm font-medium text-gray-600">Company</p>
          {company.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0 items-center">
          <p className="text-sm font-medium text-gray-600">Legal</p>
          {legal.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
              target="_blank"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="my-4 flex flex-col items-center justify-between px-4 pt-8 md:flex-row">
        <p className="text-footer-link text-sm">
          © 2025 Serene Experience. All rights reserved.
        </p>
        <div className="mt-4 flex items-center gap-4 md:mt-0"></div>
      </div>
    </Container>
  );
};
