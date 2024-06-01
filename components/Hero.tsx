import React from 'react'

function Hero() {
  return (

<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center dark:bg-transparent">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
      Find Your Dream Home with Ease with 
      <span className='text-3xl font-mono text-blue-500'> Singhal Properties</span>
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
      Expert Realtors, Exceptional Homes : Expert Guidance for Every Step of Your Journey ! From Search to Settlement, We're with You All the Way !
      </p>

      <div className="mt-4 md:mt-8">
        <a
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
  )
}

export default Hero