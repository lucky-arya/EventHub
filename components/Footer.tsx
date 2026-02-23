import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="glass mt-auto">
      <nav className="flex flex-row justify-between mx-auto container sm:px-10 px-5 py-4">
          <p>EventHub</p>
        <div className="flex items-center gap-6">
          <p className="text-sm text-light-200">© 2026 EventHub. All rights reserved.</p>
        </div>
      </nav>
    </footer>
  )
}

export default Footer