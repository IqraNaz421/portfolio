
import Content from '@/components/Content'
import Hero from '@/components/Hero'
import React from 'react'
import Skills from '@/components/Skills'
import ClientReviewsCard from '@/components/ClientReviewsCard'
import AboutMe from '@/components/AboutMe'
import ThankYouSection from '@/components/ThankYou'
import Services from '@/components/Services'

const page = () => {
  return (
    <div>
      <Hero/>
      <Content/>
      <Skills/>
      <AboutMe/>
      <ClientReviewsCard/>
      <ThankYouSection/>
      <Services/>

    </div>
  )
}

export default page
