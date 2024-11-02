import OnLogo from '@/components/OnLogo'
import Typewriter from '@/components/Typewriter'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='w-full max-w-6xl mx-auto my-5 tablet:my-10'>
      <div className='flex flex-col tablet:flex-row items-center justify-center gap-10 mb-6 laptop:mb-1'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-7 tablet:gap-5 items-center'>
              <div className='flex items-center justify-center w-20 h-20 bg-[#8BC2F2] rounded-full'>
                <OnLogo />
              </div>
              <div className='flex flex-col text-right text-[#0A416F]'>
                <h1 className='text-3xl font-bold'>ON-EYE</h1>
                <p className='text-xs'>TELEHEALTH</p>
              </div>
            </div>
            <div className='text-center leading-7 tablet:leading-9 w-auto tablet:w-[500px] laptop:w-auto'>
              Making quality eyecare affordable and accessible for all. Eliminating and reducing queues in our hospitals using tech
            </div>
          </div>

          <div className='flex gap-4'>
            <Link href={''}>
              <Button className='bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Doctor</Button>
            </Link>
            <Link href={''}>
              <Button className='bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>TeleAssistant</Button>
            </Link>
            <Link href={''}>
              <Button className='bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Admin</Button>
            </Link>
          </div>
        </div>

        <div className='hidden laptop:block'>
          <Image alt='' src={'/images/eye.jpg'} width={1000} height={1000} className='rounded-t-3xl rounded-b-xl h-[450px] object-cover'/>
        </div>
      </div>

      <div className='flex flex-col tablet:flex-row gap-1 laptop:w-full my-1 laptop:my-1 mx-2 laptop:mx-0'>
        <div className='basis-1/3'>
          <Image alt='' src={'/images/glasses.jpg'} width={1000} height={1000} className='rounded-2xl h-44 object-cover'/>
        </div>
        <div className='basis-1/3 bg-[#0A416F] h-44 rounded-2xl flex gap-2 items-center justify-center'>
          <div className='flex items-center justify-center w-16 h-16 bg-white rounded-full'>
            <OnLogo />
          </div>
          <div className='flex flex-col items-end justify-center h-44 text-right text-[#ECF3FA] cursor-default'>
            <h1 className='text-3xl font-bold'>ON-EYE</h1><span className='text-xs text-right'>TELEHEALTH</span>
          </div>
        </div>
        <div className='basis-1/3'>
          <Image alt='' src={'/images/slit.jpg'} width={1000} height={1000} className='rounded-2xl h-44 object-cover'/>
        </div>
      </div>

      <div className='flex flex-col tablet:flex-row gap-1 laptop:w-full mx-2 laptop:mx-0'>
        <div className='relative basis-2/3 bg-[#8BC2F2] h-48 rounded-2xl flex flex-col justify-center items-center cursor-default'>
          <Image alt='' src={'/images/eyemodel.jpg'} width={1000} height={1000} className='absolute top-4 left-40 border-1 opacity-70 border-blue-800 rounded-full w-10 h-10 object-cover'/>
          <div className='z-20 h-48 flex items-center justify-center'><Typewriter /></div>
          <Image alt='' src={'/images/slit.jpg'} width={1000} height={1000} className='absolute bottom-6 right-20 border-1 opacity-70 border-blue-800 rounded-full w-10 h-10 object-cover'/>
        </div>
        <div className='hidden tablet:block basis-3/4'>
          <Image alt='' src={'/images/eyeball.jpg'} width={1000} height={1000} className='rounded-2xl h-48 object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default page