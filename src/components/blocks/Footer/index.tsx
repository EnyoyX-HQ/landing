import { Logo } from '@/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerLinks from '@/lib/footerLinks'
import { EksellDisplay } from '@/components/elements/FontContainer' /*${EksellDisplay.variable}*/

interface FooterLinksProps {
  title: string
  links: Links[]
}

interface Links {
  label: string
  href: string
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className='footer-link'>
      <h3 className={``}>{title}</h3>
      <ul className='links'>
        {links.map((item: any) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='section--padding bg-ex-deep-green'>
      <div className='ex--container'>
        <div className='flex flex-col lg:flex-row gap-14 lg:gap-40'>
          <div className='footer-logo'>
            <Link href='/'>
              <Image src={Logo} className='w-32' alt='logo' />
            </Link>
          </div>
          <div className='flex-grow'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
              {footerLinks.map((item: any) => (
                <FooterLinks key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className='copywrite flex flex-col md:flex-row items-center justify-between gap-5 py-10 text-slate-200 border-t border-yellow-200 opacity-25 mt-20'>
          <p>
            &copy;
            <Link href='/' target='_blank'>
              Envoyx health
            </Link>
          </p>
          <div className='flex gap-5'>
            <Link href={'/'}>Terms</Link>
            <Link href={'/'}>Privacy</Link>
            <Link href={'/'}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
