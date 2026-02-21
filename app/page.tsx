import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { events } from '@/lib/constants'
import { time } from 'console'
import React from 'react'
import { IEvent } from '@/database/event.model'
import { cacheLife } from 'next/cache'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


const Page = async () => {

  'use cache' // Enable Next.js 13.4+ caching for this page
  cacheLife('hours')

    const response = await fetch(`${BASE_URL}/api/events`)

    const {events} = await response.json()

  return (
    <section>
      <h1 className='text-center mt-5'>The Hub for Dev <br /> Event You Can't Miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in One Place</p>
      <ExploreBtn />

    <div className='mx-8 mt-20 space-y-7'>
      <h3>Featured Events</h3>
      <ul className='events'>
        {events && events.length>0 && events.map((event: IEvent) => (
          <li key={event.title} >
           <EventCard {...event} />
           </li>
        ))}
      </ul>
    </div>

    </section>
  )
}

export default Page
