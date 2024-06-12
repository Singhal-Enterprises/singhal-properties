import React from 'react'
import { Mail, PhoneCall } from 'lucide-react';
import { contactMail } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function page() {
  return (
   
<div className="my-6">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-transparent shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-white font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-gray-400 mt-3">Have a real estate need or a big idea for a property? We’d love to hear about your project and provide assistance. Reach out to us today!</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <Mail />
                                </div>
                                <a target="blank" href="#" className="text-[#007bff] text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong><a href="mailto:singhalpropertyofficial@gmail.com">singhalpropertyofficial@gmail.com</a></strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Want to Contact Directly? Call or Whatsapp</h2>
                        <ul className="flex mt-3 space-x-4">
                            <li className="bg-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-300">
                                <a href="tel:+919413353633">
                                <PhoneCall />
                                </a>
                            </li>
                            <li className="bg-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-300">
                                <a href="https://wa.me/919413353633">
                                <FontAwesomeIcon icon={faWhatsapp} className='h-7 w-7' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <form className="ml-auto space-y-4" action={contactMail} method="post">
            <input type='text' placeholder='Name' name='name'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <input type='email' placeholder='Email' name='email'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <input type='text' placeholder='Subject' name='subject'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <input type='number' placeholder='Phone No' name='phone'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <textarea placeholder='Message' name='message'
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]" required></textarea>
            <button type='submit'
                className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
        </form>
            </div>
        </div>
  )
}

export default page