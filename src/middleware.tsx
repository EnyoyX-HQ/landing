import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'fr'
});
 

//exclude api routes
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};

// Match only internationalized pathnames
/*export const config = {
  matcher: ['/', '/(fr|en)/:path*']
};*/

// Include api routes
/*export const config = {
  matcher: '/((?!static|.*\\..*|_next).*)'
}*/