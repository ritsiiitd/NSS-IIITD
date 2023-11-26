import React from 'react'
import {About,Departments,Events,Footer,Intro,Statistics,Subscribe,Testimonial,FAQs} from '../sections'

const Home = () => {
  return (
    <main className="relative">

    <section  className="x1:padding-1 wide:padding-r padding-b">
      <Intro />
    </section>
    <section className="padding">
      <Departments />
    </section>
    <section className="padding">
      <Events />
    </section>
    <section className="padding bg-pale-blue">
      <Testimonial />
    </section>
    <section className="padding-x font-montserrat w-full">
      <Subscribe />
    </section>
    <section className="padding-x flex justify-center w-full">
      <FAQs />
    </section>
    </main>
  )
}

export default Home