import {About,Departments,Events,Footer,Intro,Statistics,Subscribe,Testimonials} from './sections'
import {Navbar} from './components'
const App = () => (
  <main className="relative">
  
    <Navbar />
    
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
    <section className="padding">
      <Statistics />
    </section>
    <section className="padding bg-pale-blue">
      <Testimonials />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;