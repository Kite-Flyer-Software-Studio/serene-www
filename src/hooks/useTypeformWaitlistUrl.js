import useLocale from '@/i18n/useLocale';
import {
  SIGN_UP_FORM,
  // TYPEFORM_WAITLIST_EN_URL,
  // TYPEFORM_WAITLIST_ZH_URL,
  // MIGHTY_LANDING_URL,
} from '@/constants';

export default function useTypeformWaitlistUrl() {
  const locale = useLocale();
  // return locale == 'en' ? TYPEFORM_WAITLIST_EN_URL : TYPEFORM_WAITLIST_ZH_URL;
  return SIGN_UP_FORM;
}
