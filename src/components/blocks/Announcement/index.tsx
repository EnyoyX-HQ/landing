'use client'

import { useState, useEffect } from 'react'
const AnnouncementSaleBar = () => {
  return (
    <div className={`p-4 bg-ex-deep-green mx-auto max-w-full`}>
      <div className='flex items-center justify-center mx-auto flex-wrap'>
        <div className='inline-flex justify-center flex-row gap-4 items-center text-center flex-wrap'>
          <span className='gradient-text text-[12px] sm:text-sm text-center font-bold leading-7'>
            We're excited to announce our Beta release.
            <span className='inline-block ml-3'>
              <a
                href={'#tools'}
                type='button'
                className='items-center cursor-pointer border-[1px] rounded-[5px] gradient-text bg-[#171717] py-1 px-5'
              >
                Learn more
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
export default AnnouncementSaleBar
