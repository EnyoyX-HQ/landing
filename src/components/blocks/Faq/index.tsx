'use client'

import { Accordion, Text } from '@mantine/core'
import faq from '@/lib/faq'
import { EksellDisplay } from '@/components/elements/FontContainer'

const Faq = () => {
  const items = faq.map((item) => (
    <Accordion.Item value={item.value} key={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>
        <Text size='sm'>{item.description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ))

  return (
    <section className='section--padding'>
      <div className='ex--container'>
        <div className='header text-center'>
          <h1 className={`${EksellDisplay.variable} text-3xl lg:text-5xl mb-3`}>
            Frequently Asked Questions
          </h1>
          <p className='text-slate-700 text-sm md:text-base w-full lg:w-[650px] flex mx-auto'>
            Everything you need to know about the product and billing. Can't
            find the answer you're looking for? Please chat to our friendly
            team.
          </p>
        </div>

        <Accordion
          className='w-full lg:w-[700px] mx-auto mt-12'
          defaultValue='Is there a free trial available?'
        >
          {items}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
