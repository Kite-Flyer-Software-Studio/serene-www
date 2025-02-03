import { useLocale } from "next-intl";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSelect() {
  const locale = useLocale()
  const pathname = usePathname()

  const localHref = useMemo(
    () => (locale === 'en' ? '/zh-HK' : '/en'),
    [locale],
  )

  const localeCopy = useMemo(
    () => (locale === 'en' ? '繁' : 'English'),
    [locale],
  )

  const currentRelativePath = useMemo(() => {
    const splitPath = pathname.split('/')

    if (splitPath.length === 2) {
      return ''
    } else {
      return `/${splitPath.reverse()[0]}`
    }
  }, [pathname])

  return (
    <li className="languageSelect">
      <Link
        href={`${localHref}${currentRelativePath}`}
        className="flex flex-row items-center justify-center gap-1"
        style={{ display: 'flex', alignItems: 'center', gap: 4}}
      >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="14" height="21" viewBox="0 0 52 64">
          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26v0 0 0c-14.375 0-26-11.625-26-26s11.625-26 26-26v0 0 0zM27 21.5v9.5h9.375c-0.125-3.875-0.625-7.5-1.375-10.5-2.625 0.625-5.25 0.875-8 1zM27 19.5c2.5-0.125 5.125-0.375 7.5-1-1.75-5.75-4.75-9.5-7.5-10.25v11.25zM25 8.25c-2.875 0.75-5.625 4.5-7.5 10.25 2.375 0.625 4.875 0.875 7.5 1v-11.25zM25 21.5c-2.75-0.125-5.5-0.375-8.125-1-0.75 3-1.25 6.625-1.375 10.5h9.5v-9.5zM13.5 31c0.125-4 0.5-7.75 1.375-11-2.625-0.75-5.125-1.875-7.375-3.125-3.25 3.875-5.125 8.75-5.375 14.125h11.375zM13.5 33h-11.375c0.25 5.375 2.125 10.25 5.375 14.125 2.375-1.25 4.75-2.375 7.375-3.125-0.875-3.25-1.25-7-1.375-11zM15.5 33c0.125 3.875 0.625 7.5 1.375 10.5 2.625-0.625 5.375-1 8.125-1.125v-9.375h-9.5zM25 44.5c-2.625 0.125-5.125 0.375-7.5 1 1.875 5.75 4.625 9.5 7.5 10.25v-11.25zM27 55.75c2.75-0.75 5.75-4.5 7.5-10.25-2.375-0.625-5-0.875-7.5-1v11.25zM27 42.375c2.75 0.125 5.375 0.5 8 1.125 0.75-3 1.25-6.625 1.375-10.5h-9.375v9.375zM38.5 33c-0.125 4-0.625 7.75-1.5 11 2.625 0.75 5.125 1.875 7.5 3.125 3.25-3.875 5.125-8.75 5.375-14.125h-11.375zM38.5 31v0h11.375c-0.25-5.375-2.125-10.25-5.375-14.125-2.375 1.25-4.75 2.375-7.375 3.125 0.875 3.25 1.25 7 1.375 11zM43 15.25c-3.125-3.125-7-5.5-11.375-6.5 2 2.125 3.625 5.375 4.875 9.25 2.25-0.75 4.375-1.625 6.5-2.75zM20.375 8.75c-4.375 1-8.375 3.375-11.375 6.5 2 1.125 4.25 1.875 6.5 2.625 1.25-3.875 2.875-7 4.875-9.125zM9 48.75c3.125 3.125 7 5.5 11.375 6.5-2-2.125-3.75-5.375-5-9.25-2.25 0.75-4.375 1.625-6.375 2.75zM31.625 55.25c4.375-1 8.25-3.375 11.375-6.5-2.125-1.125-4.25-2-6.5-2.75-1.25 3.875-2.875 7.125-4.875 9.25z">
          </path>
        </svg>
        {localeCopy}
      </Link>
    </li>
  );
}
