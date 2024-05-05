import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';
 
export default createMiddleware({
  // A list of all locales that are supported
  //locales: ['en', 'fr'],
  locales,
  // Used when no locale matches
  //defaultLocale: 'fr'
  localePrefix,
  defaultLocale: 'en'
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