import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
    <>
    <h3>Interview Generation
        <Agent userName="You" userId="user1" type = "generate"/>
    </h3>
    </>
  )
}

export default page