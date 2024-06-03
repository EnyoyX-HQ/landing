/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
export const images = {
  domains: ['images.pexels.com'],
};

const withNextIntl = createNextIntlPlugin();
 
const nextConfig = {};
 
export default withNextIntl(nextConfig);


// If the above doesn't work for next-intl try this:

/*const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
  // Any other Next.js configuration ...
});*/