import Image from 'next/image'
import React from 'react'

const Agent = ({userName}:AgentProps) => {
    const isSpeaking = true;
  return (
    <>
    <div className='call-view'>
        <div className='card-interviewer'>
            <div className='avatar'>
            <Image src='/favicon.ico' alt='robo' width={65} 
            height={54} className='object-cover'/>
            {isSpeaking && <span className='animate-speak'/>}
            </div>
            <h3>
                AI Interviewer
            </h3>
        </div>
        <div className='card-border'>
              <div className='card-content'>
               <Image src='/user-avatar.png' alt='user' width={540} height={540} className='rounded-full object-cover size-[120px]'/>
               <h3>
                {userName}
               </h3>
              </div>
        </div>
    </div>
    </>
  )
}

export default Agent