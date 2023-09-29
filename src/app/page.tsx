'use client'

import { Button } from 'flowbite-react'
import Header from './Components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full'>
      <Header/>
      <main className='flex flex-col items-center w-full bg-white text-black' style={{fontFamily:'Roboto, sans-serif'}}>
      <div className="flex min-h-screen flex-col items-center gap-24 w-full md:px-24 px-4 py-24">
        {/* <section className='flex flex-col items-center text-center'>
          <img src="./dmsbg100.png" alt="img"/>
          <br/><br/>
          <div className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>Networks, demystified.</div>
          <br/><br/>
          <div className='text-xl text-gray-600 mb-8 aos-init aos-animate'>Realize your potential with our secure gateway delivering reliable connectivity and advanced features</div>
        </section> */}
        <section className='flex flex-col items-center md:flex-row w-full'>
          <div className='flex flex-col gap-10 pb-10 md:order-1 order-2'>
            <div className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate'>DMSBG-100</div>
            <div className='font-inter text-3xl font-black'>High performance, secure, and reliable gateway for your network</div>
            <Link href='/products/dmsbg100'><Button className='bg-[#031159]'>Learn more</Button></Link>
          </div>
          <div className='md:order-2 order1 pb-10'><img src="./dmsbg100.png" alt="img"/></div>
        </section>
        <section className='flex flex-col items-center md:flex-row w-full'>
          <div className='flex flex-col gap-10 pb-10 md:order-1 order-2'>
            <div className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate'>DPBX-50</div>
            <div className='font-inter text-3xl font-black'>Reliable soft pbx for your office</div>
            <Link href='/products/dpbx50'><Button className='bg-[#031159]'>Learn more</Button></Link>
          </div>
          <div className='md:order-2 order1 pb-10'><img src="./dpbx50.png" alt="img"/></div>
        </section>
        <section>We make open source and secure network devices</section>
      </div>
      </main>
    </div>
  )
}
