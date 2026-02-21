import { notFound } from 'next/navigation';
import Image from 'next/image';
import BookEvent from '@/components/BookEvent';
import { getSimilareventsBySlug } from '@/lib/actions/event.actions';
import { IEvent } from '@/database/event.model';
import EventCard from '@/components/EventCard';
import { cacheLife } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const EventDetailItem = ({icons,alt,label} : {icons: string, alt: string, label: string})=>(
   <div className='flex-row-gap-2 items-center'>
    <Image src={icons} alt={alt} width={17} height={17} />
    <p>{label}</p>
   </div>
)

const EventAgenda = ({agendaItems} : {agendaItems : string[]})=>(

  <div className='agenda'>
    <h2>Agenda</h2>

    <ul>
      {agendaItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

  </div>

)

const EventTags = ({tags} : {tags : string[]})=>(
  <div className='flex flex-row gap-1.5 flex-wrap'>

    {tags.map(tag=>(
      <div className="pill" key={tag}>{tag}</div>
    ))}

  </div>
)

const EventDetailsPage = async  ({ params }: { params: Promise<{ slug: string }> }) => {
  'use cache' // Enable Next.js 13.4+ caching for this page
  cacheLife('hours')
  const { slug } = await params;

  const request = await fetch(`${BASE_URL}/api/events/${slug}`)
  const { event } = await request.json()

  if(!event || !event.description) return notFound()

  const {description , image ,overview , date ,time,location, mode,agenda,audience ,organizer ,tags} = event


    const bookings =10

  const similarEvents = await getSimilareventsBySlug(slug)

  return (
    <section id="event" className='mx-auto max-w-7xl px-4 py-10'>
      <div className='header'>
        <h1>Event Description </h1>
      <p >{description}</p>
      </div>

      <div className="details">
        {/* Left - Side - Event Content  */}

        <div className='content'>
          <img src={image} alt="Event Banner " width = {800} height = {800}  className='banner'/>
          <section className='flex-col-gap-2'>
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

          <section className='flex-col-gap-2'>
            <h2>Event Details</h2>
            <EventDetailItem icons="/icons/calendar.svg" alt="calendar icon" label={date} />
            <EventDetailItem icons="/icons/clock.svg" alt="time icon" label={time} />
            <EventDetailItem icons="/icons/pin.svg" alt="location icon" label={location} />
            <EventDetailItem icons="/icons/mode.svg" alt="mode icon" label={mode} />
            <EventDetailItem icons="/icons/audience.svg" alt="audience icon" label={audience} />
          </section>

          <EventAgenda agendaItems={agenda} />

          <section className='flex-col-gap-2'>

            <h2>About the Organiser</h2>
            <p>{organizer}</p>
          </section>

          <EventTags tags={tags} />

        </div>

        {/* Right Side - Booking  */}

        <aside className='booking'>
          <div className='sign-up card'>
            <h2>Book Your Seat</h2>
            {
              bookings > 0 ? (
                <p className='text-sm'>
                  join {bookings} people who have already booked their spot !
                </p>
              ): (
                <p className='text-sm'>
                  Be the first one to book your spot !
                </p>
              )
            }

            <BookEvent eventId={event._id} slug={event.slug} />
          </div>
        </aside>
      </div>


            <div className='flex w-full flex-col gap-4 pt-20'>
              <h2>
                Similar Events
              </h2>
              <div className='events'>

              {similarEvents.length > 0 && similarEvents.map((event : IEvent)=>(
                <EventCard  key={event.title} {...event} />
              )) }

              </div>
            </div>

    </section>
  )
}

export default EventDetailsPage