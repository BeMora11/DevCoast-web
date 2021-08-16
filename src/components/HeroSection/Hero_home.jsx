import React from 'react'
import imagenes from '../../images/autoLoad_imagenes.jsx'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" mb-8 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">En DevCoast</span>{' '}
            <span className="block text-indigo-600 xl:inline">
              Formalizamos tu idea.
            </span>
          </h1>
          <p className="mb-8 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl font-extrabold sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            ¿Deseas llevar a tu empresa al siguiente paso?
          </p>
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Contactanos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/*<img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
         />*/}
        </div>
      </div>
    </section>
  )
}
