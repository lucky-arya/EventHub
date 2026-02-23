import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link href='/' className='logo' >
            <Image src='/icons/logo.png' alt="logo" width={24} height={24} />
            <p>EventHub</p>
            </Link>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#events">Events</Link></li>
                <li><Link href="/create-events">Create Events</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar