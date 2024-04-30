import {
  Faq,
  Footer,
  Hero,
  Intro,
  Partners,
  Services,
  Testimonial,
  Tools,
} from '@/components'
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  console.log(t('title')) 
  return (
    <>
      <Hero />
      <Intro />
      <Tools />
      <Partners />
      <Services />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  )
}
