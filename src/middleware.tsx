import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';
 
export default createMiddleware({
  locales,
  //localePrefix,
  defaultLocale: 'fr',// Used when no locale matches
  //localeDetection: false,
});
 

//exclude api routes
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
  //matcher: ['/((?!api|_next|.*\\..*).*)']
};

// Match only internationalized pathnames
/*export const config = {
  matcher: ['/', '/(fr|en)/:path*']
};*/

// Include api routes
/*export const config = {
  matcher: '/((?!static|.*\\..*|_next).*)'
}*/