import {About,Departments,Events,Footer,Intro,Statistics,Subscribe,Testimonials} from './sections'
import {Navbar} from './components'
import { BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import {Home,EventPage} from './Pages';
const App = () => (
  <BrowserRouter>
    <main className="relative">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<EventPage/>}></Route>
      </Routes>
      
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  </BrowserRouter>
);

export default App;

// This Is the main Application component rendering our navbar and containing the Routes
// Which makes this NSS IIITD website an SPA(Single page application), 
// We render Navbar and Footer Components here and provide Routes for different Pages
