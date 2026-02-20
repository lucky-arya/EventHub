'use client'

import React from 'react'
import Image from 'next/image'


const ExploreBtn = () => {
  return (
    <a href="#events">
      <button type="button" id='explore-btn' className='mt-7 mx-auto' onClick={() => console.log('Clicked')}>
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="Arrow Down" width={24} height={24} className='' />
      </button>
    </a>
  )
}

export default ExploreBtn