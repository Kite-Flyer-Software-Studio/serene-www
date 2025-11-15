import { useTranslations } from 'next-intl';

import useWaitlistUrl from '@/hooks/useWaitlistUrl';

export default function FloatingMobileCTA() {
  const t = useTranslations('Common');
  const typeformWaitlistUrl = useWaitlistUrl();

  return (
    <a
      href={`${typeformWaitlistUrl}?utm_content=floating-cta`}
      className="btn btn-mod btn-large btn-circle floating-mobile-cta"
      data-btn-animate="y"
      style={{ backgroundColor: '#000' }}
      target="_blank"
    >
      <span className="btn-animate-y">
        <span className="btn-animate-y-1">{t('floatingCTAButton')}</span>
        <span className="btn-animate-y-2" aria-hidden="true">
          {t('floatingCTAButton')}
        </span>
      </span>
    </a>
  );
}
