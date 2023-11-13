import React from 'react'
import {About,Departments,Events,Footer,Intro,Statistics,Subscribe,Testimonials} from '../sections'

const Home = () => {
  return (
    <main className="relative">

    <section  className="x1:padding-1 wide:padding-r padding-b">
    <Intro />
    </section>
    <section className="padding">
      <About />
    </section>
    <section className="padding">
      <Departments />
    </section>
    <section className="padding">
      <Events />
    </section>
    <section className="padding bg-pale-blue">
      <Testimonials />
    </section>
    
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    </main>
  )
}

export default Home