/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
export const images = {
  domains: ['images.pexels.com'],
};

const withNextIntl = createNextIntlPlugin();
 
const nextConfig = {};
 
export default withNextIntl(nextConfig);