import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <>
    <Link to={"/booking"} className='calltoaction'>Reserve a Table</Link>
    </>
  )
}

export default CallToAction