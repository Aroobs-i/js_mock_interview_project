import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='card-cta'>

      <div className='flex flex-col gap-6 max-w-lg'>

           <h2> Get Interview-Ready with AI-powered Practice & Feedback.</h2>

           <p className='text-lg'>
            Practice on real interview questions and instant feedback.
           </p>

           <Button asChild className="btn-primary max-sm:w-full"></Button>

           <Link href="/interview">Start an Interview. </Link>
      </div>

      <Image src="/favicon.ico" alt="robo-dude" width={400} height={400}
      className='max-sm:hidden border-8'
      ></Image>

    </section>

    <section className='flex flex-col gap-6 mt-8 '>

      <h2>Your Interviews</h2>

      <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
        {/* <p>You haven&apos;t taken any interviews yet</p> */}

      </div>

    </section>

    <section className='flex flex-col mt-8  gap-6'>

      <h2>Take an Interview</h2>

      <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>
    
    </section>
    
    </>
  )
}

export default page