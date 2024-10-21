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
    console.log(splitPath, pathname)

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
      >
        {localeCopy}
      </Link>
    </li>
  );
}
