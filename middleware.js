import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Handle static legal pages - allow direct access to .html files
  if (pathname === '/privacy-policy.html' || pathname === '/terms-and-conditions.html') {
    return NextResponse.next();
  }
  
  // Handle clean URLs for legal pages - rewrite to .html files
  if (pathname === '/privacy-policy') {
    return NextResponse.rewrite(new URL('/privacy-policy.html', request.url));
  }
  
  if (pathname === '/terms-and-conditions') {
    return NextResponse.rewrite(new URL('/terms-and-conditions.html', request.url));
  }
  
  // Handle localized legal pages - rewrite to .html files
  if (pathname === '/en/privacy-policy' || pathname === '/zh-HK/privacy-policy') {
    return NextResponse.rewrite(new URL('/privacy-policy.html', request.url));
  }
  
  if (pathname === '/en/terms-and-conditions' || pathname === '/zh-HK/terms-and-conditions') {
    return NextResponse.rewrite(new URL('/terms-and-conditions.html', request.url));
  }
  
  // Handle internationalization for all other routes
  return intlMiddleware(request);
}

export const config = {
  // Match internationalized pathnames and legal pages
  matcher: [
    '/',
    '/(zh-HK|en)/:path*',
    '/privacy-policy',
    '/terms-and-conditions',
    '/privacy-policy.html',
    '/terms-and-conditions.html'
  ]
};
