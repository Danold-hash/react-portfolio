import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <section className=''>
        <h2>Get in touch</h2>
        <div className='text-center pb-10'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href={`mailto:${CONTACT.email}`} className='my-4 hover:text-red-600 cursor-pointer'>{CONTACT.email}</a>
        </div>
    </section>
  )
}

export default Contact