// import useLocale from '@/i18n/useLocale';
import { WAITLIST_FORM } from '@/constants';

export default function useWaitlistUrl(source = '') {
  // const locale = useLocale();
  // return locale == 'en' ? TYPEFORM_WAITLIST_EN_URL : TYPEFORM_WAITLIST_ZH_URL;

  if (!source) {
    return WAITLIST_FORM;
  }

  // Add UTM parameters for tracking
  const url = new URL(WAITLIST_FORM);
  url.searchParams.set('utm_source', 'landing_page');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', 'waitlist');
  url.searchParams.set('utm_content', source);

  return url.toString();
}
