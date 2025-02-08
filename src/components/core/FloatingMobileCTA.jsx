import { LUMA_REGULAR_CALENDAR } from "@/constants"
import { useTranslations } from "next-intl"

export default function FloatingMobileCTA() {
  const t = useTranslations('Common');
  return (
    <a
      href={LUMA_REGULAR_CALENDAR}
      className="btn btn-mod btn-large btn-circle floating-mobile-cta"
      data-btn-animate="y"
      style={{ backgroundColor: '#000' }}
      target="_blank"
    >
      <span className="btn-animate-y">
        <span className="btn-animate-y-1">
          {t('floatingCTAButton')}
        </span>
        <span className="btn-animate-y-2" aria-hidden="true">
          {t('floatingCTAButton')}
        </span>
      </span>
    </a>
  )
}