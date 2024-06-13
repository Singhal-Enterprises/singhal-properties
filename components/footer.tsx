import React from 'react'
import { PhoneCall } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-transparent lg:grid lg:grid-cols-5 mb-4">
    <div className="relative block h-32 sm:h-48 md:h-72 lg:col-span-2 lg:h-full">
    <img
      src="/c.png"
      alt=""
      className="absolute inset-0 h-full w-full object-contain"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Call us
          </span>

          <a
            href="tel:+919413353633"
            className="block text-xl font-medium hover:opacity-75 sm:text-xl hover:text-green-500"
          >
            9413353633 
          </a>
          <a
            href="tel:+916377893363 "
            className="block text-xl font-medium hover:opacity-75 sm:text-xl hover:text-green-500"
          >
            6377893363  
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
        <p className='font-medium hover:text-green-500'><a href="mailto:singhalpropertyofficial@gmail.com">Email : singhalpropertyofficial@gmail.com</a></p>
          <li>Address : 36-c, Shrinath Puram sector-c, Kota, Rajasthan
</li>
        </ul>
        <ul className="flex mt-8 space-x-4">
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Realtor
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Real Estate
              </a>
            </li>

          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 dark:text-white">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                About
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Meet the Team
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Accounts Review
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Privacy Policy
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Cookies
            </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
          &copy; 2024. Singhal Enterprises Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer