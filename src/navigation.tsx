import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// A list of all locales that are supported
export const locales = ['fr', 'en'];
export const localePrefix = 'as-needed';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
