import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|_next/webpack-hmr|assets|favicon.ico).*)',
    '/(zh-HK|en)/:path*',
  ],
};
