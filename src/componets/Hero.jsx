import React, { useEffect, useState } from 'react'
import './Hero.css'
import gsap from 'gsap'
import {smallHeroVideo} from '../utils'
import {heroVideo} from '../utils'

const Hero = () => {
  const [videoSrc, setVideoSrc] = React.useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo)


  const handleVideoSrcSet = () => {
    if (window.innerWidth > 760) {
      setVideoSrc(heroVideo)
    } else {
      setVideoSrc(smallHeroVideo)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    gsap.to('#hero', {
      delay: 2,
      opacity: 1
    })
    gsap.to('#cta',{
      opacity: 1,
      delay: 2,
      y:-60
     })
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>iPhone 15</p>
        <div className='md:w-10/12 w-9/12'>
        <video autoPlay muted loop playsInline={true} key={videoSrc}>
          <source src={videoSrc} type='video/mp4'/>
        </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='#highlights' className='btn'>Buy</a>
        <p className='font-normal text-xl text-white mt-2'>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero
