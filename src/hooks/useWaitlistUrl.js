// import useLocale from '@/i18n/useLocale';
import { WAITLIST_FORM } from '@/constants';

export default function useWaitlistUrl() {
  // const locale = useLocale();
  // return locale == 'en' ? TYPEFORM_WAITLIST_EN_URL : TYPEFORM_WAITLIST_ZH_URL;
  return WAITLIST_FORM;
}
